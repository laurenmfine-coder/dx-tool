/**
 * ReasonDx Part 34: More Clinical Cases
 * Cases: First Tri Bleeding, Prenatal Visit, Well Child 2mo, Hip Fracture, Inguinal Hernia, SBO
 */
(function() {
    'use strict';

    const FIRST_TRI_BLEEDING = {
        meta: { caseId: "first-tri-bleeding", patientName: "Amanda Garcia", age: 28, diagnosis: "First trimester bleeding" },
        responses: {
            "hello|hi": "*appears anxious* Hi. I'm pregnant and I'm bleeding. Please tell me I'm not losing the baby.",
            "what brings you in|chief complaint": "I'm 8 weeks pregnant and I started spotting yesterday. Now it's more. I'm terrified.",
            "when|how long": "Started yesterday as spotting. Heavier this morning.",
            "bleeding|how much": "Like a light period now. Soaking maybe 2 pads today.",
            "color": "Bright red. Was brown yesterday, now red.",
            "clots|tissue": "Small clots. Nothing that looked like tissue.",
            "cramping|pain": "Some cramping. Lower belly. Like period cramps.",
            "severity|pain": "Maybe 4 out of 10. Not terrible.",
            "pregnant|how far along": "8 weeks. Last period was 8 weeks ago.",
            "confirmed|positive test": "Home test 4 weeks ago. Confirmed at doctor 2 weeks ago.",
            "ultrasound|seen heartbeat": "Yes, saw heartbeat 2 weeks ago. They said everything looked normal.",
            "hcg|hormone levels": "They checked levels. Said they were good.",
            "previous pregnancies|history": "One miscarriage a year ago. At 6 weeks. This one got further.",
            "symptoms|pregnancy symptoms": "Nausea, breast tenderness. Still have them. Is that a good sign?",
            "fever": "No fever.",
            "dizziness|lightheaded": "A little lightheaded. Maybe from worry.",
            "intercourse|sex|trauma": "We had sex 2 days ago. Could that have caused it?",
            "medical history": "One miscarriage. Otherwise healthy.",
            "medications": "Prenatal vitamins. That's it.",
            "blood type|rh": "I'm A negative. They gave me a shot with my miscarriage.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Am I losing this baby? I can't go through that again.",
        }
    };

    const PRENATAL_VISIT = {
        meta: { caseId: "prenatal-visit", patientName: "Jennifer Lee", age: 30, diagnosis: "Routine prenatal visit" },
        responses: {
            "hello|hi": "Hi! I'm here for my prenatal checkup.",
            "what brings you in|chief complaint": "Regular prenatal visit. I'm 16 weeks pregnant. Everything has been going well.",
            "how far along": "16 weeks. Second trimester now.",
            "how are you feeling": "Pretty good actually. Morning sickness finally stopped.",
            "nausea|vomiting": "Had bad nausea first trimester. Gone now. Eating normally.",
            "energy|fatigue": "Energy is coming back. Not as tired.",
            "fetal movement|baby moving": "Think I felt something flutter yesterday. Can't be sure.",
            "bleeding|spotting": "No bleeding. Nothing.",
            "discharge": "Normal discharge. Nothing unusual.",
            "cramping|contractions": "Occasional round ligament pain. No cramping.",
            "headaches": "No headaches.",
            "swelling|edema": "No swelling yet.",
            "urinary|burning": "Peeing a lot but no burning.",
            "previous ultrasound|results": "Ultrasound at 12 weeks. Everything looked normal. Baby measured right.",
            "genetic testing|screening": "Did the NIPT test. Came back low risk for everything.",
            "first pregnancy": "Second pregnancy. Have a 3-year-old. Normal pregnancy and delivery.",
            "complications|previous": "No complications with my first. Vaginal delivery.",
            "blood pressure|check": "It's always been normal.",
            "weight|gaining": "Gained about 6 pounds so far. Is that okay?",
            "diet|eating": "Eating well. Taking prenatals. Avoiding the no-no foods.",
            "exercise": "Walking. Some prenatal yoga.",
            "work": "Working full time. Desk job. No problems.",
            "medical history": "Healthy. No conditions.",
            "medications": "Just prenatal vitamins.",
            "allergies": "No allergies.",
            "questions|concerns": "When do we do the anatomy scan? And am I on track with weight gain?",
        }
    };

    const WELL_CHILD_2MO = {
        meta: { caseId: "well-child-2mo", patientName: "Baby Emma Johnson", age: 0.17, diagnosis: "2-month well child visit" },
        responses: {
            "hello|hi": "*mother* Hi! Here for Emma's 2-month checkup.",
            "what brings you in|chief complaint": "*mother* Regular well-baby visit. She's 2 months old. Here for her shots.",
            "how is she doing": "*mother* She's doing great! Sleeping better. Eating well.",
            "feeding|eating|how much": "*mother* Breastfeeding. Eats every 2-3 hours. Good latch.",
            "breast or bottle": "*mother* Exclusively breastfeeding so far.",
            "wet diapers|urine": "*mother* 6-8 wet diapers a day.",
            "stool|pooping": "*mother* Poops daily. Yellow, seedy. Normal for breastfed baby I think.",
            "sleeping|how much": "*mother* Sleeping 4-hour stretches at night now. Naps during the day.",
            "where does she sleep": "*mother* Bassinet in our room. On her back.",
            "developmental|milestones": "*mother* She smiles at me now! Follows objects. Holds her head up a little.",
            "social smile": "*mother* Yes! Started smiling at 6 weeks. Melts my heart.",
            "concerns|worries": "*mother* She seems gassy. Fussy in the evenings. Normal?",
            "colic|crying": "*mother* Some fussy periods but manageable. Usually in the evening.",
            "rash|skin": "*mother* A little baby acne on her face. Nothing else.",
            "fever|sick": "*mother* No fever. No illness.",
            "siblings|pets": "*mother* No siblings yet. We have a dog who ignores her.",
            "birth|delivery": "*mother* Vaginal delivery at 39 weeks. No complications. 7 lbs 8 oz.",
            "jaundice|bilirubin": "*mother* Mild jaundice that resolved. Didn't need treatment.",
            "mom|how is mom doing": "*mother* Tired but good. Happy. No depression symptoms.",
            "support|help": "*mother* My husband is very involved. My mom helps too.",
            "smoke|smoking": "*mother* No one smokes. Never around her.",
            "car seat|safety": "*mother* Rear-facing car seat. Always buckled.",
            "vaccines|shots": "*mother* Ready for her vaccines. What does she get today?",
            "concerns": "*mother* Is she gaining enough weight? And the evening fussiness - normal?",
        }
    };

    const HIP_FRACTURE = {
        meta: { caseId: "hip-fracture", patientName: "Gloria Martinez", age: 85, diagnosis: "Hip fracture" },
        responses: {
            "hello|hi": "*in pain, lying in bed* Oh... it hurts... my hip...",
            "what brings you in|chief complaint": "*daughter* She fell at home. Can't put weight on her leg. We think she broke her hip.",
            "what happened|describe": "*daughter* Found her on the kitchen floor. Was reaching for something and fell.",
            "when|how long ago": "*daughter* About 2 hours ago. Called 911 right away.",
            "hit head|head injury": "*daughter* She says no. Was awake the whole time.",
            "lost consciousness": "*daughter* No, she was calling for help.",
            "pain|where|describe": "*patient moans* Right hip... can't move my leg...",
            "move leg|can you": "*patient* No... it hurts too much. The leg looks twisted.",
            "other injuries": "*daughter* Just seems to be the hip. No other injuries.",
            "walking|before fall": "*daughter* She walks with a walker. Unsteady. This is her third fall this year.",
            "dizzy|lightheaded": "*patient* Maybe a little dizzy when I stood up...",
            "why fall|what happened": "*patient* I was reaching... lost my balance... everything happened fast...",
            "previous falls|history": "*daughter* Fell twice before this year. Didn't break anything those times.",
            "osteoporosis": "*daughter* Yes, she has osteoporosis. Takes medication for it.",
            "blood thinners": "*daughter* Yes, on Eliquis for her heart.",
            "medical history": "*daughter* Atrial fibrillation, high blood pressure, diabetes, osteoporosis, mild dementia.",
            "medications": "*daughter* Eliquis, metformin, lisinopril, metoprolol, alendronate, vitamin D.",
            "allergies": "*daughter* No allergies.",
            "baseline|before this": "*daughter* She lives in assisted living. Walks with walker. Needs help with some things.",
            "eating|drinking": "*daughter* Ate breakfast. Drinking okay.",
            "last time ate": "*daughter* Breakfast was about 3 hours ago.",
            "code status|wishes": "*daughter* She's DNR but wants treatment. Has healthcare proxy.",
            "worried about|concerns": "*daughter* Is she going to need surgery? She's 85. Is that safe?",
        }
    };

    const INGUINAL_HERNIA = {
        meta: { caseId: "inguinal-hernia", patientName: "Michael Thompson", age: 55, diagnosis: "Inguinal hernia" },
        responses: {
            "hello|hi": "Hi doctor. I have this bulge in my groin that's been bothering me.",
            "what brings you in|chief complaint": "A bulge in my right groin. Noticed it a few months ago. Getting bigger.",
            "when|how long": "First noticed maybe 3-4 months ago. It's definitely bigger now.",
            "where|location|point": "Right here in my groin. *points to right inguinal area* Near where my leg meets my body.",
            "describe|what does it look like": "A bulge. Like a small egg under the skin.",
            "when appears|constant": "Comes and goes. More noticeable when I stand or strain. Goes away when I lie down.",
            "push back|reducible": "Yes, I can push it back in. Then it pops out again.",
            "pain|discomfort": "Aching discomfort. Not terrible pain. More annoying. Worse after long days on my feet.",
            "worse|triggers": "Worse when I lift things. Cough. Strain. Standing long time.",
            "better": "Better when I lie down and push it back.",
            "size|getting bigger": "Yes, definitely bigger than when it started.",
            "work|occupation": "I work in a warehouse. Lots of lifting.",
            "lifting|heavy objects": "Lift heavy boxes all day. 50-100 pounds sometimes.",
            "bowel|constipation": "Sometimes constipated. Have to strain.",
            "urinary|trouble peeing": "Get up at night to pee. Prostate I think.",
            "cough|chronic cough": "I smoke. Have a cough.",
            "similar|other side": "No bulge on the left. Just the right.",
            "previous hernia|surgery": "Never had a hernia before. No abdominal surgery.",
            "medical history": "High blood pressure. Enlarged prostate. That's it.",
            "medications": "Lisinopril. Tamsulosin for prostate.",
            "smoking": "Half pack a day. I know I should quit.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "Do I need surgery? Can it get stuck? My neighbor had an emergency hernia surgery.",
        }
    };

    const SBO_CASE = {
        meta: { caseId: "sbo", patientName: "Richard Evans", age: 68, diagnosis: "Small bowel obstruction" },
        responses: {
            "hello|hi": "*appears very uncomfortable, distended abdomen* Please... something is very wrong...",
            "what brings you in|chief complaint": "Terrible cramping pain. Vomiting. My belly is swollen. Haven't passed gas in 2 days.",
            "when|how long": "Started 2 days ago. Crampy at first, now constant pain.",
            "pain|describe": "Crampy, comes in waves. Then constant now. All over my belly.",
            "severity|scale": "8 out of 10. Maybe 9 when it cramps.",
            "vomiting|how much": "Can't stop vomiting. Even bile now. Greenish stuff.",
            "how many times": "Lost count. Maybe 15-20 times in 2 days.",
            "bowel movement|last bm": "No bowel movement in 2 days. No gas either.",
            "gas|passing gas": "Nothing. Belly is bloated. Can't pass gas at all.",
            "distended|bloated": "Look at my belly. It's huge. Tight.",
            "eating|drinking": "Can't keep anything down.",
            "previous surgery|surgical history": "Had colon surgery 5 years ago for cancer. And appendix as a kid.",
            "adhesions|scar tissue": "They mentioned scar tissue could cause problems.",
            "happened before|previous obstruction": "Had a partial blockage 2 years ago. Resolved with tube. Didn't need surgery.",
            "hernia": "No hernia that I know of.",
            "cancer|recurrence": "Been cancer-free. Colonoscopies have been clear.",
            "fever": "Low grade. 100.2.",
            "urinating": "Not much. Dark urine.",
            "medical history": "Colon cancer - cured. High blood pressure. Diabetes.",
            "medications": "Metformin, lisinopril, aspirin.",
            "allergies": "Morphine - makes me itch.",
            "sexually active": "Not lately. Too sick.",
            "worried about|concerns": "Am I going to need surgery? Is my cancer back?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['first-tri-bleeding'] = FIRST_TRI_BLEEDING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['prenatal-visit'] = PRENATAL_VISIT;
    window.COMPREHENSIVE_PATIENT_RESPONSES['well-child-2mo'] = WELL_CHILD_2MO;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hip-fracture'] = HIP_FRACTURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['inguinal-hernia'] = INGUINAL_HERNIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sbo'] = SBO_CASE;
    
    console.log('ReasonDx Part 34 (First Tri Bleeding, Prenatal, Well Child, Hip Fracture, Hernia, SBO) loaded');

})();
