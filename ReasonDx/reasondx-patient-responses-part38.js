/**
 * ReasonDx Part 38: Acute and Chronic Cases
 * Cases: CHF Exacerbation, COPD Exacerbation, Anaphylaxis, OR Anaphylaxis, Seizure, Substance Use Alcohol
 */
(function() {
    'use strict';

    const CHF_EXACERBATION = {
        meta: { caseId: "chf-exacerbation", patientName: "William Harris", age: 72, diagnosis: "CHF exacerbation" },
        responses: {
            "hello|hi": "*sitting upright, labored breathing* Can't... breathe...",
            "what brings you in|chief complaint": "Short of breath. Worse than usual. Legs are swollen. Can't lie down.",
            "when|how long": "Been getting worse for a week. Really bad today.",
            "describe|breathing": "Gasping. Can't catch my breath. Even sitting still.",
            "worse|triggers": "Worse lying down. Worse with any activity.",
            "lying down|orthopnea": "Can't lie flat at all. Sleep in my chair.",
            "pnd|wake up gasping": "Wake up gasping. Terrifying.",
            "leg swelling|edema": "Legs like balloons. Feet too. Shoes don't fit.",
            "weight|gained": "Gained 12 pounds this week.",
            "cough": "Coughing. Frothy pink stuff.",
            "chest pain": "Tightness. Not sharp pain.",
            "diet|salt": "Had Thanksgiving dinner. Lots of salt.",
            "medications|compliance": "Ran out of water pill. Didn't refill.",
            "how long without": "Maybe a week without it.",
            "previous hospitalizations": "Hospitalized twice before for this.",
            "medical history": "Heart failure, heart attack 5 years ago, diabetes, high blood pressure.",
            "ejection fraction": "They said 30%. Weak heart.",
            "medications": "Supposed to take metoprolol, lisinopril, furosemide, aspirin, atorvastatin.",
            "allergies": "Penicillin.",
            "smoking": "Quit after heart attack.",
            "worried about|concerns": "Am I going to be admitted? Is my heart giving out?",
        }
    };

    const COPD_EXACERBATION = {
        meta: { caseId: "copd-exacerbation-acute", patientName: "Barbara Thompson", age: 68, diagnosis: "COPD exacerbation" },
        responses: {
            "hello|hi": "*using accessory muscles, pursed lips* Can't... breathe... worse...",
            "what brings you in|chief complaint": "COPD is acting up. Worse cough, more mucus, can't breathe. Inhalers not helping.",
            "when|how long": "Started 4 days ago. Getting worse.",
            "baseline|usual": "Usually short of breath but manage. This is much worse.",
            "cough|describe": "Coughing constantly. More mucus than usual.",
            "sputum|color": "Yellow-green. Thick. Hard to cough up.",
            "amount|how much": "Way more than usual. Filling tissues.",
            "fever": "Low fever. 100.6 yesterday.",
            "wheezing": "Wheezing more. Tight chest.",
            "inhalers|tried": "Using rescue inhaler every 2 hours. Not helping like usual.",
            "steroids|prednisone": "Have prednisone at home. Started it yesterday.",
            "antibiotics": "Sometimes doctor gives antibiotics. Not this time yet.",
            "sick|exposure": "Grandson had a cold. Was visiting.",
            "smoking|history": "Smoked 40 years. Quit 5 years ago. Finally.",
            "oxygen|home": "On 2 liters at home. Turned it up to 4.",
            "hospitalizations|previous": "In hospital for this twice last year. Once in ICU.",
            "intubated|ventilator": "Almost needed breathing tube last time.",
            "pulmonologist": "See Dr. Smith every 3 months.",
            "medications": "Spiriva, Symbicort, albuterol, prednisone now, home oxygen.",
            "medical history": "COPD, emphysema, high blood pressure.",
            "allergies": "Sulfa.",
            "worried about|concerns": "Am I going to need the ICU? I don't want a tube down my throat.",
        }
    };

    const ANAPHYLAXIS_CASE = {
        meta: { caseId: "anaphylaxis", patientName: "Jessica Martinez", age: 28, diagnosis: "Anaphylaxis" },
        responses: {
            "hello|hi": "*swollen lips, hives, distressed* Can't... breathe... throat closing...",
            "what brings you in|chief complaint": "*gasping* Ate shrimp... lips swelling... hives everywhere... throat tight...",
            "when|how long": "Maybe 20 minutes ago. Getting worse fast.",
            "what did you eat|trigger": "Shrimp. At a restaurant. Didn't know it was in the dish.",
            "shellfish|allergy known": "Allergic to shellfish. Thought I ordered something safe.",
            "symptoms|describe": "Lips huge. Throat tight. Hard to swallow. Itchy everywhere. Hives.",
            "breathing|describe": "Getting harder. Wheezy. Tight.",
            "epipen|did you use": "Don't have one. Was supposed to get one. Never did.",
            "previous reactions": "Had a bad reaction once as a kid. Hives and vomiting.",
            "worse this time": "Much worse. Throat never felt like this before.",
            "lightheaded|dizzy": "Dizzy. Heart racing.",
            "nausea|vomiting": "Nauseous. Threw up once.",
            "other allergies|medications": "No medication allergies. Just shellfish and maybe tree nuts.",
            "medical history": "Asthma. Eczema as a kid. Allergies.",
            "medications": "Albuterol inhaler. Birth control.",
            "asthma|using inhaler": "Used my inhaler. Helped a little.",
            "allergies|drug": "No drug allergies.",
            "worried about|concerns": "*struggling* Help me... please...",
        }
    };

    const OR_ANAPHYLAXIS = {
        meta: { caseId: "or-anaphylaxis", patientName: "Patient in OR", age: 45, diagnosis: "Intraoperative anaphylaxis" },
        responses: {
            "hello|hi": "*patient is under anesthesia - anesthesiologist responding* Patient crashing after antibiotic infusion!",
            "what's happening|chief complaint": "*anesthesiologist* Gave ancef, patient became hypotensive, bronchospasm, diffuse erythema. Anaphylaxis!",
            "when|how long": "*anesthesiologist* Two minutes after starting the antibiotic.",
            "vitals": "*anesthesiologist* BP 70/40, HR 130, SpO2 dropping to 88%, difficulty ventilating.",
            "rash|skin": "*anesthesiologist* Flushed red. Hives appearing on chest and arms.",
            "airway|breathing": "*anesthesiologist* Bronchospasm. High airway pressures. Hard to bag.",
            "what was given|trigger": "*anesthesiologist* Cefazolin IV. Just started.",
            "known allergies": "*anesthesiologist* Chart says no known allergies. But asking family now.",
            "family|history": "*nurse on phone* Family says she had a rash with penicillin as a child!",
            "cross reactivity|cephalosporins": "*anesthesiologist* Cephalosporin cross-reactivity. Should have caught it.",
            "treatment given": "*anesthesiologist* Gave epinephrine, fluids wide open, diphenhydramine, calling for more help.",
            "response|improving": "*anesthesiologist* Pressure coming up slowly. Still wheezy.",
            "surgery|procedure": "*anesthesiologist* Was starting a lap chole. Abdomen not open yet.",
            "patient history|comorbidities": "*anesthesiologist* Otherwise healthy. Just gallstones. ASA 2.",
        }
    };

    const SEIZURE_CASE = {
        meta: { caseId: "seizure", patientName: "Ryan Cooper", age: 24, diagnosis: "New onset seizure" },
        responses: {
            "hello|hi": "*postictal, confused* What... where am I... what happened...",
            "what brings you in|chief complaint": "*friend* He just had a seizure. Whole body shaking. Scared the hell out of me.",
            "what happened|describe": "*friend* He fell down, went stiff, then started shaking all over. Eyes rolled back.",
            "when|how long": "*friend* Happened 30 minutes ago. Shaking lasted maybe 2 minutes.",
            "how long|duration": "*friend* Felt like forever. Probably 1-2 minutes of shaking.",
            "before|warning": "*friend* Said he felt weird right before. Then down he went.",
            "aura|premonition": "*patient, groggy* Felt... strange smell... like burning...",
            "bit tongue|injury": "*friend* His tongue is bleeding. He must have bit it.",
            "incontinence|wet himself": "*friend* Yeah... he wet himself.",
            "after|postictal": "*friend* He was out of it. Confused. Sleepy. Still seems confused.",
            "first seizure|ever before": "*patient* Never... never happened before...",
            "family history|epilepsy": "*patient* My cousin... has seizures... I think...",
            "sleep|rest": "*friend* He's been up studying for days. Finals week. Maybe 3 hours sleep total.",
            "alcohol|drinking": "*friend* We were drinking last night. He had a lot. Maybe 8 beers.",
            "drugs|recreational": "*friend hesitates* We... there might have been something else. Some coke.",
            "how much|cocaine": "*friend* Not a lot. Line or two. Never happened before with it.",
            "medical history": "*patient* Healthy... nothing...",
            "head injury|trauma": "*patient* No... bumped my head in the fall maybe...",
            "medications": "*patient* Nothing.",
            "allergies": "*patient* None.",
            "worried about|concerns": "*friend* Is he epileptic now? Will it happen again?",
        }
    };

    const SUBSTANCE_USE_ALCOHOL = {
        meta: { caseId: "substance-use-alcohol", patientName: "James Wilson", age: 52, diagnosis: "Alcohol use disorder" },
        responses: {
            "hello|hi": "*tremulous, sweaty* Hey doc... I need help... can't stop drinking.",
            "what brings you in|chief complaint": "I drink too much. Want to stop. Tried to stop 2 days ago. Shaking, sweating, feel terrible.",
            "when|how long|drinking": "Drinking heavy for 20 years. Way worse last 5.",
            "how much|quantity": "A fifth of vodka a day. Sometimes more.",
            "when last drink|most recent": "2 days ago. Trying to quit.",
            "symptoms|withdrawal": "Shaking so bad. Sweating. Anxious. Nauseous. Heart racing.",
            "tremor|hands": "Look at my hands. *visible coarse tremor* Can't stop shaking.",
            "seizures|ever had": "Had a seizure last time I tried to quit. Scared me.",
            "when|how long ago": "Last year. Ended up in the hospital.",
            "hallucinations|seeing things": "Starting to see things. Bugs on the wall. Know they're not real.",
            "dts|delirium tremens": "Had the DTs before. Almost died. That's why I'm here.",
            "why stop now": "Wife left me. Going to lose my job. Hit bottom.",
            "tried quitting|rehab before": "Tried AA. Been to detox twice. Keeps coming back.",
            "other substances": "Just alcohol. Used to smoke pot.",
            "liver|health effects": "Doctor said my liver is damaged. Don't remember the word.",
            "cirrhosis|hepatitis": "Might be cirrhosis. Supposed to follow up. Didn't.",
            "medical history": "High blood pressure. Fatty liver or cirrhosis. Depression.",
            "medications": "Lisinopril. Sometimes take wife's Ativan when I can't get alcohol.",
            "allergies": "None.",
            "mental health|depression": "Depressed. Drink to feel better. Makes it worse.",
            "suicidal|thoughts": "No, not suicidal. Just want to get better.",
            "support|family": "Kids won't talk to me. Wife left. Brother is supportive.",
            "worried about|concerns": "Am I going to have a seizure? Can you help me stop safely?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['chf-exacerbation'] = CHF_EXACERBATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['copd-exacerbation-acute'] = COPD_EXACERBATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['anaphylaxis'] = ANAPHYLAXIS_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['or-anaphylaxis'] = OR_ANAPHYLAXIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['seizure'] = SEIZURE_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['substance-use-alcohol'] = SUBSTANCE_USE_ALCOHOL;
    
    console.log('ReasonDx Part 38 (CHF, COPD, Anaphylaxis, Seizure, Alcohol) loaded');

})();
