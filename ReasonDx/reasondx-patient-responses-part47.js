/**
 * ReasonDx Part 47: More Clinical Cases
 * Cases: chronic-fatigue-anemia, college-runner-fatigue, ischemic-colitis, post-contrast-crisis, post-transfusion-fever, immunosuppressed-gi-crisis
 */
(function() {
    'use strict';

    const CHRONIC_FATIGUE = {
        meta: { caseId: "chronic-fatigue-anemia", patientName: "Jennifer Walsh", age: 42, diagnosis: "Chronic fatigue with anemia" },
        responses: {
            "hello|hi": "*appears tired, pale* Hi doctor. I'm just exhausted all the time.",
            "what brings you in|chief complaint": "Exhausted for months. No energy. Short of breath with activity. Labs showed low blood count.",
            "when|how long": "Tired for 6 months at least. Getting worse.",
            "describe|fatigue": "Bone-tired. Sleep 10 hours, still exhausted. Can't do what I used to.",
            "shortness of breath": "Winded going up stairs. Didn't used to be.",
            "dizziness": "Lightheaded when I stand up fast.",
            "pale|skin": "People say I look pale. Washed out.",
            "palpitations": "Heart races sometimes. With activity.",
            "headache": "Headaches more often.",
            "hemoglobin|labs": "Doctor said hemoglobin was 9. Should be higher.",
            "periods|menstrual": "Heavy periods. Always have been. Clots, many pads.",
            "duration|how many days": "8-9 days. Heavy for 5 of those.",
            "bleeding|other": "Just the periods. No other bleeding.",
            "diet|eating": "Eat pretty well. Some red meat. Vegetables.",
            "vegetarian": "No, I eat meat.",
            "gi symptoms|blood in stool": "No blood in stool that I've seen.",
            "weight|appetite": "Appetite is down. Lost a few pounds.",
            "thyroid|tested": "Thyroid was checked. They said it was normal.",
            "medical history": "Heavy periods. That's it.",
            "fibroids|told": "They mentioned fibroids once. Supposed to follow up.",
            "medications": "Multivitamin. Iron sometimes but it upsets my stomach.",
            "allergies": "None.",
            "sexually active": "Yes, husband.",
            "worried about|concerns": "Why am I so tired? Is the anemia causing it?",
        }
    };

    const COLLEGE_RUNNER = {
        meta: { caseId: "college-runner-fatigue", patientName: "Megan Foster", age: 20, diagnosis: "Female athlete triad" },
        responses: {
            "hello|hi": "Hi. Coach sent me. Said I'm not performing well. Always tired.",
            "what brings you in|chief complaint": "Exhausted. Times are slowing. Had a stress fracture. Coach is worried.",
            "when|how long": "Tired for months. Getting worse this season.",
            "performance|running": "Times are slower. Was one of the best, now struggling to keep up.",
            "stress fracture|injury": "Fractured my shin bone. Stress fracture. Had to stop running for 8 weeks.",
            "previous injuries": "Second stress fracture this year. First was my foot.",
            "periods|menstrual": "Haven't had a period in... maybe 6 months.",
            "when regular|before": "Used to be regular in high school. Stopped when I started running more.",
            "think|normal": "Thought it was normal for athletes. Easier actually.",
            "eating|diet": "I watch what I eat. Careful about weight.",
            "describe diet|what do you eat": "Low fat, low carb. Small portions. Team is competitive.",
            "calories|how much": "Try to keep it around 1200. Sometimes less.",
            "weight|lost": "Lost 15 pounds since starting college.",
            "current weight|height": "110 pounds. 5'6\".",
            "bmi|concern": "Coach said I look too thin.",
            "exercise|training": "Run 50-60 miles a week. Strength training. Abs work.",
            "restrict|binge|purge": "Don't purge. Just don't eat much.",
            "cold|temperature": "Always cold. Wear layers.",
            "hair|skin|nails": "Hair is falling out more. Nails are brittle.",
            "mood|energy": "Low energy. Moody. Hard to concentrate.",
            "medical history": "Nothing before this.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Why do I keep getting stress fractures? Will my period come back?",
        }
    };

    const ISCHEMIC_COLITIS = {
        meta: { caseId: "ischemic-colitis", patientName: "Dorothy Miller", age: 72, diagnosis: "Ischemic colitis" },
        responses: {
            "hello|hi": "*appears uncomfortable* Hi. Having bad stomach cramps and bloody diarrhea.",
            "what brings you in|chief complaint": "Sudden crampy abdominal pain, then bloody diarrhea. Started last night.",
            "when|how long": "Started maybe 12 hours ago. Sudden.",
            "pain|describe": "Crampy. Left side of belly. Comes and goes with the urge to go.",
            "location|where": "Left lower side mostly.",
            "diarrhea|describe": "Diarrhea with bright red blood mixed in.",
            "how much blood": "Quite a bit. Scared me.",
            "frequency": "Maybe 8 times since last night.",
            "fever": "No fever.",
            "nausea|vomiting": "Nauseous. Didn't vomit.",
            "trigger|before": "Was fine before. Happened suddenly.",
            "similar|happened before": "Never had this before.",
            "vascular|heart history": "Heart problems. Had a stent. Peripheral artery disease.",
            "afib|arrhythmia": "Have atrial fibrillation. On blood thinners.",
            "blood thinners|which": "Warfarin. Keeps going up and down.",
            "clots|history": "No blood clots. Just the heart stuff.",
            "surgery|abdominal": "Had my gallbladder out years ago.",
            "medications": "Warfarin, metoprolol, lisinopril, atorvastatin, aspirin.",
            "nsaids|other": "Was taking ibuprofen for knee pain. A lot of it.",
            "how much ibuprofen": "800 three times a day for a week.",
            "medical history": "Heart disease, atrial fibrillation, high blood pressure, PAD.",
            "allergies": "Penicillin.",
            "worried about|concerns": "Is this serious? Why am I bleeding?",
        }
    };

    const POST_CONTRAST = {
        meta: { caseId: "post-contrast-crisis", patientName: "Richard Brown", age: 65, diagnosis: "Contrast-induced reaction" },
        responses: {
            "hello|hi": "*flushed, anxious, mild wheezing* Something's wrong... just had a scan...",
            "what brings you in|chief complaint": "Just had CT with dye. Now I feel terrible. Itchy, hot, hard to breathe.",
            "when|how long": "Just 10 minutes ago. Had the CT scan. Getting worse.",
            "describe|symptoms": "Itchy all over. Flushed. Throat feels tight. Wheezy.",
            "contrast|scan|what for": "CT of my belly. Looking for something. They injected dye.",
            "previous contrast|before": "Had contrast before. Fine then. Maybe some hives once.",
            "hives|rash": "Hives breaking out. All over.",
            "breathing|describe": "Chest tight. Wheezy. Harder to breathe.",
            "throat|swelling": "Throat feels thick. Hard to swallow.",
            "lightheaded|bp": "Feeling faint. Dizzy.",
            "nausea": "Very nauseous.",
            "premedicated|steroids": "They asked if I had reactions before. I said just mild hives. They didn't give me anything.",
            "allergies|previous": "Had hives with CT dye before. Also allergic to shellfish.",
            "shellfish|iodine": "Yes, allergic to shrimp. Bad reaction.",
            "medical history": "Kidney disease, diabetes, shellfish allergy.",
            "kidney|renal": "Kidney function is reduced. They know about it.",
            "medications": "Metformin, lisinopril, insulin.",
            "allergies|meds": "Shellfish. Maybe iodine? Not sure.",
            "worried about|concerns": "Am I having anaphylaxis? I can't breathe well.",
        }
    };

    const POST_TRANSFUSION = {
        meta: { caseId: "post-transfusion-fever", patientName: "Helen Anderson", age: 68, diagnosis: "Transfusion reaction" },
        responses: {
            "hello|hi": "*shivering, febrile* I'm getting the shakes... just got blood...",
            "what brings you in|chief complaint": "*nurse* She's 30 minutes into transfusion and spiked a fever. Chills. We stopped the blood.",
            "when|how long|during transfusion": "*nurse* About 30 minutes in. Was fine, then suddenly rigors.",
            "fever|temperature": "*nurse* Temp went from 98.6 to 102 in 15 minutes.",
            "chills|rigors": "*shaking* Can't stop shaking. Teeth chattering.",
            "how do you feel|patient": "Terrible. Shaking. Headache. Back hurts.",
            "back pain|flank": "Yes, low back pain. Dull ache.",
            "shortness of breath": "A little hard to breathe. Not terrible.",
            "chest pain": "Chest feels a little tight.",
            "nausea": "Nauseous. Haven't vomited.",
            "urine|color": "Haven't peed yet. Feel like I need to.",
            "rash|hives": "*nurse* No rash visible. No hives.",
            "blood pressure|vitals": "*nurse* BP dropped from 130/80 to 100/60.",
            "blood|transfusion why": "*nurse* She's here for chemotherapy. Anemic. Getting packed red cells.",
            "previous transfusions|before": "Had blood before. Once I had some shakes but not this bad.",
            "blood type|crossmatch": "*nurse* Type A positive. Blood was crossmatched. Seemed compatible.",
            "cancer|diagnosis": "Lymphoma. On chemotherapy.",
            "medical history": "Lymphoma. Diabetes. High blood pressure.",
            "medications": "Chemo drugs, metformin, lisinopril.",
            "allergies": "None known.",
            "worried about|concerns": "Is this a bad reaction? Am I going to be okay?",
        }
    };

    const IMMUNOSUPPRESSED_GI = {
        meta: { caseId: "immunosuppressed-gi-crisis", patientName: "Michael Roberts", age: 55, diagnosis: "CMV colitis in immunocompromised patient" },
        responses: {
            "hello|hi": "*appears cachectic, ill* Hi... very sick... diarrhea won't stop...",
            "what brings you in|chief complaint": "Severe diarrhea, fever, weight loss. I'm on immunosuppression for transplant.",
            "when|how long": "Diarrhea for 2 weeks. Getting worse. Fever for a week.",
            "diarrhea|describe": "Watery, bloody. 15-20 times a day.",
            "blood|amount": "Blood mixed in. Getting more.",
            "fever|temperature": "Fevers every day. 101-102.",
            "weight|lost": "Lost 15 pounds in 2 weeks.",
            "abdominal pain": "Cramps all over. Bad pain.",
            "nausea|vomiting": "Nauseous. Threw up a few times.",
            "appetite": "Can't eat. Nothing sounds good.",
            "transplant|what kind": "Kidney transplant. 6 months ago.",
            "immunosuppression|medications": "Tacrolimus, mycophenolate, prednisone.",
            "levels|therapeutic": "Tacrolimus was checked. Said level was therapeutic.",
            "rejection|concern": "Kidney is working okay. They checked.",
            "cmv|status": "I was CMV negative. Donor was positive. They mentioned watching for it.",
            "prophylaxis|valganciclovir": "Was on valganciclovir. Stopped it a month ago per schedule.",
            "other infections|opportunistic": "Haven't had any infections since transplant until now.",
            "dehydration|output": "Can't stay hydrated. IV fluids help temporarily.",
            "medical history": "Kidney failure, transplant, high blood pressure, diabetes.",
            "allergies": "Sulfa drugs.",
            "worried about|concerns": "Is this CMV? Is my transplant okay? I can't lose this kidney.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['chronic-fatigue-anemia'] = CHRONIC_FATIGUE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['college-runner-fatigue'] = COLLEGE_RUNNER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-athlete-triad'] = COLLEGE_RUNNER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ischemic-colitis'] = ISCHEMIC_COLITIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['post-contrast-crisis'] = POST_CONTRAST;
    window.COMPREHENSIVE_PATIENT_RESPONSES['post-transfusion-fever'] = POST_TRANSFUSION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['immunosuppressed-gi-crisis'] = IMMUNOSUPPRESSED_GI;
    
    console.log('ReasonDx Part 47 (Fatigue, Runner, Ischemic Colitis, Post-Contrast, Transfusion, Immunosuppressed GI) loaded');

})();
