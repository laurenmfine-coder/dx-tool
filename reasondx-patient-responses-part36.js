/**
 * ReasonDx Part 36: More Clinical Cases
 * Cases: Skin Rash Contact, Red Eye Conjunctivitis, Red Eye Glaucoma, Vision Changes CRAO, Tremor Parkinsons, Tremor Lewy Body
 */
(function() {
    'use strict';

    const SKIN_RASH_CONTACT = {
        meta: { caseId: "skin-rash-contact", patientName: "Sarah Thompson", age: 34, diagnosis: "Contact dermatitis" },
        responses: {
            "hello|hi": "Hi doctor. I have this itchy rash that won't go away.",
            "what brings you in|chief complaint": "Rash on my hands and wrists. Incredibly itchy. Been 2 weeks. Spreading.",
            "when|how long": "Started about 2 weeks ago. Getting worse.",
            "where|location": "Hands, wrists, forearms. Where I touch things.",
            "describe|what does it look like": "Red, bumpy. Some blisters. Weepy in places.",
            "itchy|pruritus": "Unbearably itchy. Can't stop scratching.",
            "pattern|distribution": "Mainly where my watch was. And on my palms. Both hands.",
            "new exposure|anything new": "Started a new job. Working with cleaning products.",
            "cleaning products|what kind": "Industrial cleaners. Wear gloves but... not always.",
            "jewelry|watch|metals": "I got a new watch. Cheap one from online.",
            "soap|detergent": "Same soap I've always used.",
            "cosmetics|lotions": "No new lotions.",
            "spreading|getting bigger": "Spreading up my arms. Wherever I scratch.",
            "fever|systemic": "No fever. Just the rash.",
            "tried|treatment": "Hydrocortisone cream. Helps a little. Keeps coming back.",
            "similar|happened before": "Never had a rash like this.",
            "allergies|known": "No known allergies. Maybe now I do.",
            "medical history": "Eczema as a kid. Outgrew it.",
            "medications": "Birth control pills. That's it.",
            "sexually active": "Yes, boyfriend.",
            "worried about|concerns": "Is this an allergy? Will it scar? I can't keep living with this itch.",
        }
    };

    const RED_EYE_CONJUNCTIVITIS = {
        meta: { caseId: "red-eye-conjunctivitis", patientName: "Mark Stevens", age: 28, diagnosis: "Viral conjunctivitis" },
        responses: {
            "hello|hi": "Hi. My eye is really red and gunky. Is it pink eye?",
            "what brings you in|chief complaint": "Red eye for 3 days. Discharge. Itchy. My daughter just had pink eye.",
            "when|how long": "Started 3 days ago. Right eye first, now left is starting.",
            "which eye|both": "Right eye is worse. Left just started.",
            "describe|appearance": "Bloodshot. Red all over the white part.",
            "discharge|drainage": "Watery discharge. Crusty in the morning.",
            "color|discharge color": "Clear mostly. A little yellowish when dried.",
            "itchy|burning": "Itchy. Sandy feeling. Burns a little.",
            "pain": "Not really painful. Just uncomfortable.",
            "vision|blurry": "Vision is fine. A little blurry from the gunk.",
            "light sensitivity": "A little. Not terrible.",
            "swelling|lids": "Lids are a bit puffy.",
            "recent cold|illness": "Had a cold last week. Still have sniffles.",
            "contacts|wear contacts": "No contacts. Just glasses.",
            "exposure|sick contacts": "My 5-year-old had pink eye. Got it from daycare.",
            "tried|treatment": "Tried eye drops from the pharmacy. Not helping much.",
            "allergies|hay fever": "Seasonal allergies usually. But this is different.",
            "similar|happened before": "Had pink eye as a kid.",
            "medical history": "Healthy. Just allergies.",
            "medications": "Zyrtec during allergy season.",
            "work|touching eyes": "Office job. Try not to touch my eyes.",
            "worried about|concerns": "Is this contagious? Can I go to work? Do I need antibiotic drops?",
        }
    };

    const RED_EYE_GLAUCOMA = {
        meta: { caseId: "red-eye-glaucoma", patientName: "Helen Morris", age: 68, diagnosis: "Acute angle-closure glaucoma" },
        responses: {
            "hello|hi": "*in obvious distress, holding eye* My eye... terrible pain... can't see...",
            "what brings you in|chief complaint": "Sudden severe pain in my right eye. Vision is blurry. Seeing halos. Started few hours ago.",
            "when|how long": "Started about 4 hours ago. Sudden. Getting worse.",
            "which eye": "Right eye.",
            "pain|describe": "Terrible pain. Deep aching. Around and behind my eye. Radiates to my forehead.",
            "severity": "9 out of 10. Worst eye pain ever.",
            "vision|describe": "Blurry. Can barely see out of that eye now.",
            "halos|lights": "Seeing rainbow halos around lights. Everything has a glow.",
            "nausea|vomiting": "Very nauseous. Threw up once.",
            "headache": "Yes, terrible headache on that side.",
            "eye appearance|redness": "Red. My husband said it looks really red.",
            "pupil|size": "I don't know. Can't see well enough.",
            "other eye": "Left eye seems okay.",
            "what were you doing|trigger": "Was at the movies. In the dark theater.",
            "medications|recent": "Took Benadryl for allergies before the movie.",
            "glaucoma|history": "They said my eye pressure was borderline once. Never followed up.",
            "farsighted": "Yes, very farsighted. Wear thick glasses.",
            "medical history": "High blood pressure. Farsighted.",
            "eye surgery|previous": "Never had eye surgery.",
            "medications": "Lisinopril for blood pressure. Benadryl occasionally.",
            "allergies": "No drug allergies.",
            "worried about|concerns": "Am I going blind? Please help me. The pain is unbearable.",
        }
    };

    const VISION_CRAO = {
        meta: { caseId: "vision-changes-crao", patientName: "Edward Williams", age: 72, diagnosis: "Central retinal artery occlusion" },
        responses: {
            "hello|hi": "Doctor, I can't see out of my left eye. It just went dark.",
            "what brings you in|chief complaint": "Sudden vision loss in my left eye. Like a curtain came down. No warning.",
            "when|how long": "About 2 hours ago. Completely sudden.",
            "describe|what happened": "One moment fine, next moment can't see. Like someone turned off a light.",
            "which eye": "Left eye.",
            "complete|how much": "Almost complete. Maybe some light perception. No shapes.",
            "pain": "No pain at all. That's the strange thing.",
            "gradual|sudden": "Sudden. Instantaneous.",
            "warning|before": "Maybe some brief blurriness yesterday? Thought I was tired.",
            "other eye": "Right eye is fine. Can see normally.",
            "flashes|floaters": "No flashes. No new floaters.",
            "headache": "No headache.",
            "facial|weakness|numbness": "Face feels normal. No weakness.",
            "speech|trouble speaking": "Speech is fine.",
            "what were you doing": "Just watching TV. Nothing strenuous.",
            "similar|happened before": "Never. First time.",
            "medical history": "Atrial fibrillation. High blood pressure. Diabetes. Carotid stenosis they found.",
            "blood thinners|anticoagulation": "On Eliquis.",
            "taking it|compliance": "Yes, every day.",
            "carotid|artery disease": "They said 60% blockage on the left. Watching it.",
            "smoking": "Quit 5 years ago after 40 years.",
            "medications": "Eliquis, lisinopril, metformin, atorvastatin, metoprolol.",
            "allergies": "No allergies.",
            "worried about|concerns": "Will I get my vision back? Is this a stroke?",
        }
    };

    const TREMOR_PARKINSONS = {
        meta: { caseId: "tremor-parkinsons", patientName: "William Foster", age: 68, diagnosis: "Parkinson's disease" },
        responses: {
            "hello|hi": "*slight resting tremor in left hand* Hello doctor.",
            "what brings you in|chief complaint": "My hand shakes. I'm slower than I used to be. My wife noticed I shuffle.",
            "tremor|shaking": "Left hand shakes. Especially when I'm not using it.",
            "when|how long": "Maybe a year. Gradually got more noticeable.",
            "describe|tremor": "Like I'm rolling a pill between my fingers. Worse at rest.",
            "both hands|one hand": "Mostly left hand. Right is okay.",
            "better|worse": "Better when I use my hand. Worse when resting.",
            "slowness|movement": "Everything takes longer. Getting dressed. Eating.",
            "walking|gait": "I shuffle. Take small steps. Hard to get started walking.",
            "balance|falls": "More unsteady. Haven't fallen yet.",
            "stiffness|rigidity": "Muscles feel stiff. Especially my arm.",
            "handwriting|small": "My handwriting got tiny. Can barely read it.",
            "facial expression": "My wife says I look blank. Don't show emotions on my face.",
            "voice|quiet": "Voice is softer. People ask me to repeat myself.",
            "smell|olfactory": "Come to think of it, lost my sense of smell years ago.",
            "sleep|rem|acting out dreams": "I act out dreams. Punch and kick. Wife sleeps in other room now.",
            "constipation": "Terrible constipation. For years.",
            "depression|mood": "Feeling down. Lost interest in things.",
            "family history": "Father had shaking in his 70s. Never diagnosed.",
            "medical history": "High blood pressure. That's it.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Is this Parkinson's? My father had it. Will I end up bedridden?",
        }
    };

    const TREMOR_LEWY = {
        meta: { caseId: "tremor-lewy-body", patientName: "Margaret Anderson", age: 75, diagnosis: "Lewy body dementia" },
        responses: {
            "hello|hi": "*appears confused, mild tremor* Hello... who are you again?",
            "what brings you in|chief complaint": "*husband* She's having hallucinations. Sees people who aren't there. Memory is bad. Movements are slow.",
            "when|how long": "*husband* Getting worse over the past year. The hallucinations started 6 months ago.",
            "hallucinations|seeing things": "*husband* She sees children in the house. Talks to them. They're not there.",
            "describe|what does she see": "*husband* Kids mostly. Sometimes her deceased mother. Very detailed.",
            "frightening|scared": "*husband* Not scared of them. Matter of fact about it.",
            "memory|cognitive": "*husband* Memory is bad. Fluctuates. Some days better than others.",
            "fluctuating|good days bad days": "*husband* Yes, hour to hour even. Alert then suddenly confused.",
            "movement|tremor": "*husband* Moves slowly. Shuffles. Tremor in her hand. Like Parkinson's.",
            "sleep|rem|acting out": "*husband* Acts out dreams violently. For years before this started.",
            "falls": "*husband* Fallen several times. Gets stiff and falls over.",
            "sensitivity|medications": "*husband* ER gave her something for agitation once. She got much worse.",
            "what medication": "*husband* Haldol I think. She became rigid, couldn't move.",
            "delusions|beliefs": "*husband* Sometimes thinks I'm an imposter. Accuses me of things.",
            "depression": "*husband* She seems depressed at times.",
            "*patient*|mrs anderson": "*patient* The children were just here. Where did they go? *looks around confused*",
            "medical history": "*husband* High blood pressure. Arthritis.",
            "medications": "*husband* Lisinopril. Tylenol for joints.",
            "allergies": "*husband* The Haldol - but that might not be an allergy, just made her worse.",
            "worried about|concerns": "*husband* Is this Alzheimer's? Or something else? She seems different from my mother who had Alzheimer's.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['skin-rash-contact'] = SKIN_RASH_CONTACT;
    window.COMPREHENSIVE_PATIENT_RESPONSES['red-eye-conjunctivitis'] = RED_EYE_CONJUNCTIVITIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['red-eye-glaucoma'] = RED_EYE_GLAUCOMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['vision-changes-crao'] = VISION_CRAO;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tremor-parkinsons'] = TREMOR_PARKINSONS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tremor-lewy-body'] = TREMOR_LEWY;
    
    console.log('ReasonDx Part 36 (Contact Derm, Conjunctivitis, Glaucoma, CRAO, Parkinsons, Lewy Body) loaded');

})();
