/**
 * ReasonDx Part 35: More Clinical Cases
 * Cases: Testicular Torsion, TIA, Anemia Workup, Acute Dyspnea, Back Pain Herniated Disc, Back Pain MSK
 */
(function() {
    'use strict';

    const TESTICULAR_TORSION = {
        meta: { caseId: "testicular-torsion", patientName: "Tyler Williams", age: 16, diagnosis: "Testicular torsion" },
        responses: {
            "hello|hi": "*in severe pain* It hurts so bad...",
            "what brings you in|chief complaint": "*father* Woke up screaming. Pain in left testicle.",
            "when|how long": "*father* Started 3 hours ago. Woke from sleep.",
            "pain|describe": "*patient* Worst pain ever. Sharp. Constant.",
            "where|which side": "*patient* Left one. Feels like it's twisting.",
            "nausea|vomiting": "*father* Threw up twice.",
            "trauma|injury": "*father* No injury.",
            "happened before": "*patient* Never.",
            "sexually active": "*patient* No.",
            "medical history": "*father* Healthy kid.",
            "allergies": "*father* None.",
            "worried about|concerns": "*father* Is he going to lose it?",
        }
    };

    const TIA_CASE = {
        meta: { caseId: "tia", patientName: "George Mitchell", age: 70, diagnosis: "TIA" },
        responses: {
            "hello|hi": "Hello doctor. Had a spell this morning. Feel fine now.",
            "what brings you in|chief complaint": "Arm went weak, couldn't talk right. Lasted 15 minutes then went away.",
            "when|how long": "4 hours ago. I'm fine now.",
            "describe|what happened": "Right arm felt heavy. Words came out jumbled.",
            "how long|duration": "Maybe 15 minutes. Then back to normal.",
            "face|droop": "Wife said face looked droopy.",
            "now|current": "Completely normal now. See? *demonstrates*",
            "similar|before": "Never. First time.",
            "medical history": "High BP, high cholesterol, diabetes, afib. Smoker.",
            "blood thinners": "Supposed to take Eliquis. Stopped 6 months ago.",
            "medications": "Lisinopril, metoprolol, atorvastatin, metformin.",
            "allergies": "None.",
            "worried about|concerns": "Am I going to have a stroke?",
        }
    };

    const ANEMIA_WORKUP = {
        meta: { caseId: "anemia-workup", patientName: "Patricia Davis", age: 58, diagnosis: "Anemia workup" },
        responses: {
            "hello|hi": "Hi. Blood test showed low hemoglobin. Sent to figure out why.",
            "what brings you in|chief complaint": "Anemia. Hemoglobin was 9. Been tired.",
            "symptoms|how feel": "Tired. Short of breath with stairs.",
            "bleeding|blood loss": "No obvious bleeding.",
            "periods|menstrual": "Post-menopausal 6 years.",
            "blood in stool": "Haven't noticed. Maybe darker?",
            "colonoscopy": "Never had one.",
            "nsaids|ibuprofen": "Ibuprofen daily for joints. 400mg twice daily.",
            "diet": "Eat well. Not vegetarian.",
            "family history|cancer": "Father had colon cancer at 62.",
            "medical history": "Arthritis, high BP, heartburn.",
            "medications": "Ibuprofen, lisinopril, omeprazole.",
            "allergies": "None.",
            "worried about|concerns": "Do I have cancer like my dad?",
        }
    };

    const ACUTE_DYSPNEA = {
        meta: { caseId: "acute-dyspnea", patientName: "Barbara Johnson", age: 72, diagnosis: "Acute dyspnea" },
        responses: {
            "hello|hi": "*labored breathing* Can't... breathe...",
            "what brings you in|chief complaint": "*gasping* Short of breath... came on today...",
            "when|how long": "Started this morning. Getting worse.",
            "describe": "Feel like suffocating. Can't get enough air.",
            "worse|triggers": "Worse with any movement.",
            "better|position": "Better sitting up. Can't lie down.",
            "chest pain": "Some pressure. Tight.",
            "cough": "Coughing. Pink sputum.",
            "leg swelling": "Legs swollen. Worse than usual.",
            "heart|history": "Heart failure for 3 years.",
            "medications|compliance": "Ran out of water pill 5 days ago.",
            "salt|diet": "Had Chinese food. Too much salt probably.",
            "medical history": "Heart failure, afib, high BP, diabetes.",
            "medications": "Metoprolol, lisinopril, Eliquis, metformin. Supposed to take furosemide.",
            "allergies": "Sulfa - rash.",
            "worried about|concerns": "Am I having a heart attack?",
        }
    };

    const BACK_PAIN_DISC = {
        meta: { caseId: "back-pain-herniated-disc", patientName: "Kevin Martin", age: 42, diagnosis: "Herniated disc" },
        responses: {
            "hello|hi": "*limping* My back is killing me and my leg is numb.",
            "what brings you in|chief complaint": "Low back pain shooting down left leg. Numbness in foot. After lifting.",
            "when|how long": "5 days ago. Lifting boxes at work.",
            "what happened": "Lifted heavy box, felt a pop. Pain shot down leg.",
            "pain|describe": "Deep aching back. Sharp with movement. Shoots down leg.",
            "leg|radiating": "Goes from back, down butt, down back of leg to calf.",
            "which leg": "Left.",
            "numbness|tingling": "Left foot numb. Tingling toes.",
            "weakness": "Leg feels weak.",
            "worse|triggers": "Worse sitting. Worse bending. Worse coughing.",
            "better|position": "Standing better. Lying on side okay.",
            "bowel|bladder": "Fine. No accidents.",
            "saddle numbness": "No groin numbness.",
            "previous back pain": "Had back pain before, never leg symptoms.",
            "tried|treatment": "Ibuprofen. Ice. Not helping.",
            "medical history": "Healthy otherwise.",
            "medications": "Just ibuprofen now.",
            "allergies": "None.",
            "work|job": "Warehouse. Lots of lifting.",
            "worried about|concerns": "Will I need surgery?",
        }
    };

    const BACK_PAIN_MSK = {
        meta: { caseId: "back-pain-msk", patientName: "Jennifer White", age: 35, diagnosis: "Mechanical low back pain" },
        responses: {
            "hello|hi": "Hi. My back has been hurting. Just won't go away.",
            "what brings you in|chief complaint": "Low back pain for 2 weeks. Aching in the middle. Started after gardening.",
            "when|how long": "2 weeks. After a weekend of yard work.",
            "what happened": "Lots of bending, digging. Overdid it.",
            "describe|pain": "Dull ache across low back. Gets tight.",
            "radiation|leg pain": "No leg pain. Stays in the back.",
            "numbness|tingling": "No numbness or tingling.",
            "weakness": "No weakness.",
            "worse|triggers": "Worse after sitting long time. Worse in morning.",
            "better|position": "Better with movement. Walking helps.",
            "severity": "4-5 out of 10. Annoying but manageable.",
            "bowel|bladder": "Normal.",
            "fever|weight loss": "No fever. No weight loss.",
            "previous back pain": "Had a few episodes before. Usually goes away.",
            "tried|treatment": "Heating pad. Stretching. Ibuprofen.",
            "work|job": "Office job. Sit at desk all day.",
            "exercise": "Don't exercise much. Should do more.",
            "medical history": "Nothing. Healthy.",
            "medications": "Just occasional ibuprofen.",
            "allergies": "None.",
            "sexually active": "Yes, husband.",
            "worried about|concerns": "Is something wrong with my spine? Need an MRI?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['testicular-torsion'] = TESTICULAR_TORSION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tia'] = TIA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['anemia-workup'] = ANEMIA_WORKUP;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-dyspnea'] = ACUTE_DYSPNEA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['back-pain-herniated-disc'] = BACK_PAIN_DISC;
    window.COMPREHENSIVE_PATIENT_RESPONSES['back-pain-msk'] = BACK_PAIN_MSK;
    
    console.log('ReasonDx Part 35 (Testicular Torsion, TIA, Anemia, Dyspnea, Back Pain) loaded');

})();
