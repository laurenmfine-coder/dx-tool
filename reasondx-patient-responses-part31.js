/**
 * ReasonDx Part 31: Pediatric and OB/GYN Cases
 * Cases: Bronchiolitis, Otitis Media, Peds Asthma, Abnormal Bleeding, Vaginal Discharge, Contraception
 */
(function() {
    'use strict';

    const BRONCHIOLITIS_CASE = {
        meta: { caseId: "bronchiolitis", patientName: "Baby Sophia", age: 0.4, diagnosis: "Bronchiolitis (RSV)" },
        responses: {
            "hello|hi": "*mother holding wheezing infant* Hi, my baby can't breathe right.",
            "what brings you in|chief complaint": "*mother* She's had a cold for 3 days but tonight she started breathing really fast and wheezing. She won't eat.",
            "when|how long": "*mother* Cold started 3 days ago. Breathing problems got bad today.",
            "breathing|describe": "*mother* Breathing so fast. Her ribs show with each breath. Wheezing sounds.",
            "retractions|chest": "*mother* Yes, I can see ribs and skin sucking in under ribs.",
            "feeding|eating": "*mother* Won't nurse. Breathing too hard to suck.",
            "wet diapers|urine": "*mother* Only 2 wet diapers today. Usually 6 or 7.",
            "fever": "*mother* Low fever, 100.4.",
            "cough|runny nose": "*mother* Lots of runny nose. Wet cough.",
            "sick contacts|daycare": "*mother* Brother had a cold. Not in daycare.",
            "age|how old": "*mother* 4 months old. Full term, healthy birth.",
            "premature": "*mother* No, almost full term. Normal delivery.",
            "vaccines": "*mother* Had 2 month shots.",
            "medical history": "*mother* First illness. Been healthy.",
            "family history|asthma": "*mother* Dad has asthma.",
            "smoke": "*mother* No one smokes.",
            "worried about|concerns": "*mother* Is she going to be okay? Does she need oxygen?",
        }
    };

    const OTITIS_MEDIA_CASE = {
        meta: { caseId: "otitis-media", patientName: "Jayden Williams", age: 2, diagnosis: "Acute otitis media" },
        responses: {
            "hello|hi": "*mother with crying toddler pulling ear* Hi, he won't stop crying. Pulling at his ear.",
            "what brings you in|chief complaint": "*mother* Screaming all night. Grabbing right ear. Had a cold, now this.",
            "when|how long": "*mother* Ear pain started last night. Woke up screaming at 2 AM.",
            "which ear": "*mother* Right one mostly. Keeps touching it and screaming.",
            "cold|runny nose": "*mother* Had a cold for a week. Runny nose, congestion, cough.",
            "fever": "*mother* 102 last night. Tylenol brought it to 100.",
            "eating|drinking": "*mother* Drinking okay, not eating much.",
            "sleeping": "*mother* Terrible. Up every hour crying.",
            "drainage|fluid": "*mother* No drainage that I've seen.",
            "daycare|exposure": "*mother* Yes, daycare 4 days a week. Kids have been sick.",
            "ear infections before": "*mother* One at 10 months. Antibiotics helped.",
            "medical history": "*mother* Healthy kid otherwise.",
            "vaccines": "*mother* Up to date.",
            "allergies": "*mother* No allergies.",
            "worried about|concerns": "*mother* Does he need antibiotics? Will he need tubes?",
        }
    };

    const PEDS_ASTHMA_CASE = {
        meta: { caseId: "peds-asthma", patientName: "Aiden Thompson", age: 8, diagnosis: "Asthma exacerbation" },
        responses: {
            "hello|hi": "*child sitting upright, short phrases* Hi... hard to... breathe...",
            "what brings you in|chief complaint": "*mother* Asthma attack. Inhaler isn't helping. Worst one he's had.",
            "when|how long": "*mother* Started this morning. Got worse through the day.",
            "trigger|what started": "*mother* Was at a friend's house with a cat yesterday. He's allergic.",
            "inhaler|albuterol": "*mother* Gave albuterol 3 times in 4 hours. Not working.",
            "how often using": "*mother* Used rescue inhaler 8 times today. Usually once or twice a week.",
            "breathing": "*child* Tight... in my chest... *wheeze*",
            "cough": "*mother* Coughing all day. Can't stop.",
            "sleeping": "*mother* Up coughing. Had to sit up.",
            "fever": "*mother* No fever.",
            "asthma how long": "*mother* Diagnosed at 4. Usually well-controlled.",
            "controller medication": "*mother* Flovent twice daily. Singulair at bedtime.",
            "compliance": "*mother* Yes, every day.",
            "hospitalizations": "*mother* Once at age 5. Needed oxygen.",
            "icu|intubated": "*mother* No, never needed ICU.",
            "allergies": "*mother* Cats, dust, pollen. Peanut allergy.",
            "family history": "*mother* I have asthma.",
            "smoke": "*mother* No smoking. Air purifier. No pets.",
            "worried about|concerns": "*mother* Does he need to be admitted?",
        }
    };

    const ABNORMAL_BLEEDING = {
        meta: { caseId: "abnormal-bleeding", patientName: "Jessica Adams", age: 32, diagnosis: "Abnormal uterine bleeding" },
        responses: {
            "hello|hi": "Hi doctor. I've been having really heavy periods and bleeding between periods.",
            "what brings you in|chief complaint": "Heavy periods, bleeding in between, feeling tired all the time. My periods used to be normal.",
            "when|how long": "Started about 4 months ago. Getting progressively worse.",
            "heavy|describe bleeding": "Soaking through a super tampon every hour on my heavy days. Passing clots the size of quarters.",
            "how many days|duration": "Periods last 8-9 days now. Used to be 5.",
            "between periods|intermenstrual": "Yes, spotting or sometimes real bleeding between periods. Random.",
            "pattern|regular|irregular": "Periods are irregular now. Sometimes every 3 weeks, sometimes 5 weeks.",
            "pain|cramps": "Worse cramps than before. And pelvic pressure.",
            "fatigue|tired": "Exhausted. Can barely get through the day.",
            "dizzy|lightheaded": "Get lightheaded when I stand up too fast.",
            "last period|lmp": "Started a week ago. Still going actually.",
            "pregnant|could you be": "I don't think so. We use condoms. But I haven't tested.",
            "contraception": "Condoms. Nothing hormonal.",
            "previous pregnancies|children": "Two kids, vaginal deliveries. One miscarriage 3 years ago.",
            "pap smear|last exam": "About 2 years ago. Was normal.",
            "sexually active": "Yes, with my husband.",
            "partners": "Just my husband. Together 10 years.",
            "stis|infections": "No history of STIs.",
            "discharge|odor": "Normal discharge. No odor.",
            "medical history": "Nothing significant. Healthy.",
            "medications": "Just multivitamins. Iron since I've been tired.",
            "thyroid|hormones": "Never tested that I know of.",
            "weight changes": "Gained maybe 10 pounds this year.",
            "family history|fibroids|cancer": "My mom had fibroids. Had a hysterectomy at 45.",
            "allergies": "No allergies.",
            "worried about|concerns": "Is this cancer? Why is this happening? I'm anemic, aren't I?",
        }
    };

    const VAGINAL_DISCHARGE = {
        meta: { caseId: "vaginal-discharge", patientName: "Brittany Collins", age: 24, diagnosis: "Vaginal discharge - evaluation" },
        responses: {
            "hello|hi": "Hi. This is embarrassing but I have discharge and it's not normal for me.",
            "what brings you in|chief complaint": "Changed discharge. Thicker, different smell. Some itching. Worried I caught something.",
            "when|how long": "About a week. Noticed after my last period ended.",
            "describe|color|consistency": "Thicker than normal. White-ish, maybe slightly yellow. Cottage cheese-like.",
            "smell|odor": "Different smell. Not fishy exactly. Just not normal.",
            "itching|irritation": "Itchy. Outside and inside. Been driving me crazy.",
            "burning|dysuria": "Burns a little when I pee. At the end.",
            "pain|pelvic|abdominal": "No real pain. Just the itching.",
            "bleeding|spotting": "No abnormal bleeding.",
            "fever": "No fever.",
            "last period|lmp": "Ended about 10 days ago. Normal.",
            "sexually active": "Yes.",
            "partners|how many": "I have a boyfriend. We've been together 6 months. He's my only current partner.",
            "new partner|recent": "He's relatively new. We started having sex about 4 months ago.",
            "condoms|protection": "Sometimes. Not always. I'm on the pill.",
            "birth control": "Yes, combination pill for 3 years.",
            "previous stis|history": "I had chlamydia once in college. Treated. Tested negative after.",
            "partner symptoms|he have anything": "I don't think so. He hasn't said anything.",
            "last tested|std testing": "Maybe a year ago? Before him.",
            "antibiotics|recently": "I took antibiotics for a sinus infection 2 weeks ago. Amoxicillin.",
            "diabetes": "No diabetes.",
            "medical history": "Nothing. Healthy.",
            "douching|products": "I don't douche. Just regular soap.",
            "worried about|concerns": "Did I catch an STI? Or is this a yeast infection? What do I tell my boyfriend?",
        }
    };

    const CONTRACEPTION_CASE = {
        meta: { caseId: "contraception", patientName: "Megan Taylor", age: 28, diagnosis: "Contraception counseling" },
        responses: {
            "hello|hi": "Hi. I need to talk about birth control. My current method isn't working for me.",
            "what brings you in|chief complaint": "I want to change my birth control. The pill makes me feel terrible. Want something easier.",
            "current method|what are you using": "The pill. Combination pill. Been on it 2 years.",
            "problems|side effects": "Mood swings, headaches, breakthrough bleeding. Have to remember it every day. I've missed doses.",
            "missed pills|how often": "A few times a month honestly. My schedule is crazy.",
            "effectiveness|worried about pregnancy": "Yes, I'm worried because I miss pills. Don't want to get pregnant right now.",
            "when|future|want kids": "Maybe in 4-5 years. Career focused right now.",
            "what are you looking for|preferences": "Something I don't have to think about. Long-acting maybe? My friend has an IUD she loves.",
            "iud|thoughts on iud": "Interested. Copper or hormonal - what's the difference?",
            "implant|arm implant": "What's that? Didn't know that was an option.",
            "shot|depo": "I've heard the shot causes weight gain. Is that true?",
            "sexually active": "Yes, with my boyfriend. Monogamous.",
            "how long together": "2 years. We live together.",
            "condoms|barrier": "We don't use condoms anymore since I'm on the pill. Should we?",
            "stis|sti testing": "Tested when we got together. Both negative. Neither of us has been with anyone else.",
            "periods|menstrual": "Regular but heavy. Cramps. Would love lighter periods.",
            "medical history": "Nothing major. Healthy.",
            "surgeries": "None.",
            "migraines|headaches": "I get headaches, especially around my period. Not migraines with aura.",
            "blood clots|family history": "No blood clots. My mom takes blood thinners but that's for her heart.",
            "smoking": "No.",
            "blood pressure": "Normal.",
            "allergies": "No allergies.",
            "worried about|concerns": "I just want something reliable that I don't have to think about. What do you recommend?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['bronchiolitis'] = BRONCHIOLITIS_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['otitis-media'] = OTITIS_MEDIA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['peds-asthma'] = PEDS_ASTHMA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['abnormal-bleeding'] = ABNORMAL_BLEEDING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['vaginal-discharge'] = VAGINAL_DISCHARGE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['contraception'] = CONTRACEPTION_CASE;
    
    console.log('ReasonDx Part 31 (Bronchiolitis, Otitis, Peds Asthma, AUB, Discharge, Contraception) loaded');

})();
