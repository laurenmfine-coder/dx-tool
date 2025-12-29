/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 20: Common Emergency/Urgent Cases
 * 
 * Cases:
 * 1. Migraine with Aura - 32F
 * 2. TIA (Transient Ischemic Attack) - 72F
 * 3. DVT (Deep Vein Thrombosis) - 45F
 * 4. Anaphylaxis - 28M
 * 5. Opioid Overdose - 34M
 * 6. Alcohol Withdrawal - 52M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Sarah Mitchell - Migraine with Aura
    // ==========================================
    
    const SARAH_MITCHELL_MIGRAINE = {
        meta: {
            caseId: "migraine-aura",
            patientName: "Sarah Mitchell",
            age: 32,
            gender: "female",
            diagnosis: "Migraine with aura"
        },
        
        responses: {
            "hello|hi": "*holding head* Hi... terrible migraine. Light hurts.",
            "what brings you in|chief complaint": "Severe migraine. Started with zigzag lines, now unbearable headache. My meds aren't working.",
            "when did this start|how long": "Aura started 4 hours ago, headache 30 minutes after.",
            "visual|aura|what did you see": "Zigzag lines, spots, then dark areas in vision. Lasts 20-30 minutes before headache.",
            "describe headache|what does it feel like": "Throbbing, pounding. Left side, temple and behind eye. 9/10 severity.",
            "nausea|vomiting": "Very nauseous. Haven't thrown up but close.",
            "light|photophobia": "Light is torture. Need complete darkness.",
            "sound|phonophobia": "Sounds hurt. Please speak softly.",
            "happen before|history": "2-3 times monthly since teenager. Same pattern but this one's worse.",
            "triggers": "Stress, lack of sleep, my period, certain foods. Big deadline at work.",
            "medication|tried anything": "Took Excedrin. Have sumatriptan but ran out last week.",
            "worst headache|different": "Severe but same type as always. Not different in character.",
            "fever|stiff neck": "No fever, no stiff neck.",
            "medical history": "Just migraines. Otherwise healthy.",
            "medications": "Birth control pills. Sumatriptan PRN.",
            "family history": "Mom and sister have migraines too.",
            "sexually active": "Yes, with my boyfriend. 2 years. On the pill.",
            "pregnant": "No, had my period last week.",
            "worried about|concerns": "I just need relief. Can I get something stronger?",
        }
    };

    // ==========================================
    // CASE: Eleanor Thompson - TIA
    // ==========================================
    
    const ELEANOR_THOMPSON_TIA = {
        meta: {
            caseId: "tia-resolved",
            patientName: "Eleanor Thompson",
            age: 72,
            gender: "female",
            diagnosis: "Transient ischemic attack (TIA)"
        },
        
        responses: {
            "hello|hi": "Hello. I feel fine now, but something scary happened this morning.",
            "what brings you in|chief complaint": "90 minutes ago my right arm went weak, speech slurred. Lasted 20-30 minutes, then resolved completely. I was a nurse - I know this could be a TIA.",
            "when|how long|duration": "Started 8:30am. Weakness lasted 25 minutes, speech slurring about 15 minutes. Completely normal now.",
            "describe|weakness": "Right arm felt heavy like lead. Couldn't grip my coffee cup. Words came out slurred and jumbled.",
            "face|leg": "Leg slightly clumsy. Didn't check my face in mirror.",
            "now|current|feel now": "Completely normal. *demonstrates normal strength* See? Fine now.",
            "medical history|conditions": "High BP, atrial fibrillation, high cholesterol, diabetes.",
            "afib|blood thinners": "On Eliquis but... I miss doses. Maybe once or twice a week. It's expensive.",
            "last dose": "Yesterday morning maybe. Might have missed last night.",
            "previous stroke|tia before": "Never. First time.",
            "medications": "Eliquis, lisinopril, metformin, atorvastatin.",
            "smoke": "Quit 20 years ago.",
            "sexually active": "No, widowed 5 years.",
            "worried about|concerns": "Am I going to have a stroke? That terrifies me.",
        }
    };

    // ==========================================
    // CASE: Melissa Ryan - DVT
    // ==========================================
    
    const MELISSA_RYAN_DVT = {
        meta: {
            caseId: "dvt-leg",
            patientName: "Melissa Ryan",
            age: 45,
            gender: "female",
            diagnosis: "Deep vein thrombosis"
        },
        
        responses: {
            "hello|hi": "Hi. My left leg is really swollen and it hurts.",
            "what brings you in|chief complaint": "Left leg swelling and pain for 3 days. Getting worse. My calf is much bigger than my right and it aches.",
            "when|how long": "Started 3 days ago, gradually worse. Much more swollen today.",
            "describe|location": "Whole lower leg swollen. Calf is worst. Dull ache, worse when I walk or stand.",
            "one leg|both": "Just the left. Right leg is normal.",
            "measure|size difference": "It's obviously bigger. Maybe 2-3 inches more around.",
            "red|warm|color": "A little red. Definitely warmer than the other leg.",
            "tender|calf|squeeze": "Very tender when touched. Squeezing my calf really hurts.",
            "shortness of breath|chest pain": "Maybe a little short of breath? I thought I was just out of shape.",
            "travel|long flight|car ride": "I flew back from Europe 5 days ago. 8-hour flight. Economy class, didn't move much.",
            "surgery|immobile|recent": "No recent surgery.",
            "birth control|hormones": "I'm on birth control pills. Have been for years.",
            "history|clots before|family": "Never had a clot. My mom had a blood clot in her leg once.",
            "medical history": "Just high blood pressure. Otherwise healthy.",
            "medications": "Birth control, lisinopril.",
            "smoke": "I smoke. Half pack a day.",
            "sexually active": "Yes, with my husband. Birth control pills.",
            "worried about|concerns": "Is this a blood clot? Can it go to my lungs? I read that online and I'm scared.",
        }
    };

    // ==========================================
    // CASE: Marcus Johnson - Anaphylaxis
    // ==========================================
    
    const MARCUS_JOHNSON_ANAPHYLAXIS = {
        meta: {
            caseId: "anaphylaxis-acute",
            patientName: "Marcus Johnson",
            age: 28,
            gender: "male",
            diagnosis: "Anaphylaxis (peanut)"
        },
        
        responses: {
            "hello|hi": "*labored breathing, hives visible, swollen lips* Can't... breathe... throat tight...",
            "what brings you in|chief complaint": "*struggling* Ate something... peanuts maybe... throat swelling... itchy everywhere...",
            "when|how long": "*wheezing* 20 minutes ago... ate at restaurant... getting worse fast...",
            "what did you eat": "*labored* Thai food... satay... didn't know it had peanuts...",
            "breathing|shortness of breath": "*audible wheeze* Hard to breathe... throat closing...",
            "throat|swelling": "*touching throat* Feels swollen inside... tongue feels big...",
            "rash|hives|itchy": "*hives visible on trunk and arms* Itchy everywhere... bumps all over...",
            "lips|face": "*visibly swollen* Lips tingling then swelled... face feels puffy...",
            "dizzy|faint": "Feel dizzy... lightheaded...",
            "epipen|medication": "*shakes head* Don't have it... left it home... stupid...",
            "allergic|allergy history": "Peanut allergy... since kid... had reactions before... never this bad...",
            "previous reactions|anaphylaxis before": "Had reactions... hives, vomiting... never throat swelling like this...",
            "medications": "None regular... supposed to carry EpiPen...",
            "medical history": "Just peanut allergy... asthma as kid...",
            "anything else": "*increasingly labored* Please... help... can't breathe...",
        }
    };

    // ==========================================
    // CASE: Kevin Miller - Opioid Overdose
    // ==========================================
    
    const KEVIN_MILLER_OVERDOSE = {
        meta: {
            caseId: "opioid-overdose",
            patientName: "Kevin Miller",
            age: 34,
            gender: "male",
            diagnosis: "Opioid overdose"
        },
        
        responses: {
            // Friend provides history - patient unresponsive/altered
            "hello|hi": "*patient barely responsive, pinpoint pupils*",
            "what happened": "*friend* Found him in his room not responding. He's been using again. I think heroin.",
            "when|how long": "*friend* Found him maybe 15 minutes ago. Don't know when he used.",
            "using what|drugs": "*friend* Heroin. He's been struggling. Got some from someone new.",
            "fentanyl|could it be fentanyl": "*friend* I don't know. Dealers lace stuff now. Could be.",
            "breathing|is he breathing": "*friend* Barely. Really slow breaths. Blue lips before.",
            "narcan|gave narcan": "*friend* I gave him one dose of Narcan. His breathing got a little better.",
            "history|using how long": "*friend* He's been on and off for 5 years. Was clean for 6 months. Relapsed recently.",
            "injection|snort|how did he use": "*friend* He injects. I saw track marks.",
            "amount|how much": "*friend* Don't know. Found one empty bag near him.",
            "medical history": "*friend* I think he has hep C. No other problems I know of.",
            "allergies": "*friend* Not that I know of.",
            "*patient wakes partially*|patient": "*patient, groggy* What... where... *tries to pull at IV*",
            "stay with us|mr miller": "*patient, drowsy* Leave me alone... I'm fine... *nods off*",
        }
    };

    // ==========================================
    // CASE: Thomas O'Brien - Alcohol Withdrawal
    // ==========================================
    
    const THOMAS_OBRIEN_WITHDRAWAL = {
        meta: {
            caseId: "alcohol-withdrawal",
            patientName: "Thomas O'Brien",
            age: 52,
            gender: "male",
            diagnosis: "Alcohol withdrawal syndrome"
        },
        
        responses: {
            "hello|hi": "*trembling, sweating, agitated* I need something doc... the shakes are bad...",
            "what brings you in|chief complaint": "I stopped drinking 2 days ago. Ran out of money. Now I'm shaking, sweating, seeing things. I've been through this before.",
            "when|last drink|how long": "Last drink was about 48 hours ago. Beer. I ran out and can't afford more.",
            "symptoms|how do you feel": "Shaking bad. Can't stop. Sweating. Heart racing. Can't sleep. Anxious. Feel like I'm gonna jump out of my skin.",
            "tremor|shaking": "*holds out hands - visible coarse tremor* See? Can't control it. Worse than before.",
            "hallucinations|seeing things": "I see... shadows. Things moving at the edges. Bugs sometimes. I know they're not real but I see them.",
            "seizure|convulsion|ever seized": "I had a seizure during withdrawal 3 years ago. That's why I'm here. I'm scared.",
            "drinking|how much|how often": "Pint of vodka a day. Every day. For... 10 years maybe. More recently.",
            "tried to stop|quit before": "Many times. Always go back. Get too sick. The shakes get bad.",
            "DTs|delirium tremens|bad withdrawal": "Never had full DTs. But came close. That seizure scared me.",
            "medical history|conditions": "Liver problems - they said it's enlarged. High blood pressure. Probably from drinking.",
            "medications": "Nothing. Can't afford them. Lost my insurance.",
            "smoke": "Yeah, pack a day.",
            "last meal|eating": "Don't remember. Yesterday? Food doesn't interest me.",
            "support|family|live": "Divorced. Live alone. Kids don't talk to me.",
            "want help|want to quit": "I want to quit. I'm killing myself. I know it. I just... can't do it alone.",
            "worried about|concerns": "I'm scared I'll have another seizure. Or worse. Please help me.",
        }
    };

    // Export all cases
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['migraine-aura'] = SARAH_MITCHELL_MIGRAINE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tia-resolved'] = ELEANOR_THOMPSON_TIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['dvt-leg'] = MELISSA_RYAN_DVT;
    window.COMPREHENSIVE_PATIENT_RESPONSES['anaphylaxis-acute'] = MARCUS_JOHNSON_ANAPHYLAXIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['opioid-overdose'] = KEVIN_MILLER_OVERDOSE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['alcohol-withdrawal'] = THOMAS_OBRIEN_WITHDRAWAL;
    
    console.log('ReasonDx Part 20 (Migraine, TIA, DVT, Anaphylaxis, Overdose, Withdrawal) loaded');

})();
