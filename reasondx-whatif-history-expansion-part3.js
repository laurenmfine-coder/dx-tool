/**
 * ReasonDx What-If History Q&A Expansion - Part 3
 * Covering additional high-yield clinical scenarios
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    function initializeHistoryExpansionPart3() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeHistoryExpansionPart3, 300);
            return;
        }
        
        console.log('[ReasonDx] Expanding What-If history Q&A libraries (Part 3)...');
        expandPart3Scenarios();
        console.log('[ReasonDx] History Q&A expansion Part 3 complete.');
    }

    function expandScenarioHistory(caseId, scenarioId, newAnswers) {
        const caseData = window.cases?.find(c => c.id === caseId);
        if (!caseData?.whatIfScenarios) return;
        
        const scenario = caseData.whatIfScenarios.find(s => s.id === scenarioId);
        if (!scenario) return;
        
        scenario.modifications = scenario.modifications || {};
        scenario.modifications.historyAnswers = {
            ...scenario.modifications.historyAnswers,
            ...newAnswers
        };
    }

    function expandPart3Scenarios() {

        // =====================================================================
        // CAP - IMMUNOCOMPROMISED SCENARIO
        // =====================================================================
        expandScenarioHistory('cap-pneumonia', 'whatif_cap_immunocompromised', {
            // Immunocompromise details
            "immune": "My immune system is weak because of my HIV.",
            "immunocompromised": "Yes, I have HIV.",
            "hiv": "Yes, I have HIV. Diagnosed about 5 years ago.",
            "aids": "I don't think I have AIDS, but my CD4 count is low.",
            "cd4": "My last CD4 was around 180.",
            "cd4 count": "Around 180.",
            "viral load": "My viral load has been detectable - I ran out of medications.",
            "detectable": "Yes, my viral load is detectable now.",
            "undetectable": "No, it's not undetectable anymore.",
            
            // Medications
            "medications": "I'm supposed to take antiretrovirals but I ran out.",
            "arv": "I'm not taking my ARVs currently.",
            "antiretrovirals": "I stopped about 2 months ago.",
            "haart": "I was on HAART but stopped.",
            "why stopped": "I lost my insurance and couldn't afford them.",
            "insurance": "I lost my insurance.",
            "afford": "I couldn't afford the medications.",
            "prophylaxis": "I was supposed to take Bactrim too but stopped.",
            "bactrim": "No, I'm not taking Bactrim.",
            "tmp-smx": "No, I stopped that too.",
            
            // PCP concern
            "pcp": "I don't know what PCP is.",
            "pneumocystis": "I've heard of that but don't know much.",
            "fungal": "Could this be a fungal infection?",
            "opportunistic": "I know I'm at risk for infections.",
            
            // Respiratory symptoms
            "cough": "I've had a cough for about 3 weeks. Getting worse.",
            "how long cough": "About 3 weeks.",
            "duration": "About 3 weeks of cough.",
            "productive": "Yes, I'm coughing up white/gray sputum.",
            "sputum": "White or grayish sputum.",
            "sputum color": "White to gray.",
            "blood": "No blood in the sputum.",
            "hemoptysis": "No hemoptysis.",
            
            // Systemic symptoms
            "fever": "Low-grade fever on and off.",
            "temperature": "Around 100-101.",
            "night sweats": "Yes, I've had night sweats.",
            "sweats": "Yes, drenching night sweats.",
            "weight loss": "I've lost maybe 10-15 pounds over the past few months.",
            "how much weight": "10-15 pounds.",
            "appetite": "Poor appetite.",
            "eating": "I haven't been eating well.",
            "fatigue": "Very fatigued.",
            "tired": "Exhausted all the time.",
            "weak": "Very weak.",
            
            // Dyspnea
            "short of breath": "Yes, especially with exertion.",
            "breathing": "Trouble breathing, especially when I walk.",
            "dyspnea": "Yes, dyspnea on exertion.",
            "exertional": "Yes, with any activity.",
            "rest": "I'm okay at rest but any activity makes me winded.",
            "walking": "Even walking makes me short of breath.",
            "stairs": "I can't do stairs.",
            "oxygen": "I don't use oxygen at home.",
            
            // Risk factors
            "tb": "I was tested for TB before - it was negative.",
            "tuberculosis": "I don't think I have TB.",
            "tb test": "I had a negative TB test.",
            "exposure": "I don't know of any TB exposure.",
            "travel": "No recent travel.",
            "homeless": "No, I have housing.",
            "jail": "No, I haven't been incarcerated.",
            "drugs": "No IV drugs.",
            "iv drugs": "No.",
            "smoking": "I smoke about half a pack a day.",
            "cigarettes": "Yes, I smoke."
        });

        // =====================================================================
        // CAP - ASPIRATION RISK SCENARIO
        // =====================================================================
        expandScenarioHistory('cap-pneumonia', 'whatif_cap_aspiration_risk', {
            // Aspiration risk factors
            "swallowing": "I've had trouble swallowing since my stroke.",
            "dysphagia": "Yes, I have dysphagia.",
            "choke": "I choke on food and liquids sometimes.",
            "choking": "Yes, I choke frequently.",
            "cough when eating": "Yes, I cough when I eat or drink.",
            "cough with meals": "Yes, especially with thin liquids.",
            "liquids": "Thin liquids are the worst.",
            "thickened": "I'm supposed to use thickened liquids but I don't always.",
            "speech therapy": "I saw a speech therapist after my stroke.",
            "swallow study": "I had a swallow study - it showed aspiration.",
            
            // Stroke history
            "stroke": "Yes, I had a stroke about 6 months ago.",
            "cva": "Yes, CVA 6 months ago.",
            "when stroke": "About 6 months ago.",
            "weakness": "I have some weakness on my right side from the stroke.",
            "residual": "Yes, some residual weakness.",
            "rehab": "I did rehab but still have some problems.",
            
            // Neurological
            "neuro": "I have weakness and trouble swallowing from my stroke.",
            "dementia": "No dementia.",
            "parkinson": "No Parkinson's disease.",
            "als": "No ALS.",
            "ms": "No MS.",
            "myasthenia": "No myasthenia.",
            
            // GERD/reflux
            "reflux": "Yes, I have bad reflux.",
            "gerd": "Yes, GERD.",
            "heartburn": "Yes, frequent heartburn.",
            "regurgitation": "Yes, food comes back up sometimes.",
            "lying down": "Worse when I lie down.",
            "elevate head": "I'm supposed to elevate my head but don't always.",
            "ppi": "I take omeprazole.",
            "omeprazole": "Yes, for reflux.",
            
            // Current pneumonia
            "cough": "Yes, productive cough with bad-smelling sputum.",
            "sputum": "It smells really bad - foul.",
            "foul": "Yes, foul-smelling sputum.",
            "smell": "It smells terrible.",
            "purulent": "Yes, thick and purulent.",
            "fever": "Yes, I have fever.",
            "chills": "Some chills.",
            
            // Living situation
            "living": "I live in a nursing home.",
            "nursing home": "Yes, I'm in a nursing facility.",
            "snf": "Yes, SNF.",
            "assisted living": "No, nursing home level.",
            "help": "I need help with most things.",
            "feeding": "Someone helps me eat.",
            "fed": "I'm fed by staff.",
            "tube": "No feeding tube.",
            "peg": "No PEG tube."
        });

        // =====================================================================
        // SEPSIS - NO CLEAR SOURCE SCENARIO
        // =====================================================================
        expandScenarioHistory('sepsis', 'whatif_sepsis_no_source', {
            // Fever without clear source
            "fever": "Yes, high fever - 103°F.",
            "temperature": "103 degrees.",
            "chills": "Shaking chills.",
            "rigors": "Yes, rigors.",
            "sick": "I feel very sick.",
            
            // No obvious source
            "source": "I don't know where this came from.",
            "infection": "I don't know where the infection is.",
            "what infection": "I have no idea.",
            "where": "I don't know where it's coming from.",
            
            // Respiratory - negative
            "cough": "No cough.",
            "pneumonia": "No lung symptoms.",
            "breathing": "My breathing is fast but no cough.",
            "sputum": "No sputum.",
            "chest": "No chest symptoms.",
            
            // Urinary - negative
            "urine": "No burning or frequency.",
            "uti": "I don't think it's a UTI.",
            "dysuria": "No dysuria.",
            "burning pee": "No burning.",
            "frequency": "No urinary frequency.",
            "foley": "No catheter.",
            
            // Abdominal - negative
            "belly": "No abdominal pain.",
            "abdominal": "Belly feels okay.",
            "stomach": "No stomach pain.",
            "diarrhea": "No diarrhea.",
            "nausea": "Some nausea.",
            "vomiting": "No vomiting.",
            
            // Skin - negative
            "skin": "No rashes or wounds.",
            "rash": "No rash.",
            "wound": "No wounds or cuts.",
            "cellulitis": "No red areas on my skin.",
            "abscess": "No abscesses.",
            "sore": "No sores.",
            
            // LINE/PORT - POSITIVE
            "line": "I do have a port for my chemotherapy.",
            "port": "Yes, I have a chemo port.",
            "catheter": "I have a port-a-cath.",
            "central line": "Yes, I have a port.",
            "iv": "I have a port they access for chemo.",
            "picc": "No PICC, I have a port.",
            "tunneled": "It's a tunneled port.",
            "when placed": "About 6 months ago.",
            "redness port": "Maybe a little red around it.",
            "tender": "A bit tender there actually.",
            "drainage": "No drainage from it.",
            
            // Cancer/chemo history
            "cancer": "Yes, I have cancer - breast cancer.",
            "what cancer": "Breast cancer.",
            "type": "Breast cancer, stage 3.",
            "chemo": "I'm getting chemotherapy.",
            "chemotherapy": "Yes, I'm on chemo.",
            "last chemo": "About 10 days ago.",
            "when chemo": "10 days ago.",
            "regimen": "I get it every 3 weeks.",
            
            // Immunocompromised
            "immunocompromised": "My immune system is weak from chemo.",
            "immune": "Weakened from chemotherapy.",
            "neutropenic": "My white counts run low.",
            "white count": "They told me my white count gets low.",
            "wbc": "It's usually low after chemo.",
            "counts": "My blood counts drop after chemo.",
            "nadir": "I think I'm near my nadir.",
            
            // Symptoms
            "weak": "I feel very weak.",
            "confused": "A bit confused.",
            "lightheaded": "Lightheaded.",
            "dizzy": "Dizzy.",
            "heart racing": "My heart is racing.",
            "fast heart": "Yes, my heart is fast.",
            "blood pressure": "I don't know my blood pressure."
        });

        // =====================================================================
        // SEPSIS - FLUID REFRACTORY SCENARIO
        // =====================================================================
        expandScenarioHistory('sepsis', 'whatif_sepsis_fluid_refractory', {
            // Already received fluids
            "fluids": "They already gave me a lot of IV fluids.",
            "iv fluids": "Yes, I've had several bags of fluids.",
            "how much fluid": "I think they said 3 or 4 liters.",
            "liters": "Several liters.",
            "bolus": "Multiple boluses.",
            "resuscitation": "They've been giving me fluids.",
            
            // Still hypotensive
            "blood pressure": "They said my blood pressure is still low.",
            "bp": "Still low despite the fluids.",
            "low bp": "Yes, blood pressure won't come up.",
            "hypotensive": "Yes, I'm hypotensive.",
            "pressure": "My pressure won't respond to fluids.",
            
            // Altered mental status
            "confused": "I'm very confused. I don't know where I am.",
            "confusion": "Yes, I'm confused.",
            "mental status": "I'm not thinking clearly.",
            "alert": "I'm drowsy and confused.",
            "oriented": "I don't know what day it is or where I am.",
            "family": "My family says I'm not making sense.",
            "talking": "I'm not talking right.",
            
            // Poor perfusion
            "cold": "My hands and feet are cold.",
            "extremities": "Cold extremities.",
            "mottled": "My legs look mottled.",
            "mottling": "Yes, mottled skin.",
            "color": "I look gray.",
            "pale": "Very pale.",
            "clammy": "Cold and clammy.",
            
            // Urine output
            "urine": "I haven't urinated much.",
            "peeing": "Very little urine.",
            "output": "They said my urine output is low.",
            "foley": "They put in a catheter.",
            "catheter": "Yes, I have a Foley now.",
            
            // Source
            "source": "They think it's from my pneumonia.",
            "pneumonia": "Yes, I have pneumonia.",
            "infection": "Lung infection.",
            "cough": "Yes, bad cough with fever.",
            
            // Vasopressors
            "pressors": "They mentioned starting pressors.",
            "vasopressors": "Something about vasopressors.",
            "medicine for bp": "They want to give me medicine to raise my blood pressure.",
            "norepinephrine": "I don't know what that is.",
            "levophed": "They mentioned that."
        });

        // =====================================================================
        // COPD EXACERBATION - SEVERE ACIDOSIS SCENARIO
        // =====================================================================
        expandScenarioHistory('copd-exacerbation', 'whatif_copd_severe_acidosis', {
            // Severe respiratory distress
            "breathing": "I can barely breathe. This is the worst it's ever been.",
            "short of breath": "Severely short of breath.",
            "dyspnea": "Terrible dyspnea.",
            "air": "I can't get enough air.",
            "worst ever": "This is the worst breathing I've ever had.",
            "gasping": "I'm gasping for air.",
            
            // Accessory muscles/fatigue
            "tired": "I'm exhausted from trying to breathe.",
            "exhausted": "Yes, exhausted.",
            "fatigue": "I'm getting tired.",
            "muscles": "My neck and chest muscles are tired from breathing.",
            "can't keep going": "I don't know how much longer I can keep breathing like this.",
            "give up": "I feel like giving up.",
            
            // Altered mental status - CO2 narcosis
            "confused": "I feel confused and sleepy.",
            "drowsy": "Very drowsy.",
            "sleepy": "I keep wanting to fall asleep.",
            "alert": "Hard to stay awake.",
            "lethargic": "Lethargic.",
            "foggy": "My mind is foggy.",
            "talking": "Hard to talk - too short of breath.",
            
            // COPD history
            "copd": "Yes, I have severe COPD.",
            "how long copd": "About 15 years.",
            "severity": "They said it's severe - stage 4.",
            "gold": "Gold stage 4 or something.",
            "fev1": "Very low - I don't remember the number.",
            "oxygen": "Yes, I'm on home oxygen.",
            "home oxygen": "Yes, 2 liters at home.",
            "liters": "2 liters at baseline.",
            "how much oxygen": "2 liters, but they turned it up.",
            
            // Exacerbation history
            "hospital": "I've been hospitalized for COPD before.",
            "hospitalizations": "Multiple times.",
            "how many times": "Maybe 5-6 times in the past few years.",
            "icu": "I've been in the ICU before for this.",
            "intubated": "I was intubated once about 2 years ago.",
            "ventilator": "Yes, I was on a ventilator once.",
            "bipap": "I've used BiPAP before.",
            
            // Current exacerbation
            "trigger": "I think I caught a cold.",
            "sick": "I've had cold symptoms.",
            "virus": "Maybe a viral infection.",
            "what started": "Cold symptoms, then got much worse.",
            "cough": "Yes, worse cough with more sputum.",
            "sputum": "More sputum than usual, yellow-green.",
            "sputum color": "Yellow-green - usually it's white.",
            "purulent": "Yes, purulent sputum.",
            "fever": "Maybe low grade.",
            
            // Medications
            "inhalers": "I use multiple inhalers.",
            "medications": "Symbicort, Spiriva, albuterol.",
            "nebulizer": "I've been using my nebulizer a lot.",
            "prednisone": "They gave me prednisone but it's not helping.",
            "steroids": "Yes, I'm on steroids.",
            "antibiotics": "They started antibiotics.",
            "compliance": "I take my medications.",
            
            // Smoking
            "smoking": "I quit 5 years ago.",
            "smoke": "I don't smoke anymore.",
            "quit": "Quit 5 years ago.",
            "pack years": "About 50 pack years.",
            "how much did you smoke": "2 packs a day for 25 years."
        });

        // =====================================================================
        // ASTHMA - SILENT CHEST SCENARIO
        // =====================================================================
        expandScenarioHistory('asthma-exacerbation', 'whatif_asthma_silent_chest', {
            // Severe distress
            "breathing": "I can barely breathe. Nothing is helping.",
            "short of breath": "Severely short of breath.",
            "worst": "This is the worst asthma attack I've ever had.",
            "ever": "Worst ever.",
            "air": "I can't move any air.",
            "talking": "Hard to talk - can only say a few words.",
            "sentences": "I can only say a few words at a time.",
            
            // Silent chest - ominous
            "wheeze": "Actually, I stopped wheezing. Is that bad?",
            "wheezing": "I was wheezing a lot before, now I'm not.",
            "wheeze stopped": "The wheezing stopped but I feel worse.",
            "quiet": "My chest is quiet but I feel worse.",
            "no wheeze": "No wheezing now.",
            "sound": "I don't hear any wheezing.",
            "getting better": "No, I feel much worse even though the wheeze stopped.",
            
            // Exhaustion/impending arrest
            "tired": "I'm so tired from trying to breathe.",
            "exhausted": "Exhausted.",
            "can't keep going": "I don't know how much longer I can do this.",
            "give up": "I feel like giving up.",
            "sleepy": "I'm getting sleepy.",
            "drowsy": "Drowsy.",
            "confused": "A bit confused.",
            
            // Treatment already given
            "nebulizer": "I've had multiple nebulizers - they're not working.",
            "treatments": "Multiple treatments.",
            "albuterol": "Lots of albuterol - not helping.",
            "how many": "I've lost count. Many treatments.",
            "steroids": "They gave me steroids.",
            "magnesium": "I don't know if I got that.",
            "epi": "They mentioned epinephrine.",
            
            // Asthma history
            "asthma": "Yes, I have asthma since childhood.",
            "how long": "Since I was a kid.",
            "severity": "Usually moderate, but I've had bad attacks.",
            "hospitalized": "I've been hospitalized before.",
            "icu": "Once in the ICU years ago.",
            "intubated": "I was almost intubated once.",
            "near fatal": "I've had one near-fatal attack.",
            
            // Triggers
            "trigger": "I think it was my cat.",
            "what started": "I was at a friend's house who has cats.",
            "allergies": "I'm allergic to cats.",
            "exposure": "Cat exposure.",
            "cat": "Yes, cat allergy triggered this.",
            "cold": "No cold symptoms.",
            "sick": "I wasn't sick before this.",
            
            // Medications
            "controller": "I take Advair.",
            "maintenance": "Advair twice daily.",
            "rescue": "Albuterol for rescue.",
            "compliance": "I take my medications regularly.",
            "missed": "I haven't missed doses."
        });

        // =====================================================================
        // PE - WITH HEMODYNAMIC INSTABILITY (Different from massive)
        // =====================================================================
        expandScenarioHistory('pe', 'whatif_pe_unstable', {
            // Hemodynamic instability
            "blood pressure": "They said my blood pressure is very low.",
            "bp": "Low blood pressure.",
            "hypotensive": "Yes, hypotensive.",
            "systolic": "I don't know the numbers but they're worried.",
            
            // Near syncope/syncope
            "passed out": "I almost passed out. Got very lightheaded.",
            "syncope": "I almost fainted.",
            "lightheaded": "Extremely lightheaded.",
            "dizzy": "Very dizzy.",
            "faint": "I felt like I was going to faint.",
            
            // Dyspnea
            "breathing": "Very short of breath. Can barely breathe.",
            "short of breath": "Severely short of breath.",
            "sudden": "It came on suddenly.",
            "onset": "Sudden onset.",
            "dyspnea": "Severe dyspnea.",
            
            // Chest pain
            "chest pain": "Yes, chest pain. Sharp.",
            "chest": "Sharp chest pain.",
            "pleuritic": "Worse when I breathe in.",
            "breathing makes worse": "Yes, breathing makes it worse.",
            
            // Right heart strain symptoms
            "neck": "My neck veins seem swollen.",
            "jvd": "I don't know what that means.",
            "swollen neck": "Yes, my neck looks swollen.",
            "heart": "My heart is racing.",
            "racing": "Yes, heart racing.",
            "palpitations": "Yes, palpitations.",
            
            // Risk factors
            "surgery": "I had hip surgery 3 weeks ago.",
            "recent surgery": "Hip replacement 3 weeks ago.",
            "immobile": "I've been mostly in bed since surgery.",
            "bed rest": "Mostly bed rest.",
            "walking": "I haven't been walking much.",
            "leg": "My left leg is swollen.",
            "leg swelling": "Yes, left leg swelling.",
            "calf pain": "My left calf hurts.",
            "dvt": "Could I have a blood clot in my leg?",
            "clot": "I'm worried about a clot.",
            
            // Prophylaxis
            "blood thinner": "I was on blood thinner shots after surgery.",
            "lovenox": "Yes, Lovenox.",
            "enoxaparin": "Yes, that one.",
            "stopped": "They stopped it about a week ago.",
            "when stopped": "About a week ago.",
            "compression": "I'm supposed to wear compression stockings.",
            
            // History
            "prior pe": "No prior blood clots.",
            "prior dvt": "No previous clots.",
            "family history": "My sister had a blood clot.",
            "cancer": "No cancer.",
            "birth control": "No, I'm post-menopausal."
        });

        // =====================================================================
        // AFIB - WPW SCENARIO
        // =====================================================================
        expandScenarioHistory('afib-rvr', 'whatif_afib_wpw', {
            // WPW history
            "wpw": "I was told I have WPW - Wolff-Parkinson-White.",
            "wolff parkinson white": "Yes, diagnosed as a teenager.",
            "preexcitation": "They mentioned preexcitation.",
            "accessory pathway": "Something about an extra pathway.",
            "delta wave": "I've heard that term.",
            "when diagnosed": "I was diagnosed around age 15.",
            "ablation": "No, I never had an ablation.",
            "offered ablation": "They suggested it but I declined.",
            "why no ablation": "I was scared of the procedure.",
            
            // Prior episodes
            "episodes": "I've had fast heart episodes before.",
            "prior episodes": "Yes, several times.",
            "svt": "They said I had SVT before.",
            "similar": "Similar but this is much worse.",
            "how treated": "They usually went away on their own.",
            "maneuvers": "Sometimes bearing down helped.",
            "valsalva": "Yes, Valsalva sometimes worked.",
            "adenosine": "I think they gave me adenosine once.",
            "cardioversion": "No, never been shocked before.",
            
            // Current symptoms
            "heart rate": "My heart is racing incredibly fast.",
            "how fast": "It feels like 200 or more.",
            "fast": "Very very fast.",
            "racing": "Racing faster than ever.",
            "pounding": "Pounding in my chest.",
            "irregular": "Fast and irregular.",
            "regular": "I can't tell - just very fast.",
            
            // Hemodynamic
            "chest pain": "Some chest discomfort.",
            "breathing": "Short of breath.",
            "short of breath": "Yes, short of breath.",
            "dizzy": "Very dizzy.",
            "lightheaded": "Lightheaded.",
            "passed out": "I almost passed out.",
            "syncope": "Near syncope.",
            "weak": "Very weak.",
            "sweating": "Yes, sweating.",
            
            // Age
            "age": "I'm 28 years old.",
            "how old": "28.",
            "young": "Yes, I know I'm young for heart problems.",
            
            // Medications - usually none
            "medications": "I don't take regular heart medications.",
            "beta blocker": "No, I'm not on a beta blocker.",
            "metoprolol": "No.",
            "calcium blocker": "No.",
            "diltiazem": "No.",
            "verapamil": "No.",
            "digoxin": "No.",
            "blood thinner": "No blood thinners.",
            "daily meds": "I don't take daily heart meds.",
            
            // Drug contraindication awareness
            "dangerous": "What medications are dangerous for me?",
            "avoid": "What should I avoid?",
            "contraindicated": "Are some medications bad for WPW?"
        });

        // =====================================================================
        // DKA - EUGLYCEMIC SCENARIO
        // =====================================================================
        expandScenarioHistory('dka', 'whatif_dka_euglycemic', {
            // Sugar not very high - KEY
            "sugar": "My blood sugar was only about 180 when I checked.",
            "glucose": "Around 180-200.",
            "blood sugar": "Not that high - around 180.",
            "high sugar": "Not super high actually.",
            "meter": "My meter said 180 something.",
            "what was sugar": "Around 180.",
            "expected higher": "I thought it would be higher.",
            
            // On SGLT2 inhibitor - CRITICAL
            "medications": "I take metformin, Jardiance, and sometimes insulin.",
            "jardiance": "Yes, I take Jardiance.",
            "invokana": "No, Jardiance - empagliflozin.",
            "farxiga": "No, I take Jardiance.",
            "sglt2": "Yes, I'm on one of those - Jardiance.",
            "empagliflozin": "Yes, that's it.",
            "canagliflozin": "No, empagliflozin.",
            "new medication": "No, I've been on it about a year.",
            "when started": "About a year ago.",
            
            // DKA symptoms
            "nausea": "Yes, very nauseous.",
            "vomiting": "I've been vomiting.",
            "how much vomiting": "Multiple times today.",
            "abdominal pain": "Yes, my stomach hurts.",
            "belly pain": "Yes, abdominal pain.",
            "breathing": "I'm breathing fast and deep.",
            "fast breathing": "Yes, breathing fast.",
            "deep breathing": "Yes, deep breaths.",
            "kussmaul": "I don't know what that is.",
            
            // Fruity breath
            "breath": "My wife said my breath smells weird.",
            "fruity": "She said it smells fruity or like nail polish.",
            "acetone": "Maybe like acetone.",
            "smell": "Yes, unusual smell to my breath.",
            
            // Ketones
            "ketones": "I checked - my ketones were high.",
            "urine ketones": "Large ketones on the urine stick.",
            "ketone meter": "I don't have a blood ketone meter.",
            "how high": "Large or 3+ on the urine test.",
            
            // Trigger
            "sick": "I've had a stomach bug.",
            "illness": "Yes, some kind of GI illness.",
            "infection": "Maybe a stomach infection.",
            "eating": "I haven't been able to eat.",
            "drinking": "I've been trying to stay hydrated.",
            "dehydrated": "I'm probably dehydrated.",
            
            // Diabetes history
            "diabetes": "Yes, type 2 diabetes.",
            "type 2": "Yes, type 2.",
            "type": "Type 2 diabetes.",
            "how long": "About 8 years.",
            "insulin": "I take insulin at night.",
            "basal": "Yes, long-acting insulin at night.",
            "control": "Usually pretty good control.",
            "a1c": "My last A1C was about 7."
        });

        // =====================================================================
        // HYPONATREMIA - SEIZING SCENARIO
        // =====================================================================
        expandScenarioHistory('hyponatremia', 'whatif_hyponatremia_seizing', {
            // Seizure description
            "seizure": "Yes, I had a seizure.",
            "convulsion": "Yes, I was shaking all over.",
            "shaking": "Shaking and convulsing.",
            "how long seizure": "Maybe a minute or two.",
            "duration": "A minute or two.",
            "witnessed": "My family saw it.",
            "what saw": "They said I was shaking and unresponsive.",
            "after seizure": "I was confused after.",
            "postictal": "I was out of it for a while after.",
            "first seizure": "Yes, this is my first seizure ever.",
            "seizure history": "No prior seizures.",
            "epilepsy": "No epilepsy.",
            
            // Altered mental status
            "confused": "I've been confused for the past day or so.",
            "confusion": "Yes, confusion getting worse.",
            "mental status": "My thinking has been off.",
            "oriented": "I'm not sure where I am.",
            "sleepy": "Very sleepy and confused.",
            "lethargic": "Lethargic.",
            "headache": "Yes, headache before the seizure.",
            
            // Low sodium symptoms
            "nausea": "I've been nauseous.",
            "vomiting": "Some vomiting.",
            "weak": "Feeling weak.",
            "muscle": "Some muscle cramps.",
            "cramps": "Yes, muscle cramps.",
            
            // Cause exploration - medications
            "medications": "I take a water pill and an antidepressant.",
            "diuretic": "Yes, I take HCTZ.",
            "hctz": "Yes, hydrochlorothiazide.",
            "thiazide": "Yes, that type.",
            "how long on it": "Several years.",
            "ssri": "Yes, I take Lexapro.",
            "antidepressant": "Yes, Lexapro.",
            "escitalopram": "Yes.",
            "started recently": "I started the Lexapro about 3 weeks ago.",
            "new medication": "Yes, the antidepressant is new.",
            
            // Water intake
            "water": "I've been drinking a lot of water.",
            "how much water": "Maybe a gallon or more a day.",
            "thirsty": "I've been very thirsty.",
            "fluid intake": "High - I drink constantly.",
            "psychogenic polydipsia": "I don't know what that is.",
            
            // Medical history
            "medical history": "High blood pressure, depression.",
            "history": "Hypertension and depression.",
            "sodium before": "I don't know what my sodium was before.",
            "labs": "I haven't had labs recently.",
            "prior low sodium": "I don't think so.",
            
            // Current
            "sodium level": "They said my sodium is very low - 115 or something.",
            "how low": "115 they said.",
            "severe": "They said it's severely low."
        });

        // =====================================================================
        // CHOLECYSTITIS - ACALCULOUS SCENARIO
        // =====================================================================
        expandScenarioHistory('cholecystitis', 'whatif_cholecystitis_acalculous', {
            // ICU context
            "where": "I'm in the ICU.",
            "why icu": "I had a bad car accident and surgery.",
            "accident": "Motor vehicle accident a week ago.",
            "surgery": "I had surgery for internal injuries.",
            "what surgery": "They fixed my spleen and liver.",
            "trauma": "Yes, significant trauma.",
            "when": "About a week ago.",
            "how long icu": "I've been in the ICU for a week.",
            
            // NPO/TPN
            "eating": "I haven't been eating. I'm on IV nutrition.",
            "npo": "Yes, I've been NPO.",
            "tpn": "Yes, I'm on TPN.",
            "iv nutrition": "Yes, IV nutrition only.",
            "tube feeds": "No, just TPN.",
            "when last ate": "Over a week ago.",
            "bowel sounds": "They've been listening.",
            
            // Current symptoms
            "pain": "I developed new pain in my right upper belly.",
            "ruq": "Yes, right upper quadrant pain.",
            "right side": "Yes, right side under my ribs.",
            "when pain started": "Started yesterday, getting worse.",
            "new pain": "Yes, this is new pain.",
            "fever": "Yes, I spiked a fever.",
            "temperature": "They said I have a fever.",
            "septic": "They're worried I'm becoming septic.",
            
            // No gallstones
            "gallstones": "They did an ultrasound - no stones.",
            "stones": "No gallstones.",
            "ultrasound": "Showed no stones but an inflamed gallbladder.",
            "inflamed": "Yes, the gallbladder looks inflamed.",
            "wall thickening": "They mentioned that.",
            "sludge": "Maybe some sludge.",
            "acalculous": "They said acalculous cholecystitis.",
            
            // Risk factors
            "critically ill": "Yes, I've been very sick.",
            "sedated": "I was sedated for several days.",
            "ventilator": "I was on a ventilator.",
            "intubated": "Yes, I was intubated.",
            "blood pressure": "My blood pressure has been up and down.",
            "pressors": "I was on pressors for a while.",
            "vasopressors": "Yes, I needed them.",
            
            // Severity
            "gallbladder before": "Never had gallbladder problems before.",
            "prior": "No prior gallbladder issues.",
            "young": "I'm only 35.",
            "age": "35 years old.",
            "otherwise healthy": "I was healthy before the accident."
        });

        // =====================================================================
        // SYNCOPE - VASOVAGAL SCENARIO (for comparison)
        // =====================================================================
        expandScenarioHistory('syncope', 'whatif_syncope_vasovagal', {
            // Classic prodrome
            "warning": "Yes, I felt it coming on.",
            "prodrome": "Yes, I had warning signs.",
            "felt it coming": "Yes, I knew I was going to pass out.",
            "symptoms before": "I felt hot, nauseous, and then my vision went dark.",
            "lightheaded": "Yes, I felt lightheaded first.",
            "nausea": "Yes, I felt nauseous before.",
            "warm": "I felt warm and flushed.",
            "hot": "Yes, I felt hot.",
            "sweating": "Yes, I started sweating before.",
            "vision": "My vision went gray, like tunnel vision.",
            "tunnel": "Yes, tunnel vision.",
            "hearing": "Things sounded far away.",
            
            // Trigger
            "trigger": "I was standing in church for a long time.",
            "what happened": "I was standing for a long time in a hot church.",
            "standing": "Yes, I had been standing for about 30 minutes.",
            "how long standing": "About 30 minutes.",
            "hot": "Yes, it was very warm in there.",
            "crowded": "Yes, it was crowded.",
            "church": "Yes, at church.",
            "blood draw": "No, not a blood draw.",
            "needle": "No needles.",
            "pain": "No pain triggered it.",
            "emotional": "Maybe a little emotional during the service.",
            
            // Brief episode
            "how long out": "Maybe 10-20 seconds.",
            "duration": "Very brief - 10-20 seconds.",
            "came to": "I came to quickly when I was on the ground.",
            "after": "I felt okay after - just a little shaky.",
            "confusion after": "No confusion after.",
            "oriented": "I knew where I was right away.",
            "postictal": "No, I was alert right after.",
            
            // No concerning features
            "chest pain": "No chest pain.",
            "palpitations": "No palpitations before.",
            "racing heart": "No racing heart.",
            "exercise": "No, I wasn't exercising.",
            "exertion": "No exertion - just standing.",
            "sitting": "No, I was standing.",
            "lying down": "No, I was upright.",
            
            // History
            "happened before": "Yes, I've fainted before in similar situations.",
            "prior": "Yes, a few times over the years.",
            "pattern": "Usually with prolonged standing or heat.",
            "similar": "Yes, similar circumstances.",
            "family history": "My mom faints easily too.",
            
            // Cardiac history
            "heart problems": "No heart problems.",
            "murmur": "No murmur.",
            "family sudden death": "No family history of sudden death.",
            "young death": "No one in my family died young.",
            "pacemaker": "No pacemaker.",
            "heart disease": "No heart disease.",
            
            // Age
            "age": "I'm 22 years old.",
            "how old": "22.",
            "healthy": "Otherwise completely healthy."
        });

        // =====================================================================
        // ANEMIA - MACROCYTIC/B12 SCENARIO
        // =====================================================================
        expandScenarioHistory('anemia-workup', 'whatif_anemia_macrocytic', {
            // Neurological symptoms - CRITICAL for B12
            "numbness": "Yes, I have numbness and tingling in my hands and feet.",
            "tingling": "Yes, tingling in my fingers and toes.",
            "paresthesias": "Yes, numbness and tingling.",
            "hands": "Both hands - fingers are numb.",
            "feet": "Both feet too - like pins and needles.",
            "balance": "I've been having trouble with balance.",
            "walking": "My walking has been unsteady.",
            "gait": "Unsteady gait.",
            "falling": "I've almost fallen a few times.",
            "ataxia": "I don't know what that means.",
            "weakness": "Some weakness in my legs.",
            "memory": "My memory has been worse.",
            "cognitive": "I feel like my thinking is slower.",
            "confusion": "Some confusion.",
            "mood": "I've been more irritable and down.",
            "depression": "Maybe some depression.",
            
            // Classic anemia symptoms
            "fatigue": "Yes, very fatigued.",
            "tired": "Extremely tired.",
            "weak": "Weak and tired.",
            "short of breath": "Yes, short of breath with activity.",
            "exertion": "I get winded easily.",
            "exercise": "I can't exercise like I used to.",
            "pale": "People say I look pale.",
            "pallor": "Yes, pale.",
            "heart": "My heart races sometimes.",
            "palpitations": "Yes, some palpitations.",
            "lightheaded": "Lightheaded sometimes.",
            "dizzy": "Yes, dizzy at times.",
            
            // GI symptoms
            "tongue": "My tongue has been sore.",
            "glossitis": "My tongue looks red and smooth.",
            "smooth tongue": "Yes, it's smooth - lost the texture.",
            "mouth sores": "Some mouth sores.",
            "appetite": "Poor appetite.",
            "weight": "I've lost a little weight.",
            "diarrhea": "Some diarrhea.",
            "constipation": "Sometimes constipation too.",
            
            // Diet/absorption
            "diet": "I've been vegetarian for about 10 years.",
            "vegetarian": "Yes, strict vegetarian.",
            "vegan": "Mostly vegan actually.",
            "meat": "I don't eat any meat.",
            "fish": "No fish either.",
            "eggs": "Occasionally eggs.",
            "dairy": "Very little dairy.",
            "supplements": "I don't take B12 supplements.",
            "b12": "No, I don't supplement B12.",
            "vitamins": "Just a general multivitamin occasionally.",
            
            // Medical history
            "stomach": "I had weight loss surgery years ago.",
            "surgery": "Gastric bypass about 8 years ago.",
            "gastric bypass": "Yes, Roux-en-Y.",
            "bariatric": "Yes, bariatric surgery.",
            "when surgery": "About 8 years ago.",
            "pernicious": "I don't know what that is.",
            "autoimmune": "I have thyroid problems.",
            "thyroid": "Yes, hypothyroid.",
            "hashimoto": "Yes, Hashimoto's.",
            "crohn": "No Crohn's disease.",
            "celiac": "No celiac disease.",
            
            // Medications
            "metformin": "Yes, I take metformin for diabetes.",
            "how long metformin": "About 5 years.",
            "ppi": "Yes, I take omeprazole.",
            "omeprazole": "Yes, for acid reflux.",
            "proton pump": "Yes, I take a PPI.",
            "h2 blocker": "No, just the PPI."
        });

        console.log('[ReasonDx] Part 3 scenario expansions applied.');
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHistoryExpansionPart3);
    } else {
        initializeHistoryExpansionPart3();
    }

})();
