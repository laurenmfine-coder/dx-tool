/**
 * ReasonDx What-If History Q&A Expansion - Part 4
 * Additional clinical scenarios coverage
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    function initializeHistoryExpansionPart4() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeHistoryExpansionPart4, 350);
            return;
        }
        
        console.log('[ReasonDx] Expanding What-If history Q&A libraries (Part 4)...');
        expandPart4Scenarios();
        console.log('[ReasonDx] History Q&A expansion Part 4 complete.');
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

    function expandPart4Scenarios() {

        // =====================================================================
        // THYROID STORM SCENARIO
        // =====================================================================
        expandScenarioHistory('hyperthyroidism', 'whatif_thyroid_storm', {
            // Severe symptoms
            "fever": "Yes, high fever - 104°F.",
            "temperature": "104 degrees.",
            "high fever": "Yes, very high.",
            "sweating": "Drenched in sweat.",
            "diaphoretic": "Yes, profuse sweating.",
            "hot": "I feel like I'm burning up.",
            
            // Cardiac
            "heart": "My heart is racing extremely fast.",
            "heart rate": "Very fast - they said over 150.",
            "racing": "Racing heart.",
            "pounding": "Pounding in my chest.",
            "palpitations": "Severe palpitations.",
            "irregular": "It feels irregular too.",
            "afib": "They mentioned possible AFib.",
            "chest pain": "Some chest discomfort.",
            
            // Neurological/psychiatric
            "agitated": "I feel very agitated and anxious.",
            "anxiety": "Severe anxiety.",
            "restless": "Can't sit still.",
            "confused": "I'm confused.",
            "confusion": "Yes, confused.",
            "altered": "My family says I'm not making sense.",
            "delirious": "Maybe delirious.",
            "psychosis": "I don't know.",
            "tremor": "Yes, my hands are shaking.",
            "shaking": "Trembling all over.",
            
            // GI
            "nausea": "Yes, nauseous.",
            "vomiting": "I've vomited.",
            "diarrhea": "Yes, diarrhea.",
            "abdominal pain": "Some crampy abdominal pain.",
            "stomach": "My stomach is upset.",
            
            // Hyperthyroid history
            "thyroid": "Yes, I have Graves' disease.",
            "graves": "Yes, Graves' disease.",
            "hyperthyroid": "Yes, hyperthyroidism.",
            "how long": "Diagnosed about 2 years ago.",
            "treatment": "I take methimazole.",
            "methimazole": "Yes, I'm supposed to take it.",
            "ptu": "No, methimazole.",
            "medications": "Methimazole and a beta blocker.",
            "beta blocker": "Yes, propranolol.",
            "compliance": "I ran out of my medication about a week ago.",
            "stopped": "Yes, I stopped taking it.",
            "why stopped": "I ran out and couldn't get a refill.",
            "ran out": "Yes, about a week ago.",
            
            // Trigger
            "trigger": "I also have an infection - maybe a UTI.",
            "infection": "I think I have a UTI.",
            "sick": "I've been feeling sick.",
            "uti": "Burning when I pee.",
            "surgery": "No recent surgery.",
            "stress": "Yes, I've been stressed.",
            "contrast": "No CT scans with contrast.",
            "iodine": "No iodine exposure.",
            
            // Eyes
            "eyes": "My eyes are bulging.",
            "proptosis": "Yes, bulging eyes.",
            "eye pain": "Some eye discomfort.",
            "vision": "A little blurry."
        });

        // =====================================================================
        // DELIRIUM - HYPOACTIVE SCENARIO
        // =====================================================================
        expandScenarioHistory('delirium', 'whatif_delirium_hypoactive', {
            // Presentation - quiet, withdrawn
            "behavior": "He's very quiet and withdrawn.",
            "quiet": "Yes, much quieter than usual.",
            "withdrawn": "Very withdrawn - not engaging.",
            "talking": "He's barely talking.",
            "responds": "He responds but very slowly.",
            "slow": "Very slow to respond.",
            "sleepy": "He seems very sleepy.",
            "drowsy": "Drowsy most of the time.",
            "lethargic": "Lethargic.",
            "staring": "He just stares off into space.",
            "unresponsive": "Sometimes he doesn't respond at all.",
            
            // Not agitated
            "agitated": "No, he's not agitated at all.",
            "restless": "No, the opposite - very still and quiet.",
            "pulling at things": "No, he's not pulling at IVs or anything.",
            "combative": "No, not combative.",
            "yelling": "No yelling or screaming.",
            "hallucinations": "I'm not sure - he won't tell us.",
            
            // Fluctuation
            "fluctuates": "Yes, sometimes he's more alert.",
            "better sometimes": "Sometimes he seems more with it.",
            "worse at night": "Actually he seems worse during the day.",
            "sundowning": "Not really sundowning - quiet all day.",
            
            // Baseline
            "baseline": "He was completely normal before.",
            "normal before": "Yes, sharp as a tack.",
            "independent": "Totally independent before.",
            "when changed": "He changed about 2 days ago.",
            "gradual": "It came on over a couple of days.",
            "sudden": "Not sudden - gradual over 2 days.",
            
            // Age/setting
            "age": "He's 82 years old.",
            "how old": "82.",
            "where": "He's been in the hospital for pneumonia.",
            "hospitalized": "Yes, admitted 4 days ago.",
            "why admitted": "Pneumonia.",
            "hospital day": "Day 4.",
            
            // Potential causes
            "infection": "He's being treated for pneumonia.",
            "antibiotics": "Yes, on antibiotics.",
            "fever": "He had a fever initially, better now.",
            "urine": "I don't know about a UTI.",
            "foley": "Yes, he has a Foley catheter.",
            "constipation": "He hasn't had a bowel movement.",
            "last bm": "Not since admission - 4 days.",
            
            // Medications
            "new medications": "They gave him something to help him sleep.",
            "sleep medicine": "Yes, he got something for sleep.",
            "benadryl": "I think they gave him Benadryl.",
            "diphenhydramine": "Maybe that.",
            "pain medicine": "He got some pain medicine.",
            "opioids": "I think morphine once.",
            "benzodiazepines": "I don't think so.",
            
            // Medical history
            "dementia": "No, he doesn't have dementia.",
            "memory": "His memory was fine before this.",
            "cognitive": "No cognitive problems before.",
            "stroke": "No prior strokes.",
            "parkinson": "No Parkinson's.",
            "hearing": "His hearing is poor - uses hearing aids.",
            "vision": "Vision is fair with glasses.",
            "glasses": "He doesn't have his glasses here."
        });

        // =====================================================================
        // ACUTE KIDNEY INJURY - PRERENAL SCENARIO
        // =====================================================================
        expandScenarioHistory('aki', 'whatif_aki_prerenal', {
            // Volume depletion history
            "fluid intake": "I haven't been drinking much.",
            "drinking": "Very little fluids for the past few days.",
            "eating": "I haven't been eating either.",
            "why not": "I've been too nauseous from the stomach flu.",
            "stomach flu": "Yes, I've had a stomach bug.",
            "nausea": "Severe nausea.",
            "vomiting": "Yes, a lot of vomiting.",
            "how much vomiting": "Multiple times a day for 3 days.",
            "diarrhea": "Yes, watery diarrhea too.",
            "how much diarrhea": "Many times a day.",
            "duration": "About 3 days of this.",
            
            // Dehydration symptoms
            "thirsty": "I'm extremely thirsty.",
            "dry mouth": "My mouth is very dry.",
            "dry": "I feel very dry.",
            "dizzy": "I'm dizzy when I stand.",
            "lightheaded": "Lightheaded.",
            "orthostatic": "I feel faint when I stand up.",
            "weak": "Very weak.",
            "urine": "I've barely urinated.",
            "peeing": "Hardly any urine.",
            "urine output": "Very little - dark and concentrated.",
            "dark urine": "Yes, very dark urine.",
            "color": "Dark yellow, almost brown.",
            "last urinated": "Maybe a small amount this morning.",
            
            // Medications making worse
            "medications": "I take lisinopril and ibuprofen.",
            "ace inhibitor": "Yes, lisinopril.",
            "lisinopril": "Yes, 20mg daily.",
            "arb": "No, ACE inhibitor.",
            "nsaids": "Yes, I've been taking ibuprofen for fever.",
            "ibuprofen": "Yes, 600mg several times.",
            "how much ibuprofen": "600mg every 6 hours or so.",
            "motrin": "Yes, Motrin.",
            "advil": "Yes, I took Advil.",
            "diuretic": "I also take a water pill.",
            "lasix": "Yes, furosemide.",
            "continued medications": "I've been taking them even though I'm sick.",
            
            // Medical history
            "medical history": "High blood pressure, diabetes.",
            "diabetes": "Yes, type 2.",
            "hypertension": "Yes, high blood pressure.",
            "kidney disease": "My doctor said my kidneys were a little weak.",
            "ckd": "Maybe mild CKD.",
            "baseline creatinine": "I don't know my baseline.",
            "heart failure": "No heart failure.",
            "liver disease": "No liver problems.",
            
            // Not obstruction
            "pain": "No flank pain.",
            "blood in urine": "No blood in urine.",
            "kidney stones": "No kidney stones.",
            "prostate": "No prostate problems.",
            "catheter": "No catheter."
        });

        // =====================================================================
        // KIDNEY STONE - INFECTED/SEPTIC SCENARIO
        // =====================================================================
        expandScenarioHistory('flank-pain-stone', 'whatif_stone_infected', {
            // Classic stone pain
            "pain": "Severe pain in my right side, comes and goes.",
            "where": "Right flank, radiates to my groin.",
            "flank": "Yes, right flank.",
            "side": "Right side.",
            "radiation": "It goes down to my groin.",
            "groin": "Yes, the pain radiates to my groin.",
            "severity": "10 out of 10 when it hits.",
            "colicky": "Yes, it comes in waves.",
            "waves": "Yes, comes and goes.",
            "writhing": "I can't get comfortable - I'm writhing in pain.",
            "position": "No position helps.",
            
            // Infection symptoms - CRITICAL
            "fever": "Yes, I developed a fever.",
            "temperature": "102°F.",
            "chills": "Yes, shaking chills.",
            "rigors": "Yes, rigors.",
            "sick": "I feel very sick.",
            "worse": "I feel much sicker than my last kidney stone.",
            "different": "This feels different - worse.",
            
            // Urinary
            "blood urine": "Yes, blood in my urine.",
            "hematuria": "Yes, hematuria.",
            "burning": "Yes, burning when I urinate.",
            "dysuria": "Yes, dysuria.",
            "frequency": "Going frequently.",
            "urgency": "Yes, urgency.",
            "cloudy": "My urine is cloudy.",
            "smell": "It smells bad.",
            "foul": "Yes, foul-smelling urine.",
            
            // Stone history
            "kidney stones before": "Yes, I've had kidney stones before.",
            "prior stones": "Yes, a few times.",
            "how many": "Maybe 3-4 times.",
            "passed": "I usually pass them on my own.",
            "surgery": "I had lithotripsy once.",
            "lithotripsy": "Yes, a few years ago.",
            "stent": "I had a stent once.",
            "type of stone": "Calcium stones I think.",
            
            // Risk factors
            "diet": "I don't drink enough water.",
            "water": "Not enough water intake.",
            "fluids": "I don't drink enough fluids.",
            "gout": "No gout.",
            "hyperparathyroid": "No.",
            "supplements": "I take calcium and vitamin D.",
            "vitamin c": "Sometimes vitamin C.",
            
            // Current concern
            "emergency": "Is this an emergency?",
            "serious": "Is this serious?",
            "urologist": "Do I need a urologist?",
            "surgery needed": "Will I need surgery?",
            "antibiotics": "Do I need antibiotics?"
        });

        // =====================================================================
        // DIVERTICULITIS - ABSCESS/COMPLICATED SCENARIO
        // =====================================================================
        expandScenarioHistory('diverticulitis', 'whatif_divert_abscess', {
            // Severity
            "pain": "Severe left lower abdominal pain.",
            "where": "Left lower quadrant.",
            "llq": "Yes, left lower quadrant.",
            "left side": "Yes, left side.",
            "severity": "9 out of 10.",
            "severe": "Very severe pain.",
            "constant": "Yes, constant pain.",
            "worse": "Getting worse, not better.",
            
            // Systemic symptoms - more severe
            "fever": "Yes, high fever - 102-103°F.",
            "temperature": "102-103.",
            "chills": "Yes, shaking chills.",
            "rigors": "Yes, rigors.",
            "sick": "I feel very sick.",
            "sweats": "Night sweats.",
            
            // Prior diverticulitis
            "diverticulitis before": "Yes, I've had diverticulitis twice before.",
            "prior episodes": "Two prior episodes.",
            "how treated": "Antibiotics at home before.",
            "hospitalized": "Never hospitalized for it before.",
            "colonoscopy": "Yes, I had a colonoscopy - showed diverticulosis.",
            "diverticulosis": "Yes, I have diverticulosis.",
            
            // This episode different
            "different": "This is much worse than before.",
            "worse than before": "Yes, definitely worse.",
            "antibiotics working": "No, I started antibiotics 3 days ago and I'm getting worse.",
            "not improving": "I'm not improving on oral antibiotics.",
            "outpatient": "I tried outpatient treatment but it's not working.",
            
            // Concerning features
            "mass": "It feels like there's a lump in my belly.",
            "lump": "Yes, a tender lump on the left side.",
            "tenderness": "Very tender there.",
            "rebound": "It hurts more when you let go.",
            "peritoneal": "I don't know what that means.",
            
            // Bowel function
            "bowel movements": "I've had some diarrhea.",
            "diarrhea": "Yes, loose stools.",
            "constipation": "No constipation.",
            "blood": "No blood in stool.",
            "obstruction": "I can still pass gas and stool.",
            "gas": "Yes, I'm passing gas.",
            "nausea": "Some nausea.",
            "vomiting": "No vomiting.",
            "eating": "I can't eat much.",
            "appetite": "No appetite.",
            
            // Risk factors
            "age": "I'm 62 years old.",
            "diet": "I know I should eat more fiber.",
            "fiber": "I don't eat enough fiber.",
            "smoking": "No, I don't smoke.",
            "steroids": "No steroids.",
            "immunocompromised": "No, immune system is fine.",
            
            // Treatment questions
            "surgery": "Will I need surgery?",
            "drain": "Will I need a drain?",
            "ct scan": "Do I need a CT scan?",
            "hospital": "Do I need to be admitted?"
        });

        // =====================================================================
        // AAA - SYMPTOMATIC/LEAKING SCENARIO
        // =====================================================================
        expandScenarioHistory('aaa', 'whatif_aaa_symptomatic', {
            // Pain
            "pain": "I have severe pain in my belly and back.",
            "where": "In my belly and going straight through to my back.",
            "location": "Abdominal pain radiating to back.",
            "back": "Yes, severe back pain.",
            "radiation": "It goes through to my back.",
            "severity": "10 out of 10 - severe.",
            "constant": "Yes, constant and severe.",
            "sudden": "It came on fairly suddenly.",
            "when": "Started about 2 hours ago.",
            "tearing": "It feels like something is tearing.",
            "ripping": "Like a ripping sensation.",
            
            // Hemodynamic symptoms
            "lightheaded": "Yes, I feel lightheaded.",
            "dizzy": "Very dizzy.",
            "faint": "I feel like I might pass out.",
            "weak": "Very weak.",
            "sweating": "Yes, cold sweats.",
            "clammy": "Cold and clammy.",
            "pale": "My wife said I look very pale.",
            "cold": "I feel cold.",
            
            // Known AAA
            "aneurysm": "Yes, I have an aortic aneurysm.",
            "aaa": "Yes, abdominal aortic aneurysm.",
            "known": "Yes, they found it a few years ago.",
            "when diagnosed": "About 3 years ago.",
            "size": "They said it was 5 cm last time.",
            "how big": "5 cm, maybe bigger now.",
            "monitoring": "I was being monitored with ultrasounds.",
            "last ultrasound": "About 8 months ago.",
            "growing": "They said it was slowly growing.",
            "surgery discussed": "They mentioned surgery might be needed eventually.",
            "why no surgery": "We were watching and waiting.",
            
            // Risk factors
            "smoking": "I smoked for 40 years. I quit 5 years ago.",
            "how much smoked": "Pack a day for 40 years.",
            "quit smoking": "Yes, 5 years ago.",
            "blood pressure": "Yes, I have high blood pressure.",
            "hypertension": "Yes, hypertension.",
            "cholesterol": "High cholesterol too.",
            "family history": "My father had an aneurysm.",
            "heart disease": "I have coronary artery disease.",
            "cad": "Yes, CAD.",
            "stents": "I have two stents.",
            "bypass": "No bypass surgery.",
            
            // Peripheral vascular
            "legs": "I have poor circulation in my legs.",
            "claudication": "Yes, I get leg pain when I walk.",
            "pvd": "Yes, peripheral vascular disease.",
            
            // Medications
            "blood thinners": "I take aspirin and Plavix.",
            "aspirin": "Yes, 81mg aspirin.",
            "plavix": "Yes, clopidogrel.",
            "bp meds": "Lisinopril and metoprolol.",
            "statin": "Yes, atorvastatin.",
            
            // Symptoms progression
            "getting worse": "Yes, it's getting worse.",
            "stable": "No, it's not stable.",
            "worse now": "Definitely worse in the past hour."
        });

        // =====================================================================
        // ECTOPIC PREGNANCY SCENARIO
        // =====================================================================
        expandScenarioHistory('rlq-ectopic', 'whatif_ectopic_rupturing', {
            // Severe pain
            "pain": "Severe pain on my right side.",
            "where": "Right lower belly.",
            "location": "Right lower quadrant.",
            "severity": "10 out of 10.",
            "sudden": "It came on suddenly and severely.",
            "when": "Started about an hour ago.",
            "sharp": "Very sharp pain.",
            "constant": "Yes, constant now.",
            "worse": "It's getting worse.",
            
            // Referred shoulder pain - CLASSIC
            "shoulder": "Actually, my right shoulder hurts too.",
            "shoulder pain": "Yes, my right shoulder.",
            "why shoulder": "I don't know why my shoulder would hurt.",
            "neck": "Some neck discomfort too.",
            "referred": "Is the shoulder pain related?",
            
            // Hemodynamic instability
            "lightheaded": "Yes, very lightheaded.",
            "dizzy": "Very dizzy.",
            "faint": "I feel like I'm going to pass out.",
            "passed out": "I almost fainted.",
            "weak": "Very weak.",
            "sweating": "Cold sweats.",
            "clammy": "Cold and clammy.",
            "pale": "I look very pale.",
            "heart racing": "My heart is racing.",
            "short of breath": "A little short of breath.",
            
            // Pregnancy status
            "pregnant": "I might be pregnant - my period is late.",
            "period": "My last period was about 7 weeks ago.",
            "lmp": "7 weeks ago.",
            "how late": "About 3 weeks late.",
            "test": "I took a home test - it was positive.",
            "positive test": "Yes, positive pregnancy test.",
            "when test": "I tested 2 days ago.",
            "confirmed": "Not confirmed by a doctor yet.",
            "prenatal care": "I haven't seen a doctor yet.",
            "ultrasound": "No ultrasound yet.",
            
            // Bleeding
            "bleeding": "Yes, I've had some vaginal bleeding.",
            "vaginal bleeding": "Yes, spotting and now heavier.",
            "how much": "Started as spotting, now heavier.",
            "clots": "Some small clots.",
            "when started": "Spotting for a few days, heavier today.",
            "heavy": "Getting heavier.",
            "pad": "Soaking through pads now.",
            
            // Risk factors
            "prior ectopic": "No prior ectopic.",
            "previous ectopic": "No.",
            "tubal surgery": "No tubal surgery.",
            "pelvic surgery": "No pelvic surgery.",
            "pid": "I had an infection once years ago.",
            "pelvic infection": "Yes, I had PID about 5 years ago.",
            "chlamydia": "Yes, I had chlamydia.",
            "gonorrhea": "No gonorrhea.",
            "iud": "No IUD.",
            "fertility treatment": "No fertility treatment.",
            "ivf": "No IVF.",
            "endometriosis": "No endometriosis.",
            
            // GYN history
            "pregnancies": "I've had two pregnancies before.",
            "miscarriage": "One miscarriage.",
            "deliveries": "One live birth.",
            "children": "I have one child.",
            "c-section": "No, vaginal delivery.",
            
            // Other
            "nausea": "Some nausea.",
            "vomiting": "I threw up once.",
            "fever": "No fever."
        });

        // =====================================================================
        // HYPEREMESIS - SEVERE SCENARIO
        // =====================================================================
        expandScenarioHistory('hyperemesis', 'whatif_hyperemesis_severe', {
            // Severe vomiting
            "vomiting": "I can't keep anything down. I vomit everything.",
            "how much": "I've vomited probably 15-20 times today.",
            "frequency": "Every 30 minutes to an hour.",
            "keep anything down": "No, I can't keep anything down.",
            "water": "I can't even keep water down.",
            "food": "Definitely can't eat.",
            "what comes up": "Just bile now - there's nothing left.",
            "bile": "Yes, green/yellow bile.",
            "blood": "No blood in vomit.",
            
            // Duration
            "how long": "This has been going on for 2 weeks.",
            "started when": "Since about 6 weeks pregnant.",
            "getting worse": "Yes, it's been getting worse.",
            "worst": "The worst it's ever been today.",
            
            // Dehydration
            "thirsty": "I'm so thirsty but I can't drink.",
            "dry": "My mouth is very dry.",
            "dry mouth": "Yes, parched.",
            "urine": "I've barely urinated.",
            "dark urine": "What little there is, is very dark.",
            "dizzy": "Very dizzy.",
            "lightheaded": "Lightheaded all the time.",
            "weak": "Extremely weak.",
            "faint": "I feel like I might pass out.",
            "headache": "Yes, I have a headache.",
            
            // Weight loss
            "weight": "I've lost 10 pounds.",
            "how much lost": "10 pounds in 2 weeks.",
            "weight before": "I weighed 130, now 120.",
            "clothes": "My clothes are loose.",
            
            // Pregnancy
            "pregnant": "Yes, I'm about 8 weeks pregnant.",
            "how far along": "8 weeks.",
            "weeks": "8 weeks.",
            "first pregnancy": "No, this is my second.",
            "prior pregnancy": "I had morning sickness before but nothing like this.",
            "comparison": "Much worse than my first pregnancy.",
            "twins": "I don't know - I haven't had an ultrasound yet.",
            "molar": "I don't know what that is.",
            
            // Impact on life
            "work": "I can't work.",
            "function": "I can't function at all.",
            "bed": "I've been bedridden.",
            "activities": "I can't do anything.",
            "caring for children": "I can't take care of my toddler.",
            
            // Treatments tried
            "tried": "I've tried ginger, crackers, small meals - nothing works.",
            "ginger": "Tried ginger - doesn't help.",
            "crackers": "Crackers don't stay down.",
            "b6": "I tried B6 - still vomiting.",
            "unisom": "Unisom and B6 together - still vomiting.",
            "zofran": "My doctor gave me Zofran but I still vomit.",
            "ondansetron": "Yes, I'm taking ondansetron.",
            "medication": "The anti-nausea medicine isn't working.",
            "phenergan": "I tried that too.",
            "reglan": "Haven't tried that.",
            
            // Red flags assessed
            "fever": "No fever.",
            "abdominal pain": "No severe abdominal pain.",
            "bleeding": "No vaginal bleeding."
        });

        // =====================================================================
        // BPPV - CENTRAL VERTIGO CONCERN SCENARIO
        // =====================================================================
        expandScenarioHistory('vertigo-bppv', 'whatif_bppv_central', {
            // Vertigo characteristics - atypical for BPPV
            "vertigo": "Yes, severe spinning sensation.",
            "spinning": "Yes, the room is spinning.",
            "duration": "It's been constant for hours.",
            "constant": "Yes, constant - not brief episodes.",
            "positional": "It's there even when I'm lying still.",
            "position change": "It's bad all the time, not just with position changes.",
            "brief": "No, it's not brief - it's been hours.",
            "how long": "Going on for about 6 hours now.",
            
            // Associated neurological symptoms - RED FLAGS
            "headache": "Yes, I have a headache too.",
            "worst headache": "Not the worst ever, but significant.",
            "double vision": "Yes, I'm seeing double.",
            "diplopia": "Yes, double vision.",
            "vision": "Blurry and double.",
            "slurred speech": "My speech might be a bit slurred.",
            "speech": "Hard to speak clearly.",
            "weakness": "My left side feels a bit weak.",
            "left side": "Yes, some left-sided weakness.",
            "arm": "Left arm feels heavy.",
            "leg": "Left leg too.",
            "numbness": "Some numbness on my left side.",
            "tingling": "Yes, tingling on the left.",
            "face": "My face might be drooping a little.",
            "facial droop": "Maybe some left facial droop.",
            "swallowing": "A little trouble swallowing.",
            "coordination": "I'm very uncoordinated.",
            "ataxia": "I can't walk straight at all.",
            "walking": "I can't walk - too dizzy and uncoordinated.",
            "falling": "I keep falling to one side.",
            "which side falling": "To the left.",
            
            // Risk factors
            "age": "I'm 72 years old.",
            "blood pressure": "Yes, I have high blood pressure.",
            "hypertension": "Yes, hypertension.",
            "diabetes": "Yes, type 2 diabetes.",
            "cholesterol": "High cholesterol.",
            "smoking": "I smoked for 30 years, quit 10 years ago.",
            "atrial fibrillation": "Yes, I have AFib.",
            "afib": "Yes, AFib.",
            "blood thinners": "I'm supposed to take Eliquis.",
            "taking blood thinner": "I've been forgetting to take it.",
            "compliance": "I've missed several doses this week.",
            "stroke history": "No prior strokes.",
            "tia": "No TIAs.",
            "heart disease": "Yes, I have heart disease.",
            
            // Nausea/vomiting
            "nausea": "Yes, severe nausea.",
            "vomiting": "I've vomited several times.",
            "how much vomiting": "Maybe 5-6 times.",
            
            // Hearing
            "hearing": "Maybe some changes in my hearing.",
            "hearing loss": "Some decreased hearing on one side.",
            "tinnitus": "Yes, ringing in my ears.",
            "ear": "No ear pain.",
            "fullness": "Some ear fullness."
        });

        // =====================================================================
        // HEADACHE - SAH CONCERN SCENARIO  
        // =====================================================================
        expandScenarioHistory('headache', 'whatif_headache_sah', {
            // Thunderclap headache - CLASSIC
            "headache": "This is the worst headache of my entire life.",
            "worst": "Absolutely the worst ever.",
            "worst headache": "Yes, worst headache of my life.",
            "severity": "10 out of 10.",
            "how bad": "Unbearable - worst ever.",
            "onset": "It came on suddenly - like a thunderclap.",
            "sudden": "Yes, instant and severe.",
            "thunderclap": "Yes, like being hit in the head.",
            "instantaneous": "Yes, instantaneous severe pain.",
            "when": "It started suddenly about 2 hours ago.",
            "what doing": "I was just sitting watching TV.",
            "exertion": "No exertion when it started.",
            "sex": "No, I wasn't doing anything strenuous.",
            "cough": "I might have coughed right before.",
            "strain": "Maybe straining slightly.",
            
            // Location
            "where": "All over my head, but worse in the back.",
            "location": "Whole head, especially occipital.",
            "back of head": "Yes, especially the back of my head.",
            "occipital": "Yes, back of head.",
            "neck": "My neck hurts too.",
            "neck pain": "Yes, neck pain and stiffness.",
            "stiff neck": "Yes, my neck is stiff.",
            "nuchal": "My neck is rigid.",
            
            // Associated symptoms
            "nausea": "Yes, severe nausea.",
            "vomiting": "I vomited twice.",
            "photophobia": "Yes, light hurts my eyes.",
            "light": "Light makes it worse.",
            "phonophobia": "Sounds bother me too.",
            "sound": "Yes, sounds make it worse.",
            "vision": "My vision is a little blurry.",
            "double vision": "Maybe some double vision.",
            
            // Altered mental status
            "confused": "I feel a bit confused.",
            "confusion": "Some confusion.",
            "drowsy": "Very drowsy.",
            "sleepy": "Hard to stay awake.",
            "alert": "Not as alert as usual.",
            
            // Focal symptoms
            "weakness": "No weakness.",
            "numbness": "No numbness.",
            "speech": "My speech is okay.",
            "facial droop": "No facial droop.",
            
            // Syncope
            "passed out": "I almost passed out when it started.",
            "syncope": "Nearly passed out.",
            "lost consciousness": "I didn't fully lose consciousness.",
            
            // History
            "migraines": "I get migraines but this is completely different.",
            "migraine history": "Yes, I have migraines.",
            "similar": "No, this is nothing like my usual migraines.",
            "different": "Totally different from my usual headaches.",
            "aura": "No aura like I usually get with migraines.",
            
            // Risk factors
            "family history": "My aunt had a brain aneurysm.",
            "aneurysm": "My aunt had one.",
            "blood pressure": "I have high blood pressure.",
            "hypertension": "Yes, hypertension.",
            "smoking": "I smoke half a pack a day.",
            "cocaine": "No, I don't use cocaine.",
            "drugs": "No illegal drugs.",
            "polycystic kidney": "No kidney problems.",
            "connective tissue": "No connective tissue disorders.",
            
            // Treatment
            "took anything": "I took ibuprofen but it didn't help at all.",
            "medication helped": "No, nothing helps.",
            "tylenol": "Tried Tylenol - no relief.",
            "dark room": "I'm in a dark room but still in pain."
        });

        console.log('[ReasonDx] Part 4 scenario expansions applied.');
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHistoryExpansionPart4);
    } else {
        initializeHistoryExpansionPart4();
    }

})();
