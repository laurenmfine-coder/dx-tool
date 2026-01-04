/**
 * ReasonDx Part 41: Pediatric, Psych, and Specialty Cases
 * Cases: Child Developmental Delay, Well Child 12mo, Toddler Button Battery, Suicidal Ideation, Substance Use, Trauma Primary
 */
(function() {
    'use strict';

    const CHILD_DEV_DELAY = {
        meta: { caseId: "child-developmental-delay", patientName: "Ethan Miller", age: 2, diagnosis: "Developmental delay evaluation" },
        responses: {
            "hello|hi": "*mother* Hi doctor. I'm worried about my son. He's not talking like other kids.",
            "what brings you in|chief complaint": "*mother* He's 2 and barely says any words. Other kids his age are talking in sentences. Something's wrong.",
            "language|speech|words": "*mother* Maybe 5 words. Mama, dada, ball, no, and bye. That's it.",
            "sentences|phrases": "*mother* No phrases. Just single words.",
            "understand|comprehend": "*mother* He seems to understand some things. Follows simple commands sometimes.",
            "pointing|gestures": "*mother* He points to things he wants. Waves bye-bye.",
            "eye contact|social": "*mother* Makes eye contact. Smiles at us. Seems to connect.",
            "name|respond to name": "*mother* Usually responds to his name. Sometimes ignores us.",
            "motor|walking|running": "*mother* Walking fine. Runs. Climbs everything. Physical stuff is good.",
            "feeding|eating": "*mother* Feeds himself. Messy but doing it.",
            "regression|lost skills": "*mother* No, he hasn't lost any skills. Just not gaining like he should.",
            "hearing|ears": "*mother* I wonder about his hearing. Had ear infections.",
            "ear infections|how many": "*mother* Several. Maybe 5 or 6 in the first year.",
            "hearing test|audiogram": "*mother* Never had formal hearing test.",
            "birth|pregnancy|delivery": "*mother* Normal pregnancy. Born at term. Vaginal delivery.",
            "nicu|complications": "*mother* No NICU. Went home on time.",
            "milestones|other": "*mother* Sat at 6 months. Walked at 13 months. Those were on time.",
            "siblings|family": "*mother* Sister is 5. She talked early. Way ahead of him.",
            "family history|delays": "*mother* My nephew has autism. That's what scares me.",
            "autism|behaviors": "*mother* He lines up toys sometimes. Likes routine. But he's affectionate.",
            "daycare|socialization": "*mother* Home with me. Doesn't socialize much with other kids.",
            "screen time|tv": "*mother* I know he watches too much TV. It keeps him quiet.",
            "medical history": "*mother* Just ear infections. Otherwise healthy.",
            "medications": "*mother* Nothing.",
            "allergies": "*mother* None.",
            "worried about|concerns": "*mother* Is this autism? Or just delayed? Will he catch up?",
        }
    };

    const WELL_CHILD_12MO = {
        meta: { caseId: "well-child-12mo", patientName: "Baby Lily Chen", age: 1, diagnosis: "12-month well child visit" },
        responses: {
            "hello|hi": "*mother* Hi! Here for her 1-year checkup. Can you believe it's been a year?",
            "what brings you in|chief complaint": "*mother* 12-month well visit. She's doing great!",
            "how is she doing": "*mother* Amazing. Walking now. Getting into everything.",
            "walking|gross motor": "*mother* Started walking at 11 months. Cruises everywhere. Few independent steps.",
            "fine motor|hands": "*mother* Picks up cheerios. Waves. Claps. Starting to point.",
            "language|words": "*mother* Says mama, dada, maybe one or two other words. Babbles a lot.",
            "understand|follow directions": "*mother* Understands 'no'. Follows simple instructions. Knows her name.",
            "social|interaction": "*mother* Loves peek-a-boo. Stranger anxiety though. Cries with new people.",
            "feeding|eating": "*mother* Mostly table food now. Still breastfeeding morning and night.",
            "bottle|cup": "*mother* Working on the sippy cup. Getting better.",
            "sleeping|sleep": "*mother* Sleeps through mostly. 10-11 hours. Two naps.",
            "teeth": "*mother* Has 6 teeth. Bites everything.",
            "illnesses|sick": "*mother* A few colds from daycare. Nothing major.",
            "daycare": "*mother* Started at 6 months. Doing well there.",
            "vaccines|shots": "*mother* Ready for her 12-month shots. What does she get?",
            "concerns|worries": "*mother* She's not drinking cow's milk yet. And the stranger anxiety is intense.",
            "cow's milk|transition": "*mother* Tried it. She makes a face.",
            "allergies|reactions": "*mother* None that we know of.",
            "family history": "*mother* All healthy. No concerns.",
            "home safety|childproofing": "*mother* Gates everywhere. Locked cabinets. She's fast!",
            "car seat": "*mother* Rear-facing. She hates it but we're strict.",
            "worries|parent concerns": "*mother* Is her walking normal? Other kids at daycare aren't walking yet.",
        }
    };

    const BUTTON_BATTERY = {
        meta: { caseId: "toddler-button-battery", patientName: "Mason Thompson", age: 2, diagnosis: "Button battery ingestion" },
        responses: {
            "hello|hi": "*frantic parents* Doctor! He swallowed a battery! From a toy!",
            "what brings you in|chief complaint": "*mother* He swallowed one of those round flat batteries. Button battery. We saw him do it.",
            "when|how long ago": "*father* Maybe 30 minutes ago. Came straight here.",
            "saw|witnessed": "*mother* Yes, I saw it go in his mouth. Before I could stop him.",
            "type|what kind": "*father* Little round silver one. From a toy. This big. *shows small circle with fingers*",
            "symptoms|how is he": "*mother* Seems okay right now. Not choking. But I know these are dangerous.",
            "drooling|swallowing": "*mother* No extra drooling. Swallowing okay.",
            "coughing|gagging": "*father* He gagged when he swallowed it. Cried. Now seems okay.",
            "vomiting": "*mother* No vomiting.",
            "eating|drinking": "*mother* We didn't give him anything. Came right here.",
            "pain|pointing": "*father* Not pointing to anything hurting.",
            "where came from|toy": "*mother* Toy remote control. The cover came off. I didn't know it had batteries.",
            "breathing|respiratory": "*mother* Breathing seems fine.",
            "child age|how old": "*mother* Just turned 2 last month.",
            "medical history": "*father* Healthy. No problems.",
            "allergies": "*mother* None.",
            "previous ingestions|swallowed things before": "*father* Coins once. Passed them. This is different I know.",
            "worried about|concerns": "*mother* I read these can burn through tissue. This is an emergency, right?",
        }
    };

    const SUICIDAL_IDEATION = {
        meta: { caseId: "suicidal-ideation", patientName: "Sarah Mitchell", age: 32, diagnosis: "Suicidal ideation assessment" },
        responses: {
            "hello|hi": "*appears tearful, exhausted* Hi... I... I've been having bad thoughts.",
            "what brings you in|chief complaint": "I've been thinking about... ending it. Not wanting to be here. It scared me so I came.",
            "thoughts|describe": "Thinking that everyone would be better off without me. That I should just disappear.",
            "plan|how": "I've thought about pills. I have a lot at home. Thought about it but haven't done anything.",
            "intent|going to do it": "I don't know. Part of me wants to. Part of me is scared. That's why I came.",
            "when|how long": "Thoughts started maybe 2 weeks ago. Getting worse.",
            "previous attempts|tried before": "Took pills in college. Ended up in the hospital. 10 years ago.",
            "what happened then|hospitalized": "Pumped my stomach. Inpatient psych for a week. Started therapy.",
            "depression|mood": "Depressed for months. Can't get out of bed. Stopped enjoying anything.",
            "sleep|sleeping": "Either can't sleep or sleep all day. No middle ground.",
            "eating|appetite": "Not eating. Lost weight.",
            "energy|fatigue": "No energy. Everything is exhausting.",
            "hopeless|helpless": "Hopeless. Like nothing will ever get better.",
            "trigger|what happened": "Divorce is final. Lost my job. My parents are sick. Everything at once.",
            "support|people": "Few friends. Family is far away. Feel alone.",
            "substances|alcohol|drugs": "Drinking more. Wine every night. Helps me sleep.",
            "access to means|medications|guns": "Lots of pills at home. Sleeping pills, pain pills. No guns.",
            "therapy|treatment|current": "Was in therapy. Stopped when I lost insurance with the job.",
            "medications|psychiatric": "Was on Lexapro. Ran out. Haven't refilled.",
            "medical history": "Depression. Anxiety. History of self-harm in teens.",
            "allergies": "None.",
            "safety|right now": "I came here instead of acting on it. That's something, right?",
            "worried about|concerns": "I don't want to die. But I don't know how to make these thoughts stop.",
        }
    };

    const SUBSTANCE_USE = {
        meta: { caseId: "substance-use", patientName: "Jason Taylor", age: 35, diagnosis: "Substance use disorder" },
        responses: {
            "hello|hi": "Hey doc. I need help. Things have gotten out of control.",
            "what brings you in|chief complaint": "Opioid problem. Started with pills after back surgery. Now I can't stop.",
            "what|which substances": "Oxy at first. Then whatever I could get. Heroin when I couldn't get pills.",
            "how long": "5 years. Surgery was 5 years ago.",
            "current use|using now": "Heroin mostly. Snorting. Sometimes fentanyl if that's what's available.",
            "how much|how often": "Every day. Multiple times. Need it just to feel normal.",
            "last use": "This morning. Few hours ago.",
            "withdrawal|feel without": "Terrible. Sweating, shaking, cramping, vomiting. Can't take it.",
            "overdose|ever od": "Twice. Someone used Narcan on me. Woke up in an ambulance.",
            "injection|needle use": "Snort mostly. Shot up a few times when desperate.",
            "sharing needles": "Never. That I'm careful about.",
            "other substances": "Drink sometimes. No other drugs.",
            "tried quitting|treatment before": "Tried cold turkey. Made it 2 days. Detox once. Relapsed right after.",
            "mat|suboxone|methadone": "Tried Suboxone once. Got kicked out of the program for using.",
            "why now|what changed": "Lost my wife. Kids. Job. Living in my car. This is rock bottom.",
            "hiv|hep c|tested": "Tested for HIV. Negative. Haven't checked hep C.",
            "mental health|depression|anxiety": "Depressed. Anxious. Self-medicating.",
            "support|family": "Mom still talks to me. Brother is done with me. No friends left.",
            "criminal|legal": "Arrested once. Possession. Charges dropped.",
            "medical history|other": "Back injury. Chronic pain. That's how this started.",
            "allergies": "None.",
            "worried about|concerns": "I want to stop. Really. I don't know how to get through the withdrawal.",
        }
    };

    const TRAUMA_PRIMARY = {
        meta: { caseId: "trauma-primary", patientName: "MVA Victim", age: 35, diagnosis: "Trauma - primary survey" },
        responses: {
            "hello|hi": "*ems handoff* Unresponsive MVA victim, high-speed rollover!",
            "what happened|chief complaint": "*ems* Rollover at 60mph. Unrestrained driver. Ejected. Found 20 feet from vehicle.",
            "time|scene time": "*ems* 15 minutes scene time. 10 minute transport.",
            "vitals|initial": "*ems* BP 90/60, HR 130, RR 8, O2 sat 88% on NRB.",
            "airway|breathing": "*ems* Airway compromised. Gurgling. Labored breathing. Decreased left-sided breath sounds.",
            "gcs|mental status": "*ems* GCS 7. Eye opening to pain. Incomprehensible sounds. Withdraws to pain.",
            "pupils|neuro": "*ems* Left pupil dilated and sluggish. Right reactive.",
            "obvious injuries|describe": "*ems* Large scalp laceration. Deformity left chest. Abdominal distension.",
            "cervical|c-spine": "*ems* Collar in place. Assume c-spine injury.",
            "bleeding|external": "*ems* Scalp bleeding controlled with pressure. Some from ears.",
            "fluid|iv|access": "*ems* Two large bore IVs. Liter of saline in.",
            "extremities": "*ems* Left leg angulated at thigh. Pelvis unstable on palpation.",
            "age|info": "*ems* Driver's license says 35. No medical info available.",
            "intubated|airway management": "*ems* Bagged with OPA. Couldn't intubate in field.",
            "medications|allergies": "*ems* Nothing with her. Unknown allergies.",
            "family|contacts": "*ems* Police are working on notification.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['child-developmental-delay'] = CHILD_DEV_DELAY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['well-child-12mo'] = WELL_CHILD_12MO;
    window.COMPREHENSIVE_PATIENT_RESPONSES['toddler-button-battery'] = BUTTON_BATTERY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['suicidal-ideation'] = SUICIDAL_IDEATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['suicide-assessment'] = SUICIDAL_IDEATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['substance-use'] = SUBSTANCE_USE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['trauma-primary'] = TRAUMA_PRIMARY;
    
    console.log('ReasonDx Part 41 (Dev Delay, Well Child, Button Battery, Suicidal, Substance Use, Trauma) loaded');

})();
