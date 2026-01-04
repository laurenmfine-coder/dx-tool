/**
 * ReasonDx What-If History Q&A Expansion - Part 7
 * Last Updated: December 28, 2025
 */
(function() {
    'use strict';
    function init() {
        if (typeof window.cases === 'undefined') { setTimeout(init, 500); return; }
        expand();
    }
    function e(caseId, scenarioId, a) {
        const c = window.cases?.find(x => x.id === caseId);
        if (!c?.whatIfScenarios) return;
        const s = c.whatIfScenarios.find(x => x.id === scenarioId);
        if (s) { s.modifications = s.modifications || {}; s.modifications.historyAnswers = { ...s.modifications.historyAnswers, ...a }; }
    }
    function expand() {
        // GERD scenarios
        e('gerd-classic', 'whatif_gerd_true_gerd', {"heartburn": "Burning after eating.", "lying down": "Worse lying down.", "food triggers": "Spicy food, tomatoes.", "relief": "Antacids help.", "exertional": "Not with exertion.", "sweating": "No sweating."});
        e('gerd-classic', 'whatif_gerd_rv_infarct', {"chest pain": "Pressure and nausea.", "lightheaded": "Very lightheaded.", "worse sitting up": "Worse when I sit up.", "better lying flat": "Better lying down.", "bradycardia": "Heart rate is slow."});
        e('gerd-classic', 'whatif_gerd_complete_heart_block', {"lightheaded": "Very lightheaded.", "syncope": "Nearly passed out.", "heart rate": "Very slow, maybe 30-40.", "fatigue": "Very fatigued."});
        
        // GLAUCOMA scenarios
        e('red-eye-glaucoma', 'whatif_glaucoma_chronic', {"vision": "Gradual vision loss.", "peripheral": "Losing side vision.", "tunnel": "Like tunnel vision.", "pain": "No eye pain.", "headache": "No headache.", "gradual": "Very gradual over years.", "eye drops": "I'm on eye drops.", "compliance": "I sometimes forget them.", "family history": "My mother had glaucoma."});
        e('red-eye-glaucoma', 'whatif_glaucoma_keratitis', {"eye pain": "Severe eye pain.", "red": "Very red eye.", "photophobia": "Very light sensitive.", "tearing": "Excessive tearing.", "vision": "Vision decreased.", "contact lenses": "Yes, I wear contacts.", "overwear": "I slept in them.", "discharge": "Some discharge."});
        e('red-eye-glaucoma', 'whatif_glaucoma_uveitis', {"eye pain": "Eye pain.", "photophobia": "Light sensitive.", "red": "Red eye.", "vision": "Blurry vision.", "floaters": "Yes, floaters.", "autoimmune": "I have an autoimmune disease.", "which one": "Ankylosing spondylitis.", "back pain": "Yes, I have back pain.", "prior episodes": "I've had this before."});
        
        // GOUT scenarios
        e('gout', 'whatif_gout_knee', {"joint": "My knee is swollen.", "which knee": "Right knee.", "swollen": "Very swollen.", "hot": "Hot to touch.", "red": "Red and inflamed.", "can't bend": "I can't bend it.", "walk": "Hard to walk.", "sudden": "Came on suddenly.", "overnight": "Woke up with it.", "prior gout": "Yes, usually my toe.", "different": "First time in my knee.", "uric acid": "I know it's high.", "allopurinol": "I'm supposed to take it."});
        e('gout', 'whatif_gout_already_on_uric_acid', {"gout attack": "I'm having a gout attack.", "on allopurinol": "Yes, I take allopurinol.", "how long on it": "Started 2 weeks ago.", "just started": "Yes, recently started.", "why attack": "Why am I having an attack on medication?", "flare": "Is this a flare from starting the medicine?", "dose": "100mg daily.", "colchicine": "No, not on colchicine.", "prophylaxis": "They didn't give me anything else.", "frustrated": "I'm frustrated."});
        
        // HEADACHE scenarios
        e('headache', 'whatif_headache_migraine', {"headache": "Severe throbbing headache.", "location": "One side of my head.", "unilateral": "Yes, right side.", "throbbing": "Yes, pulsating.", "nausea": "Yes, nauseous.", "vomiting": "I threw up.", "light": "Light makes it worse.", "photophobia": "Very light sensitive.", "sound": "Sound bothers me too.", "aura": "I had visual changes before.", "what aura": "Zigzag lines.", "dark room": "I need to lie in a dark room.", "duration": "Usually lasts hours.", "history": "Yes, I get migraines.", "similar": "This is my typical migraine.", "triggers": "Stress, lack of sleep.", "medications": "I take sumatriptan."});
        
        // HEPATITIS scenarios
        e('acute-hepatitis', 'whatif_hepatitis_alcoholic', {"jaundice": "I'm turning yellow.", "drinking": "I drink heavily.", "how much": "A pint of vodka daily.", "how long": "For 20 years.", "belly": "My belly is swollen.", "ascites": "I have fluid.", "tender": "My liver area is tender.", "fever": "Yes, low-grade fever.", "appetite": "No appetite.", "nausea": "Very nauseous.", "prior liver problems": "They said I have cirrhosis.", "bleeding": "I had some GI bleeding before.", "encephalopathy": "I get confused sometimes."});
        e('acute-hepatitis', 'whatif_hepatitis_acetaminophen', {"tylenol": "I took a lot of Tylenol.", "how much": "I don't know, a lot.", "why": "For pain.", "intentional": "Maybe intentional.", "suicide": "I was thinking about hurting myself.", "when": "About 2 days ago.", "how many pills": "Maybe 20-30 pills.", "nausea": "Very nauseous now.", "vomiting": "Yes, vomiting.", "abdominal pain": "My right upper belly hurts.", "jaundice": "Maybe a little yellow.", "confused": "A bit confused.", "timeline": "Felt okay at first, now worse."});
        e('acute-hepatitis', 'whatif_hepatitis_fulminant', {"jaundice": "Very jaundiced.", "confused": "Very confused.", "encephalopathy": "What day is it?", "asterixis": "What's that?", "bleeding": "I'm bleeding from my gums.", "bruising": "Bruising easily.", "rapid": "This came on quickly.", "how fast": "Over 2-3 days.", "cause": "I don't know the cause.", "medications": "No new medications.", "drugs": "No drugs.", "mushrooms": "No wild mushrooms.", "travel": "No travel.", "hepatitis": "No known hepatitis.", "prior liver": "I was healthy before.", "age": "I'm 35."});
        
        // HTN scenarios
        e('new-htn', 'whatif_htn_emergency', {"headache": "Severe headache.", "vision": "Blurry vision.", "chest pain": "Chest pain.", "short of breath": "Short of breath.", "blood pressure": "They said it's very high.", "how high": "200/120 or something.", "nosebleed": "I had a nosebleed.", "nausea": "Nauseous.", "confused": "A bit confused.", "medications": "I take blood pressure pills.", "compliance": "I ran out.", "how long without": "About a week.", "why": "Couldn't afford refill."});
        e('new-htn', 'whatif_htn_young', {"blood pressure": "They said my blood pressure is high.", "age": "I'm 28.", "symptoms": "I've had headaches.", "palpitations": "Heart racing sometimes.", "sweating": "Episodes of sweating.", "flushing": "My face gets red.", "anxiety": "Feels like anxiety attacks.", "family history": "No family history of high BP.", "drugs": "No drugs.", "cocaine": "No cocaine.", "birth control": "Yes, I take birth control.", "sleep": "I snore badly.", "apnea": "My partner says I stop breathing.", "kidney": "I don't know about my kidneys.", "adrenal": "What's that?"});
        e('new-htn', 'whatif_htn_abdominal_bruit', {"high bp": "Yes, high blood pressure.", "young": "I'm 35.", "refractory": "It's hard to control.", "how many meds": "I'm on 3 medications.", "still high": "Still high despite meds.", "compliant": "Yes, I take them.", "abdominal pain": "Some abdominal discomfort.", "flank pain": "Maybe some flank pain.", "kidney function": "They said my kidney function is declining.", "smoking": "Yes, I smoke.", "fibromuscular": "What's that?", "renal artery": "I don't know.", "bruit": "They heard something in my belly?"});
        
        // HYPEREMESIS scenarios  
        e('nausea-vomiting', 'whatif_hyperemesis_molar', {"vomiting": "Can't keep anything down.", "severe": "Extremely severe.", "how far along": "About 10 weeks.", "bleeding": "I've had some bleeding.", "spotting": "Yes, spotting.", "size": "My uterus feels big.", "bigger than expected": "Maybe bigger than dates.", "no fetal heartbeat": "They couldn't find a heartbeat.", "ultrasound": "I haven't had one yet.", "grapelike": "What do you mean?", "hcg": "They said my levels are very high.", "thyroid": "They said my thyroid is overactive.", "hyperthyroid": "Yes, hyperthyroid symptoms.", "cysts": "They mentioned something about cysts."});
        e('nausea-vomiting', 'whatif_hyperemesis_not_pregnant', {"vomiting": "Severe vomiting.", "nausea": "Constant nausea.", "pregnant": "No, I'm not pregnant.", "test": "Pregnancy test was negative.", "weight loss": "I've lost a lot of weight.", "how much": "20 pounds.", "eating": "I can barely eat.", "early satiety": "I feel full quickly.", "bloating": "Very bloated.", "abdominal pain": "Some upper belly pain.", "diabetes": "Yes, I have diabetes.", "how long diabetic": "20 years.", "gastroparesis": "What's that?", "gastric emptying": "I don't know.", "medications": "Insulin and metformin."});
        e('nausea-vomiting', 'whatif_hyperemesis_wernicke', {"vomiting": "Weeks of vomiting.", "how long": "About 6 weeks.", "pregnant": "Yes, 14 weeks pregnant.", "confusion": "I'm getting confused.", "mental status": "Foggy thinking.", "eye movements": "My eyes feel weird.", "double vision": "Yes, double vision.", "balance": "I can't walk straight.", "ataxia": "Very unsteady.", "thiamine": "What's that?", "b1": "I don't know.", "tpn": "I was on IV nutrition.", "supplementation": "I don't know what they gave me."});
        
        // HYPONATREMIA scenarios
        e('hyponatremia', 'whatif_hyponatremia_hypovolemic', {"confusion": "Confused and weak.", "thirsty": "Not thirsty actually.", "dehydrated": "I've had vomiting and diarrhea.", "gi losses": "Lots of vomiting and diarrhea.", "how much": "For 4 days.", "dizzy": "Very dizzy.", "orthostatic": "Worse when I stand.", "dry": "My mouth is dry.", "urine": "Very little urine.", "dark urine": "Yes, very dark.", "medications": "I take a water pill.", "diuretic": "Yes, HCTZ.", "sodium": "They said my sodium is low."});
        e('hyponatremia', 'whatif_hyponatremia_overcorrected', {"sodium": "They're treating my low sodium.", "was low": "It was very low - 108.", "now": "Now they said it came up too fast.", "how fast": "I don't know exactly.", "symptoms": "I was getting better, now I feel weird.", "new symptoms": "Trouble speaking.", "speech": "Slurred speech.", "swallowing": "Hard to swallow.", "weakness": "Weakness in my arms and legs.", "quadriparesis": "All four limbs weak.", "locked in": "I don't know what that means.", "osmotic demyelination": "What's that?", "scared": "I'm scared."});
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
