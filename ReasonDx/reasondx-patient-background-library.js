/**
 * ReasonDx Patient Background Library
 * Version 2.0 | December 2024
 * 
 * Comprehensive library of realistic patient responses for:
 * - Past Medical History
 * - Medications
 * - Allergies
 * - Surgical History
 * - Family History
 * - Social History (smoking, alcohol, drugs, occupation, living situation)
 * - Review of Systems defaults
 * 
 * Cases specify a patient profile, and responses are pulled from appropriate categories.
 * This creates realistic variety without requiring case-by-case authoring.
 */

const PatientBackgroundLibrary = (function() {
    'use strict';

    // ============================================================
    // MEDICATIONS BY PATIENT PROFILE
    // ============================================================
    
    const medications = {
        healthyYoungAdult: [
            "No medications. I don't take anything regularly.",
            "Nothing prescription. Maybe some ibuprofen when I need it.",
            "Just birth control pills.",
            "I take an antidepressant - sertraline, I think.",
            "Nothing really. Vitamin D in the winter.",
            "Just allergy medicine during pollen season - Zyrtec or Claritin.",
            "I take melatonin for sleep sometimes, but that's it.",
            "No prescription meds. I take a multivitamin.",
            "Just Adderall for my ADHD.",
            "Birth control and that's about it.",
            "Nothing regularly. Maybe Tylenol for headaches."
        ],
        
        middleAgedWithComorbidities: [
            "Lisinopril for blood pressure and metformin for my diabetes.",
            "I take atorvastatin for cholesterol and lisinopril for blood pressure.",
            "Blood pressure medicine - amlodipine I think - and a statin.",
            "Metformin twice a day, and I'm also on blood pressure medication.",
            "Let me think... lisinopril, metformin, and a baby aspirin.",
            "I take medication for my blood pressure and cholesterol. Losartan and simvastatin.",
            "Omeprazole for my acid reflux and blood pressure medicine.",
            "Just metoprolol for blood pressure and baby aspirin.",
            "I'm on three medications - blood pressure, cholesterol, and diabetes.",
            "Amlodipine, atorvastatin, and metformin.",
            "Blood pressure pill in the morning, cholesterol pill at night."
        ],
        
        elderlyPolypharmacy: [
            "Oh, I take quite a few. Let me see... blood pressure, diabetes, cholesterol, blood thinner, and something for my prostate.",
            "I have a pill box. About 8 or 9 different medications. I can show you the list.",
            "I'm on warfarin, metoprolol, lisinopril, atorvastatin, metformin, and gabapentin.",
            "A lot. My wife has to help me keep track. I know there's heart medicine, blood thinner, diabetes pills...",
            "Let's see - Coumadin, Lasix, lisinopril, carvedilol, and Lantus insulin.",
            "I take so many pills. Blood pressure, heart medicine, water pill, diabetes, cholesterol...",
            "I have a list in my wallet. About 10 medications. Do you want me to get it?",
            "Metoprolol, amlodipine, Eliquis, atorvastatin, metformin, omeprazole, and vitamin D.",
            "Several - I use one of those weekly pill organizers. Heart pills, blood thinner, diabetes, cholesterol, and a water pill.",
            "Too many to remember. I bring the bottles to my appointments."
        ],
        
        cardiacHistory: [
            "I'm on aspirin, metoprolol, lisinopril, and Plavix since my stent.",
            "Let's see - Eliquis for my A-fib, metoprolol, and lisinopril.",
            "I take a blood thinner since my heart attack, plus a beta blocker and ACE inhibitor.",
            "Aspirin, clopidogrel, atorvastatin, and carvedilol since my bypass surgery.",
            "Warfarin for my valve, plus digoxin and a water pill.",
            "They started me on a bunch after my heart attack - Brilinta, metoprolol, lisinopril, and a statin.",
            "I'm on heart rhythm medication - amiodarone - plus blood thinners.",
            "Aspirin and Plavix since my stents, plus blood pressure medicine.",
            "Entresto for my heart failure, plus spironolactone and furosemide.",
            "Several heart medications - I see a cardiologist who manages them."
        ],
        
        psychiatricHistory: [
            "I take sertraline for depression and clonazepam for anxiety.",
            "Lexapro, that's about it.",
            "Wellbutrin and Abilify - been on them for a few years.",
            "Lamictal and Seroquel for bipolar disorder.",
            "Just Prozac - been on it for 10 years.",
            "Zoloft and trazodone for sleep.",
            "Lithium and an antidepressant.",
            "Gabapentin for anxiety and an antidepressant."
        ],
        
        painCondition: [
            "I take gabapentin for nerve pain and tramadol when it gets bad.",
            "Ibuprofen mostly. Doctors don't like to give me anything stronger.",
            "Meloxicam for my arthritis.",
            "Muscle relaxers and anti-inflammatories for my back.",
            "Tylenol #3 when I need it, but I try not to use it much.",
            "Duloxetine for fibromyalgia pain, and Tylenol.",
            "I have a pain management doctor - I'm on some controlled medications."
        ]
    };

    // ============================================================
    // ALLERGIES
    // ============================================================
    
    const allergies = {
        none: [
            "No allergies that I know of.",
            "No, I can take anything.",
            "Nothing. No drug allergies.",
            "None that I'm aware of.",
            "Nope, no allergies.",
            "Not allergic to any medications."
        ],
        
        common: [
            "Penicillin - I get a rash.",
            "Sulfa drugs give me hives.",
            "Codeine makes me really nauseous.",
            "Allergic to latex - I break out.",
            "Penicillin and amoxicillin - anything in that family.",
            "Sulfa antibiotics - I had a bad reaction once.",
            "Codeine and morphine make me very sick.",
            "Ibuprofen bothers my stomach - not sure if that counts.",
            "Erythromycin gives me stomach problems.",
            "I think I'm allergic to amoxicillin - got hives as a kid."
        ],
        
        multiple: [
            "Penicillin, sulfa, and I'm allergic to contrast dye.",
            "Several antibiotics - penicillin, sulfa, and fluoroquinolones.",
            "I have a list - penicillin, sulfa, NSAIDs, and latex.",
            "Allergic to most antibiotics actually. I have to be careful.",
            "Penicillin, codeine, and shellfish - have to be careful with iodine too."
        ],
        
        serious: [
            "Penicillin - I had anaphylaxis. Needed an EpiPen.",
            "Sulfa - I had Stevens-Johnson syndrome, so they told me no sulfa ever.",
            "Severe reaction to contrast dye - they have to pre-medicate me.",
            "I carry an EpiPen for penicillin allergy - throat swells shut.",
            "Had a serious reaction to a bee sting once - carry an EpiPen now."
        ],
        
        environmental: [
            "Seasonal allergies - pollen, dust. But no drug allergies.",
            "I'm allergic to cats and dust, but no medication allergies.",
            "Bee stings - I carry an EpiPen. No drug allergies.",
            "Peanuts and tree nuts - nothing medication-wise."
        ]
    };

    // ============================================================
    // PAST MEDICAL HISTORY
    // ============================================================
    
    const pastMedicalHistory = {
        healthy: [
            "I'm pretty healthy. No major problems.",
            "Nothing significant. I rarely see doctors.",
            "I've been fortunate - no real health issues.",
            "Just the usual checkups. Nothing chronic.",
            "No medical problems that I know of."
        ],
        
        hypertension: [
            "High blood pressure, diagnosed about 5 years ago. It's controlled.",
            "Hypertension - been on medication for a few years.",
            "Blood pressure runs high. I take medication for it.",
            "Just high blood pressure. Well controlled on medicine."
        ],
        
        diabetes: [
            "Type 2 diabetes. Diagnosed about 3 years ago.",
            "Diabetes - I manage it with diet and metformin.",
            "I'm diabetic. Been on insulin for 2 years now.",
            "Type 2 diabetes. Trying to control it with diet but I'm on medication too.",
            "Sugar diabetes - runs in my family. On medication for it."
        ],
        
        cardiac: [
            "I had a heart attack 3 years ago. Got a stent placed.",
            "Heart disease - I've had bypass surgery.",
            "Atrial fibrillation. I'm on blood thinners.",
            "Congestive heart failure. I see a cardiologist regularly.",
            "Had a stent in 2019. Also have high blood pressure.",
            "A-fib and high blood pressure. I'm on several heart medications."
        ],
        
        pulmonary: [
            "COPD from years of smoking.",
            "Asthma since I was a kid.",
            "Sleep apnea - I use a CPAP machine.",
            "Emphysema. I use inhalers.",
            "Asthma - it's usually well controlled."
        ],
        
        multipleComorbidities: [
            "Where do I start? High blood pressure, diabetes, high cholesterol...",
            "I have the usual - diabetes, hypertension, high cholesterol.",
            "Diabetes, blood pressure, COPD, and a bad back.",
            "Heart disease, diabetes, and kidney problems.",
            "High blood pressure, diabetes, and I had a stroke a few years back.",
            "The whole list - diabetes, high blood pressure, cholesterol, thyroid..."
        ]
    };

    // ============================================================
    // SURGICAL HISTORY
    // ============================================================
    
    const surgicalHistory = {
        none: [
            "Never had surgery.",
            "No surgeries ever.",
            "I've been lucky - no operations.",
            "Nothing. Never been under anesthesia.",
            "No surgical history."
        ],
        
        common: [
            "Had my appendix out when I was a teenager.",
            "Gallbladder removed about 5 years ago. Laparoscopic.",
            "Tonsils out as a kid, that's it.",
            "C-section with my second child.",
            "Knee surgery - arthroscopy for a torn meniscus.",
            "Had my wisdom teeth out - does that count?",
            "Hernia repair about 10 years ago.",
            "Hysterectomy 3 years ago.",
            "Appendectomy at 18, and my gallbladder out at 45.",
            "Just a knee scope for an old sports injury."
        ],
        
        cardiac: [
            "Bypass surgery 5 years ago - triple bypass.",
            "Had a stent placed after my heart attack.",
            "Pacemaker put in 2 years ago.",
            "I have an ICD - defibrillator - for my heart.",
            "Cardiac catheterization and stent last year.",
            "Aortic valve replacement 3 years ago."
        ],
        
        orthopedic: [
            "Hip replacement on the right side, 2 years ago.",
            "Total knee replacement - both knees actually.",
            "Back surgery - fusion at L4-L5.",
            "Shoulder surgery - rotator cuff repair.",
            "Had my hip replaced. Doing much better now.",
            "Spine surgery for a herniated disc."
        ],
        
        multiple: [
            "Let's see... appendix, gallbladder, and a hysterectomy.",
            "Several - two C-sections, gallbladder, and knee surgery.",
            "Quite a few over the years. I can give you a list.",
            "I've had a few - appendix as a kid, gallbladder later, and knee surgery.",
            "Multiple surgeries - abdominal and orthopedic."
        ]
    };

    // ============================================================
    // FAMILY HISTORY
    // ============================================================
    
    const familyHistory = {
        noSignificant: [
            "Not really - my parents are pretty healthy for their age.",
            "Nothing major that I know of.",
            "My family is generally healthy.",
            "No serious diseases run in my family.",
            "Everyone's been pretty healthy actually."
        ],
        
        cardiac: [
            "My father had a heart attack at 60.",
            "Heart disease runs in my family - dad and grandpa both had bypasses.",
            "Mom has high blood pressure. Dad died of a heart attack at 58.",
            "My brother had a heart attack young - he was only 45.",
            "Heart problems on both sides. Several uncles with heart disease.",
            "My mother had a stroke at 70. Dad had high blood pressure."
        ],
        
        cancer: [
            "My mother had breast cancer - she survived.",
            "Colon cancer - my father had it at 65.",
            "There's some cancer - grandmother had breast cancer.",
            "Dad died of lung cancer, but he was a heavy smoker.",
            "My sister was diagnosed with breast cancer last year.",
            "Prostate cancer - my father and grandfather both had it."
        ],
        
        diabetes: [
            "Diabetes runs in my family - mom and grandmother both have it.",
            "My dad is diabetic.",
            "Type 2 diabetes on both sides.",
            "Several family members have diabetes.",
            "My mother and sister are both diabetic."
        ],
        
        mixed: [
            "Dad had a heart attack, mom has diabetes.",
            "Heart disease and cancer - dad had both.",
            "High blood pressure and diabetes on my mom's side.",
            "My father had heart disease, mother had breast cancer.",
            "Diabetes, heart disease, and high blood pressure all run in the family."
        ],
        
        psychiatric: [
            "Depression runs in my family.",
            "My mother had anxiety issues.",
            "There's some mental health history - my aunt was bipolar.",
            "Depression and anxiety on my mom's side.",
            "My sister has depression. My mom did too."
        ],
        
        unknown: [
            "I don't really know - I was adopted.",
            "Not sure about my biological family's history.",
            "I didn't know my parents well enough to say.",
            "I wasn't close with my family growing up."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - SMOKING
    // ============================================================
    
    const smoking = {
        never: [
            "No, never smoked.",
            "Never been a smoker.",
            "I've never smoked cigarettes.",
            "Nope, never even tried it.",
            "No, but I grew up around smokers."
        ],
        
        former: [
            "I quit about 5 years ago. Smoked a pack a day for 20 years before that.",
            "Used to smoke - quit 10 years ago.",
            "I quit when I got pregnant and never went back. That was 15 years ago.",
            "Former smoker. Quit cold turkey about 3 years ago.",
            "Yeah, I smoked for 30 years. Quit 5 years ago.",
            "I was a smoker for about 25 years. Been quit for 8 years now.",
            "Quit about 2 years ago. Was smoking a pack a day.",
            "Used to smoke half a pack a day. Quit after my heart attack."
        ],
        
        current: [
            "Yeah, about half a pack a day.",
            "I smoke. Maybe a pack a day. I know I should quit.",
            "About 10 cigarettes a day.",
            "Yes, I'm a smoker. About a pack a day for 20 years.",
            "I smoke, maybe 15 cigarettes a day.",
            "Pack and a half a day. Been smoking 30 years.",
            "Yeah, I smoke. Trying to cut down but it's hard.",
            "About a pack a day. Been smoking since I was 16."
        ],
        
        social: [
            "Only when I drink - maybe a few cigarettes on weekends.",
            "Socially - maybe a few when I'm out with friends.",
            "Very occasionally - like at parties.",
            "Just when I'm drinking. Not regularly."
        ],
        
        vaping: [
            "I don't smoke cigarettes but I vape.",
            "Switched to vaping a couple years ago.",
            "I use a vape pen. Quit cigarettes.",
            "Vaping - been doing it for about a year."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - ALCOHOL
    // ============================================================
    
    const alcohol = {
        none: [
            "No, I don't drink.",
            "Never - religious reasons.",
            "I used to but I've been sober for 5 years.",
            "No alcohol. Never really liked it.",
            "I don't drink at all."
        ],
        
        social: [
            "Socially - maybe a glass of wine with dinner on weekends.",
            "A beer or two on weekends, nothing heavy.",
            "Maybe 2-3 drinks a week.",
            "Only on special occasions.",
            "Light drinking - maybe a couple glasses of wine a week.",
            "Social drinker - a drink or two when we go out.",
            "Just occasional - maybe a beer after work on Fridays."
        ],
        
        moderate: [
            "I'd say a glass of wine most nights with dinner.",
            "Probably 5-6 beers a week.",
            "A couple drinks a day usually.",
            "Wine with dinner - probably 3-4 glasses a week.",
            "Maybe a drink or two most days."
        ],
        
        heavy: [
            "More than I should, probably.",
            "I drink most days - maybe a six-pack.",
            "I've been drinking more lately, maybe a bottle of wine a night.",
            "Heavy on the weekends. Lighter during the week.",
            "I drink quite a bit. Maybe 4-5 drinks a day.",
            "Honestly, more than I'd like to admit."
        ],
        
        inRecovery: [
            "I'm in recovery - been sober for 3 years.",
            "I don't drink anymore. Used to have a problem with it.",
            "Recovering alcoholic. 5 years sober.",
            "I go to AA. Haven't had a drink in 2 years."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - DRUG USE
    // ============================================================
    
    const drugUse = {
        none: [
            "No, never.",
            "No recreational drugs.",
            "Nothing illegal.",
            "I've never used drugs.",
            "No, definitely not."
        ],
        
        marijuana: [
            "Just marijuana occasionally.",
            "I use cannabis for sleep sometimes.",
            "Weed sometimes, nothing else.",
            "Medical marijuana for my chronic pain.",
            "Occasionally - maybe once or twice a month.",
            "I have a medical marijuana card."
        ],
        
        pastUse: [
            "I experimented in college but nothing now.",
            "Not anymore - I've been clean for 3 years.",
            "Used to, but I've been sober for a while now.",
            "In my younger days, but not for many years.",
            "I had a problem with pain pills, but I'm in recovery now."
        ],
        
        current: [
            "I use marijuana regularly.",
            "Cocaine occasionally - mostly at parties.",
            "I'll be honest, I use some stuff sometimes."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - OCCUPATION
    // ============================================================
    
    const occupation = {
        office: [
            "I work in an office - desk job mostly.",
            "I'm an accountant.",
            "I work in IT - computer stuff.",
            "Administrative assistant at a law firm.",
            "Marketing coordinator. Office work.",
            "I'm a project manager at a tech company.",
            "Work at a bank. Customer service.",
            "Office manager at a small business."
        ],
        
        healthcare: [
            "I'm a nurse at the hospital.",
            "I work at a nursing home.",
            "Medical assistant at a clinic.",
            "I'm a physician assistant.",
            "Dental hygienist.",
            "I work in healthcare - hospital administrator."
        ],
        
        blueCollar: [
            "Construction worker.",
            "I work in a warehouse.",
            "Mechanic - been doing it for 20 years.",
            "I drive a truck for a living.",
            "Factory work - manufacturing.",
            "Electrician.",
            "Plumber - own my own business.",
            "I work at a plant - industrial maintenance."
        ],
        
        service: [
            "I'm a server at a restaurant.",
            "Retail - I work at a department store.",
            "Hair stylist.",
            "I'm a teacher - elementary school.",
            "Work at a grocery store.",
            "Food service - I'm a cook.",
            "Customer service at a call center."
        ],
        
        retired: [
            "I'm retired now - used to work in sales.",
            "Retired teacher.",
            "I'm retired, but I used to work at the factory.",
            "Retired from the military.",
            "I retired a few years ago. Used to be in banking.",
            "Retired nurse."
        ],
        
        student: [
            "I'm a college student.",
            "I'm in grad school.",
            "Medical student.",
            "Full-time student, part-time barista."
        ],
        
        unemployed: [
            "I'm currently between jobs.",
            "I'm on disability.",
            "I'm a stay-at-home parent.",
            "Not working right now due to my health.",
            "I was laid off recently."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - LIVING SITUATION
    // ============================================================
    
    const livingSituation = {
        withFamily: [
            "I live with my spouse.",
            "With my husband/wife and two kids.",
            "I live with my wife. The kids are grown and gone.",
            "With my partner.",
            "At home with my family.",
            "I live with my parents right now."
        ],
        
        alone: [
            "I live alone.",
            "By myself in an apartment.",
            "Alone - I'm divorced.",
            "Just me and my cat.",
            "I live alone, but my daughter lives nearby.",
            "Solo. Been living alone for years."
        ],
        
        withRoommates: [
            "I have roommates.",
            "I live with a couple of friends.",
            "Shared apartment with two other people.",
            "College dorm with a roommate."
        ],
        
        assistedLiving: [
            "I'm in an assisted living facility.",
            "I live at a senior community.",
            "Nursing home.",
            "I'm in a group home.",
            "Memory care facility - I help take care of my wife there."
        ],
        
        homeless: [
            "I don't have a stable place right now.",
            "I've been staying in shelters.",
            "I'm homeless, staying with different friends.",
            "Between places at the moment."
        ]
    };

    // ============================================================
    // SOCIAL HISTORY - SEXUAL HISTORY
    // ============================================================
    
    const sexualHistory = {
        notActive: [
            "I'm not sexually active right now.",
            "No, not currently.",
            "Haven't been for a while.",
            "Not at the moment."
        ],
        
        monogamous: [
            "Just my husband/wife.",
            "I have one partner - we've been together for several years.",
            "Yes, with my boyfriend/girlfriend.",
            "Married - been faithful for 25 years.",
            "One steady partner."
        ],
        
        multiplePartners: [
            "I've had a few partners recently.",
            "A couple different partners in the last few months.",
            "I date around.",
            "Not in a committed relationship right now."
        ],
        
        protection: [
            "We use condoms.",
            "I'm on birth control.",
            "We're not using protection - we're trying to have a baby.",
            "Yes, we're careful about protection.",
            "Sometimes we use protection, sometimes not."
        ]
    };

    // ============================================================
    // REVIEW OF SYSTEMS - NEGATIVE RESPONSES
    // Default "no" responses for various ROS categories
    // ============================================================
    
    const rosNegatives = {
        general: [
            "No fevers or chills.",
            "No unexplained weight loss.",
            "My energy has been okay.",
            "No night sweats."
        ],
        
        heent: [
            "Vision is fine.",
            "Hearing is good.",
            "No sore throat.",
            "No sinus problems.",
            "No dental issues."
        ],
        
        cardiovascular: [
            "No chest pain.",
            "Heart has been fine.",
            "No palpitations.",
            "No leg swelling.",
            "I can climb stairs without problem."
        ],
        
        respiratory: [
            "Breathing is fine.",
            "No cough.",
            "No wheezing.",
            "No shortness of breath.",
            "Lungs feel clear."
        ],
        
        gastrointestinal: [
            "Appetite is good.",
            "Stomach is fine.",
            "No nausea or vomiting.",
            "Bowels are regular.",
            "No heartburn."
        ],
        
        genitourinary: [
            "No burning with urination.",
            "No frequency or urgency.",
            "No blood in urine.",
            "Bladder is fine."
        ],
        
        musculoskeletal: [
            "Joints feel okay.",
            "No muscle aches.",
            "Back is fine.",
            "No weakness."
        ],
        
        neurological: [
            "No headaches.",
            "No dizziness.",
            "No numbness or tingling.",
            "Memory is fine.",
            "Balance is good."
        ],
        
        skin: [
            "No rashes.",
            "Skin looks normal.",
            "No changes to moles or spots.",
            "No itching."
        ],
        
        psychiatric: [
            "Mood has been okay.",
            "No anxiety issues.",
            "Sleeping fine.",
            "No depression."
        ]
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getRandomResponse(category, subcategory) {
        const lib = {
            medications,
            allergies,
            pastMedicalHistory,
            surgicalHistory,
            familyHistory,
            smoking,
            alcohol,
            drugUse,
            occupation,
            livingSituation,
            sexualHistory,
            rosNegatives
        };

        if (!lib[category]) return null;
        if (!lib[category][subcategory]) {
            // Return from first available subcategory
            const firstKey = Object.keys(lib[category])[0];
            const options = lib[category][firstKey];
            return options[Math.floor(Math.random() * options.length)];
        }
        
        const options = lib[category][subcategory];
        return options[Math.floor(Math.random() * options.length)];
    }

    function getResponseForProfile(category, patientProfile) {
        // Determine appropriate subcategory based on patient profile
        let subcategory;
        
        switch(category) {
            case 'medications':
                if (patientProfile.age < 40 && !patientProfile.hasComorbidities) {
                    subcategory = 'healthyYoungAdult';
                } else if (patientProfile.hasCardiacHistory) {
                    subcategory = 'cardiacHistory';
                } else if (patientProfile.age >= 65) {
                    subcategory = 'elderlyPolypharmacy';
                } else {
                    subcategory = 'middleAgedWithComorbidities';
                }
                break;
            case 'smoking':
                subcategory = patientProfile.smokingStatus || 'never';
                break;
            case 'alcohol':
                subcategory = patientProfile.alcoholUse || 'social';
                break;
            case 'drugUse':
                subcategory = patientProfile.drugUse || 'none';
                break;
            case 'familyHistory':
                subcategory = patientProfile.familyHistoryType || 'noSignificant';
                break;
            case 'allergies':
                subcategory = patientProfile.allergyType || 'none';
                break;
            case 'pastMedicalHistory':
                subcategory = patientProfile.pmhCategory || 'healthy';
                break;
            case 'surgicalHistory':
                subcategory = patientProfile.surgicalCategory || 'none';
                break;
            case 'occupation':
                subcategory = patientProfile.occupationType || 'office';
                break;
            case 'livingSituation':
                subcategory = patientProfile.livingType || 'withFamily';
                break;
            default:
                subcategory = Object.keys(eval(category))[0];
        }
        
        return getRandomResponse(category, subcategory);
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        medications,
        allergies,
        pastMedicalHistory,
        surgicalHistory,
        familyHistory,
        smoking,
        alcohol,
        drugUse,
        occupation,
        livingSituation,
        sexualHistory,
        rosNegatives,
        getRandomResponse,
        getResponseForProfile
    };

})();

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PatientBackgroundLibrary;
}
if (typeof window !== 'undefined') {
    window.PatientBackgroundLibrary = PatientBackgroundLibrary;
}
