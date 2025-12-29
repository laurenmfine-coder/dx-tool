/**
 * ReasonDx What-If History Q&A Expansion - Part 5
 * Covering additional clinical scenarios
 * Last Updated: December 28, 2025
 */
(function() {
    'use strict';
    function initializeHistoryExpansionPart5() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeHistoryExpansionPart5, 400);
            return;
        }
        console.log('[ReasonDx] Expanding What-If history Q&A libraries (Part 5)...');
        expandPart5Scenarios();
        console.log('[ReasonDx] History Q&A expansion Part 5 complete.');
    }
    function expandScenarioHistory(caseId, scenarioId, newAnswers) {
        const caseData = window.cases?.find(c => c.id === caseId);
        if (!caseData?.whatIfScenarios) return;
        const scenario = caseData.whatIfScenarios.find(s => s.id === scenarioId);
        if (!scenario) return;
        scenario.modifications = scenario.modifications || {};
        scenario.modifications.historyAnswers = { ...scenario.modifications.historyAnswers, ...newAnswers };
    }
    function expandPart5Scenarios() {
        // ADRENAL CRISIS
        expandScenarioHistory('adrenal-insufficiency', 'whatif_adrenal_crisis', {
            "hypotension": "My blood pressure is very low.", "blood pressure": "Dangerously low.", "shock": "I feel like I'm in shock.", "weak": "Extremely weak.", "fatigue": "Profound fatigue.", "dizzy": "Very dizzy.", "confusion": "I'm confused.", "nausea": "Severe nausea.", "vomiting": "I've been vomiting.", "abdominal pain": "My belly hurts.", "fever": "Yes, I have a fever.", "steroids": "Yes, I take prednisone daily.", "prednisone": "Yes, for autoimmune disease.", "stopped steroids": "I ran out about 5 days ago.", "why stopped": "Couldn't get a refill.", "stress": "I also got sick.", "trigger": "A stomach bug triggered this.", "adrenal insufficiency": "Yes, I have that.", "addison": "Yes, Addison's disease.", "skin": "My skin has gotten darker.", "salt craving": "I crave salt."
        });
        // ADRENAL SECONDARY
        expandScenarioHistory('adrenal-insufficiency', 'whatif_adrenal_secondary', {
            "pituitary": "I had a pituitary tumor removed.", "surgery": "Pituitary surgery 2 years ago.", "tumor": "Pituitary adenoma.", "replacement": "I take hydrocortisone.", "fatigue": "Very fatigued.", "weak": "Very weak.", "nausea": "Yes, nausea.", "low bp": "Blood pressure runs low.", "hyperpigmentation": "No, my skin is normal.", "other hormones": "I take thyroid medication and testosterone.", "sick": "I got a bad cold.", "stress dose": "Supposed to double dose when sick.", "did you double": "No, I forgot."
        });
        // ADRENAL SURGERY
        expandScenarioHistory('adrenal-insufficiency', 'whatif_adrenal_surgery', {
            "surgery": "I'm scheduled for surgery soon.", "what surgery": "Having my gallbladder removed.", "when": "Next week.", "steroids": "Yes, I take prednisone.", "how long": "For about 5 years.", "dose": "10mg daily.", "adrenal": "My doctor mentioned my adrenal glands.", "suppressed": "They said my adrenal glands may be suppressed.", "stress dose": "What's a stress dose?", "need more": "Do I need extra steroids?", "surgery risk": "Is surgery risky for me?", "told surgeon": "Yes, the surgeon knows.", "anesthesia": "I'm nervous about anesthesia.", "endocrine": "I see an endocrinologist."
        });
        // AFIB STROKE SYMPTOMS
        expandScenarioHistory('afib-rvr', 'whatif_afib_stroke_symptoms', {
            "weakness": "My right arm is weak.", "right arm": "Yes, right arm feels heavy.", "leg": "Right leg too.", "face": "My face might be drooping.", "speech": "Words are slurred.", "sudden": "It came on suddenly.", "when": "About an hour ago.", "afib": "Yes, I have AFib.", "blood thinner": "I take Eliquis.", "taking it": "I've been forgetting to take it.", "compliance": "Missed several doses.", "missed": "Yes, I've missed doses.", "stroke before": "No prior strokes.", "risk factors": "High blood pressure and diabetes.", "age": "I'm 74."
        });
        // AMENORRHEA PREGNANCY
        expandScenarioHistory('amenorrhea', 'whatif_amenorrhea_pregnancy', {
            "period": "Haven't had my period in 2 months.", "lmp": "About 8 weeks ago.", "regular": "Usually regular.", "pregnancy test": "Haven't taken one.", "could be pregnant": "Yes, I could be.", "sexually active": "Yes.", "contraception": "Condoms but not always.", "nausea": "Yes, morning nausea.", "breast": "Breasts are tender.", "fatigue": "More tired than usual.", "bloating": "Some bloating.", "urination": "Peeing more often."
        });
        // AMENORRHEA PCOS
        expandScenarioHistory('amenorrhea', 'whatif_amenorrhea_pcos', {
            "period": "My periods have always been irregular.", "irregular": "Very irregular since I started.", "how irregular": "Sometimes 2-3 months without.", "pregnant": "No, tests are negative.", "weight": "I've been gaining weight.", "where weight": "Mostly in my belly.", "acne": "Yes, bad acne.", "hair growth": "Excess hair on face and chest.", "hirsutism": "Yes, facial hair.", "dark patches": "Yes, on neck and armpits.", "diabetes": "I don't have it but worried.", "fertility": "Worried about pregnancy.", "ultrasound": "Never had pelvic ultrasound."
        });
        // AMENORRHEA HYPOTHALAMIC
        expandScenarioHistory('amenorrhea', 'whatif_amenorrhea_hypothalamic', {
            "period": "Haven't had period in 6 months.", "regular before": "Used to be regular.", "exercise": "Training for a marathon.", "how much exercise": "60-70 miles per week.", "weight": "I've lost weight.", "how much lost": "About 15 pounds.", "eating": "I watch what I eat carefully.", "calories": "Probably don't eat enough.", "stress": "A lot of stress.", "cold": "I'm always cold.", "hair": "Hair is thinning.", "fracture": "Had a stress fracture last year.", "pregnant": "Definitely not pregnant."
        });
        // ANAPHYLAXIS NO ALLERGEN
        expandScenarioHistory('anaphylaxis', 'whatif_anaphylaxis_no_allergen', {
            "trigger": "I have no idea what caused it.", "ate": "Nothing unusual.", "food": "Just normal food.", "bee sting": "No bee stings.", "medication": "No new medications.", "exercise": "I was exercising when it started.", "hives": "Yes, broke out in hives.", "swelling": "Lips and tongue swelled.", "throat": "Throat felt tight.", "epi": "Someone gave me an EpiPen.", "happened before": "Once before, also unknown cause.", "allergist": "Saw one but tests negative."
        });
        // ANAPHYLAXIS BETA BLOCKER
        expandScenarioHistory('anaphylaxis', 'whatif_anaphylaxis_beta_blocker', {
            "trigger": "Peanuts in a sauce.", "peanut allergy": "Yes, severe peanut allergy.", "hives": "Yes, hives all over.", "swelling": "Face and throat swelling.", "epi": "Used EpiPen but not getting better.", "response to epi": "Not working as well as usual.", "beta blocker": "Yes, I take metoprolol.", "why beta blocker": "For high blood pressure.", "heart rate": "Heart isn't racing like it usually does.", "prior reactions": "Epi always worked before.", "different": "This feels different."
        });
        // ANEMIA ELDERLY MALE
        expandScenarioHistory('anemia-workup', 'whatif_anemia_elderly_male', {
            "fatigue": "Very tired for past few months.", "weight loss": "Lost about 15 pounds.", "intentional": "No, didn't try to lose weight.", "appetite": "Decreased appetite.", "stool": "Stools have been darker.", "bowel changes": "More constipation.", "colonoscopy": "Had one 8 years ago.", "family history": "Father had colon cancer.", "age": "I'm 72.", "nsaids": "I take ibuprofen for arthritis.", "aspirin": "Yes, baby aspirin."
        });
        // ANEMIA HEMOLYTIC
        expandScenarioHistory('anemia-workup', 'whatif_anemia_hemolytic', {
            "fatigue": "Extremely tired.", "yellow": "Family says I look yellow.", "jaundice": "Yes, eyes are yellow.", "urine": "Urine is very dark.", "dark urine": "Like tea or cola.", "fever": "Some fever.", "back pain": "Some back pain.", "new medication": "Started Bactrim a week ago.", "antibiotic": "Yes, for UTI.", "lupus": "Yes, I have lupus.", "ethnicity": "I'm African American."
        });
        // ANXIETY HYPERTHYROID
        expandScenarioHistory('anxiety-gad', 'whatif_anxiety_hyperthyroid', {
            "anxiety": "Feeling very anxious.", "jittery": "Very jittery.", "restless": "Can't sit still.", "heart racing": "Heart races all the time.", "sweating": "I sweat a lot.", "heat intolerance": "Always hot.", "weight loss": "Lost weight eating more.", "eating more": "Appetite is huge.", "tremor": "Hands shake.", "diarrhea": "Loose stools.", "sleep": "Can't sleep well.", "eyes": "Eyes feel gritty and bulgy.", "neck": "Neck looks swollen.", "family history": "Mom has thyroid problems."
        });
        // ANXIETY PANIC DISORDER
        expandScenarioHistory('anxiety-gad', 'whatif_anxiety_panic_disorder', {
            "panic attacks": "Yes, severe panic attacks.", "how often": "Several times a week.", "describe": "Sudden terror, racing heart, can't breathe.", "duration": "10-20 minutes.", "sudden": "Come on suddenly.", "avoidance": "Avoiding places where I've had them.", "agoraphobia": "Afraid to go out sometimes.", "between attacks": "Worry about having another.", "er visits": "Been to ER multiple times.", "heart tests": "EKGs normal.", "caffeine": "5-6 cups of coffee a day.", "stress": "A lot of stress at work."
        });
        // ANXIETY SUBSTANCE
        expandScenarioHistory('anxiety-gad', 'whatif_anxiety_substance', {
            "drugs": "I took something at a party.", "what took": "I think cocaine.", "cocaine": "Yes, I used cocaine.", "when": "Saturday night.", "still using": "No, not since then.", "marijuana": "I smoke weed daily.", "alcohol": "Drink on weekends.", "symptoms": "Heart racing, sweating, can't sleep, paranoid.", "paranoid": "Feel like people are watching me.", "sleep": "Can't sleep.", "chest pain": "Some chest discomfort.", "want help": "I want to stop using."
        });
        // CHEST EXERTIONAL
        expandScenarioHistory('chest', 'whatif_chest_exertional', {
            "chest pain": "I get chest pain with exertion.", "when": "Walking uphill or climbing stairs.", "describe": "Pressure or tightness.", "location": "Center of chest.", "radiation": "Sometimes to left arm.", "how long": "5-10 minutes.", "rest": "Goes away when I rest.", "predictable": "Yes, same pattern.", "getting worse": "Maybe with less exertion now.", "at rest": "No, not at rest.", "risk factors": "High blood pressure and cholesterol.", "family history": "Dad had heart attack at 55.", "age": "I'm 62."
        });
        // CHEST PLEURITIC
        expandScenarioHistory('chest', 'whatif_chest_pleuritic', {
            "chest pain": "Sharp chest pain.", "sharp": "Very sharp.", "location": "Right side.", "breathing": "Worse when I breathe in.", "cough": "Coughing makes it worse.", "constant": "Comes and goes.", "exertion": "Not related to exertion.", "radiation": "Doesn't radiate.", "short of breath": "A little.", "fever": "Maybe low-grade.", "productive": "Yes, yellow-green sputum.", "sick": "Had cold symptoms for a week.", "leg swelling": "No leg swelling.", "travel": "No recent travel."
        });
        // CHEST RADIATION TO JAW
        expandScenarioHistory('chest', 'whatif_chest_radiation_jaw', {
            "chest pain": "Pressure in my chest going to my jaw.", "jaw": "Yes, pain in my jaw.", "radiation": "From chest to jaw and left arm.", "arm": "Yes, left arm too.", "describe": "Pressure, squeezing.", "pressure": "Like an elephant on my chest.", "where": "Center of my chest.", "when started": "About 30 minutes ago.", "sudden": "Yes, sudden onset.", "severity": "Very severe - 8/10.", "sweating": "Yes, I'm sweating.", "nausea": "Yes, I feel nauseous.", "short of breath": "Yes, short of breath.", "at rest": "It came on at rest.", "exertion": "I wasn't doing anything.", "still there": "Yes, it's still there.", "aspirin": "No, I haven't taken anything.", "risk factors": "High blood pressure, diabetes, high cholesterol.", "smoking": "I smoke half a pack a day.", "family history": "Mom had a heart attack.", "age": "I'm 58."
        });
        // CHF NEW MURMUR
        expandScenarioHistory('chf-exacerbation', 'whatif_chf_new_murmur', {
            "murmur": "They said I have a heart murmur.", "new murmur": "Yes, it's new.", "knew about murmur": "No, I didn't know about it.", "symptoms": "I've been more short of breath.", "short of breath": "Yes, especially lying down.", "orthopnea": "I need more pillows now.", "pnd": "I wake up short of breath.", "edema": "My legs are swollen.", "leg swelling": "Yes, more than usual.", "fatigue": "Very tired.", "exercise tolerance": "I can do less than before.", "fever": "I had fevers a few weeks ago.", "recent illness": "I was sick with something.", "infection": "I had a bad tooth infection.", "dental": "Yes, dental abscess.", "iv drug use": "No.", "endocarditis": "What's that?", "chills": "Yes, I had chills.", "night sweats": "Yes, night sweats.", "weight loss": "A little weight loss."
        });
        // CHF PRESERVED EF
        expandScenarioHistory('chf-exacerbation', 'whatif_chf_preserved_ef', {
            "short of breath": "I'm short of breath.", "when": "With exertion and sometimes at night.", "exertion": "Yes, with activity.", "orthopnea": "Better with pillows.", "pnd": "Sometimes wake up short of breath.", "edema": "Yes, leg swelling.", "leg swelling": "Worse by end of day.", "fatigue": "Very fatigued.", "ef": "They said my heart function is normal.", "ejection fraction": "Around 55-60%.", "normal ef": "Yes, they said EF is preserved.", "still have heart failure": "But I still have symptoms.", "hfpef": "They mentioned that term.", "diastolic": "Diastolic dysfunction.", "blood pressure": "I have high blood pressure.", "hypertension": "Yes, long-standing.", "diabetes": "Yes, type 2.", "obesity": "I'm overweight.", "afib": "Yes, I have AFib.", "age": "I'm 72.", "female": "Yes, I'm female."
        });
        // CHOLECYSTITIS GANGRENOUS
        expandScenarioHistory('cholecystitis', 'whatif_cholecystitis_gangrenous', {
            "pain": "Severe right upper abdominal pain.", "ruq": "Yes, right upper quadrant.", "severity": "10/10 - worst ever.", "fever": "Yes, high fever.", "temperature": "103°F.", "chills": "Shaking chills.", "rigors": "Yes, rigors.", "sick": "I feel very sick.", "toxic": "I feel terrible.", "diabetes": "Yes, I have diabetes.", "immunocompromised": "My immune system isn't great.", "duration": "Pain started 3 days ago.", "getting worse": "Getting much worse.", "gallstones": "Yes, I have gallstones.", "prior attacks": "I've had attacks before.", "this different": "This is much worse.", "vomiting": "Yes, vomiting.", "eating": "Can't eat anything.", "jaundice": "Maybe a little yellow."
        });
        // CHOLECYSTITIS CHARCOT
        expandScenarioHistory('cholecystitis', 'whatif_cholecystitis_charcot', {
            "pain": "Severe right upper belly pain.", "fever": "Yes, high fever.", "jaundice": "Yes, I'm turning yellow.", "yellow": "My eyes and skin are yellow.", "charcot": "I don't know what that is.", "triad": "Pain, fever, and jaundice.", "dark urine": "Yes, very dark urine.", "pale stool": "Yes, pale stools.", "chills": "Severe shaking chills.", "rigors": "Yes, rigors.", "confused": "A bit confused.", "blood pressure": "They said it's low.", "gallstones": "Yes, I have gallstones.", "prior ercp": "No prior procedures.", "pancreatitis": "No prior pancreatitis."
        });
        // CO POISONING SEVERE
        expandScenarioHistory('co', 'whatif_co_severe', {
            "headache": "Severe headache.", "confusion": "I'm very confused.", "dizzy": "Very dizzy.", "nausea": "Nauseous.", "vomiting": "I vomited.", "weak": "Very weak.", "passed out": "I think I passed out.", "syncope": "Yes, I lost consciousness.", "others": "Other family members are sick too.", "who else": "My wife and kids have headaches.", "heater": "We have a gas heater.", "appliances": "Gas stove and water heater.", "detector": "No CO detector.", "winter": "Yes, it's cold out.", "closed windows": "Windows are all closed.", "worse at home": "We all feel worse at home.", "better outside": "Yes, felt better when we went outside.", "cherry red": "I don't know about my skin color.", "chest pain": "Some chest tightness.", "heart": "My heart was racing."
        });
        // CO INTENTIONAL
        expandScenarioHistory('co', 'whatif_co_intentional', {
            "what happened": "I was in my car in the garage.", "intentional": "Yes, I was trying to hurt myself.", "suicide": "Yes, I wanted to die.", "method": "I left the car running with the garage closed.", "how long": "I don't know how long.", "found": "My daughter found me.", "unconscious": "Yes, I was unconscious.", "still want to die": "I'm not sure now.", "regret": "Maybe I regret it now.", "plan": "I had been planning this.", "prior attempts": "No prior attempts.", "mental health": "I've been very depressed.", "depression": "Severe depression.", "treatment": "I see a psychiatrist.", "medications": "I'm on antidepressants.", "working": "They're not working well.", "stressors": "Lost my job, wife left me.", "support": "Not much support.", "safe now": "I don't know if I feel safe."
        });
        // CO DELAYED SYNDROME
        expandScenarioHistory('co', 'whatif_co_delayed_syndrome', {
            "co exposure": "I had carbon monoxide poisoning 2 weeks ago.", "when": "About 2 weeks ago.", "treatment": "I was in the hospital.", "hyperbaric": "No, just oxygen.", "felt better": "I felt fine when I left the hospital.", "new symptoms": "But now I'm having new problems.", "memory": "My memory is terrible.", "cognitive": "I can't think clearly.", "confusion": "I'm confused a lot.", "personality": "My family says I'm different.", "behavior": "My behavior has changed.", "walking": "I'm having trouble walking.", "balance": "Poor balance.", "movement": "My movements are slow.", "parkinsonian": "I don't know what that means.", "delayed": "Why is this happening now?", "timeline": "I was fine for about a week then got worse."
        });
        console.log('[ReasonDx] Part 5 scenario expansions applied.');
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHistoryExpansionPart5);
    } else {
        initializeHistoryExpansionPart5();
    }
})();
