// Deep Dive Batch Generator - Part 3
const fs = require('fs');
const DD_DIR = '/home/claude/DxSuite/ReasonDx/data/deep-dives';

const deepDives = [
    {
        id: "svt-wpw-deep-dive", title: "SVT & WPW Syndrome", version: "1.0", totalQuestions: 16,
        estimatedTime: "28 minutes", difficulty: "Intermediate", targetAudience: "Medical Students",
        objectives: ["Classify types of SVT", "Recognize WPW pattern on ECG", "Apply appropriate management"],
        vignette: { text: "A 28-year-old woman presents with sudden onset palpitations lasting 30 minutes. She feels lightheaded but denies chest pain or syncope.", physicalExam: { vitals: { HR: "180 bpm regular", BP: "110/70" } } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Narrow complex regular tachycardia at 180 bpm. Most likely?", options: ["Sinus tach", "AVNRT", "AFib", "VT"], correctAnswer: 1, explanation: "AVNRT is most common regular narrow complex SVT in young adults." }
        ]}],
        keyTakeaways: ["AVNRT most common SVT", "Delta wave = WPW", "Vagal maneuvers then adenosine for stable SVT", "Avoid AV nodal blockers in WPW with AFib"]
    },
    {
        id: "intussusception-deep-dive", title: "Intussusception", version: "1.0", totalQuestions: 12,
        estimatedTime: "20 minutes", difficulty: "Intermediate", targetAudience: "Medical Students, Pediatric Residents",
        objectives: ["Recognize classic presentation", "Understand diagnostic approach", "Know reduction methods"],
        vignette: { text: "A 9-month-old boy presents with intermittent crying episodes, drawing up legs, followed by lethargy. Parents note a bloody stool.", physicalExam: { abdomen: "Sausage-shaped mass in RUQ" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Classic triad of intussusception?", options: ["Fever, vomiting, diarrhea", "Colicky pain, vomiting, currant jelly stool", "Bilious vomiting, distension, obstipation", "RLQ pain, fever, anorexia"], correctAnswer: 1, explanation: "Colicky abdominal pain, vomiting, and currant jelly (bloody mucoid) stool. Full triad present in only 20%." }
        ]}],
        keyTakeaways: ["Peak age 6-36 months", "Ileocolic most common", "Target sign on US", "Air or contrast enema for reduction", "Surgery if peritonitis or failed reduction"]
    },
    {
        id: "pyloric-stenosis-deep-dive", title: "Pyloric Stenosis", version: "1.0", totalQuestions: 12,
        estimatedTime: "20 minutes", difficulty: "Intermediate", targetAudience: "Medical Students, Pediatric Residents",
        objectives: ["Identify classic presentation and timing", "Interpret electrolyte abnormalities", "Understand surgical management"],
        vignette: { text: "A 4-week-old firstborn male presents with non-bilious projectile vomiting after feeds for 5 days. He is hungry after vomiting. Weight has dropped from birth.", physicalExam: { abdomen: "Olive-shaped mass in epigastrium" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Classic electrolyte abnormality in pyloric stenosis?", options: ["Hyperkalemic metabolic acidosis", "Hypochloremic hypokalemic metabolic alkalosis", "Hypernatremic metabolic acidosis", "Normal electrolytes"], correctAnswer: 1, explanation: "Loss of gastric HCl causes hypochloremic metabolic alkalosis. Kidneys excrete K+ to retain H+, causing hypokalemia." }
        ]}],
        keyTakeaways: ["Age 2-8 weeks, firstborn males", "Non-bilious projectile vomiting, hungry after", "Hypochloremic hypokalemic metabolic alkalosis", "US: pyloric muscle >3mm thick, >15mm long", "Pyloromyotomy after fluid/electrolyte correction"]
    },
    {
        id: "bipolar-disorder-deep-dive", title: "Bipolar Disorder", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate", targetAudience: "Medical Students",
        objectives: ["Distinguish bipolar I from II", "Recognize manic episode criteria", "Select appropriate pharmacotherapy"],
        vignette: { text: "A 25-year-old man is brought by family for decreased sleep, rapid speech, and spending sprees over 5 days. He believes he will become a famous musician.", physicalExam: { psychiatric: "Euphoric mood, pressured speech, flight of ideas, grandiosity" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Minimum duration for manic episode?", options: ["2 days", "4 days", "7 days (or hospitalization)", "2 weeks"], correctAnswer: 2, explanation: "Mania requires ≥7 days (or any duration if hospitalization required). Hypomania = 4 days minimum." }
        ]}],
        keyTakeaways: ["Bipolar I = mania; Bipolar II = hypomania + depression", "DIGFAST for mania symptoms", "Mood stabilizers: lithium, valproate, lamotrigine", "Antidepressant monotherapy can trigger mania"]
    },
    {
        id: "psychosis-deep-dive", title: "Psychosis & Schizophrenia", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate", targetAudience: "Medical Students",
        objectives: ["Define psychosis and its features", "Apply diagnostic criteria for schizophrenia", "Understand antipsychotic mechanisms"],
        vignette: { text: "A 22-year-old college student is brought by roommates for 3 months of social withdrawal, talking to himself, and believing the government is monitoring him.", physicalExam: { psychiatric: "Flat affect, disorganized speech, auditory hallucinations" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Schizophrenia requires symptoms for at least?", options: ["1 month", "3 months", "6 months", "1 year"], correctAnswer: 2, explanation: "Schizophrenia requires 6 months of disturbance, with ≥1 month of active-phase symptoms (delusions, hallucinations, disorganized speech, etc.)." }
        ]}],
        keyTakeaways: ["Positive symptoms: hallucinations, delusions", "Negative symptoms: flat affect, avolition, alogia", "Schizophrenia: 6 months total, 1 month active", "Antipsychotics block D2 receptors"]
    },
    {
        id: "rheum-emergencies-deep-dive", title: "Rheumatologic Emergencies", version: "1.0", totalQuestions: 16,
        estimatedTime: "28 minutes", difficulty: "Advanced", targetAudience: "Medical Students, IM Residents",
        objectives: ["Recognize septic arthritis vs gout", "Identify scleroderma renal crisis", "Manage acute lupus flares"],
        vignette: { text: "A 45-year-old man with RA presents with acute hot, swollen knee. He is febrile.", physicalExam: { knee: "Warm, swollen, extremely painful with any movement" } },
        sections: [{ title: "Septic Arthritis", questions: [
            { id: 1, type: "mc", question: "Synovial WBC suggesting septic arthritis?", options: [">2,000", ">25,000", ">50,000", ">100,000"], correctAnswer: 2, explanation: ">50,000 WBC with >75% PMNs is highly suggestive of septic arthritis. Send for culture. Treat empirically while awaiting results." }
        ]}],
        keyTakeaways: ["Hot swollen joint = septic until proven otherwise", "Aspirate before antibiotics if possible", ">50k WBC with >75% PMNs suggests septic", "Scleroderma renal crisis: ACE inhibitors are treatment", "Lupus flare: high-dose steroids for major organ involvement"]
    },
    {
        id: "apap-overdose-deep-dive", title: "Acetaminophen Overdose", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate-Advanced", targetAudience: "Medical Students, EM Residents",
        objectives: ["Apply Rumack-Matthew nomogram", "Understand NAC mechanism and timing", "Recognize hepatotoxicity phases"],
        vignette: { text: "A 19-year-old woman presents 6 hours after intentional ingestion of 50 tablets of extra-strength Tylenol. She currently feels fine with mild nausea.", physicalExam: { general: "Alert, comfortable appearing", abdomen: "Soft, non-tender" } },
        sections: [{ title: "Treatment", questions: [
            { id: 1, type: "mc", question: "When is NAC most effective?", options: ["Within 2 hours", "Within 8 hours", "Within 24 hours", "Within 48 hours"], correctAnswer: 1, explanation: "NAC is nearly 100% effective when given within 8 hours of ingestion. Still beneficial beyond 8 hours but efficacy decreases." }
        ]}],
        keyTakeaways: ["May be asymptomatic early despite lethal dose", "Rumack-Matthew nomogram: single acute ingestion, known time", "NAC within 8 hours is ideal", "Four phases: GI symptoms → LFT rise → peak hepatotoxicity → recovery/death", "King's College Criteria for transplant consideration"]
    }
];

deepDives.forEach(dd => {
    fs.writeFileSync(`${DD_DIR}/${dd.id}.json`, JSON.stringify(dd, null, 2));
    console.log('Created: ' + dd.id + '.json');
});
console.log('\nGenerated ' + deepDives.length + ' deep dives');
