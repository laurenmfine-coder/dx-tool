// Deep Dive Batch Generator - Part 2
const fs = require('fs');
const path = require('path');

const DD_DIR = '/home/claude/DxSuite/ReasonDx/data/deep-dives';

const deepDives = [
    {
        id: "febrile-seizure-deep-dive",
        title: "Febrile Seizures",
        version: "1.0",
        totalQuestions: 14,
        estimatedTime: "25 minutes",
        difficulty: "Intermediate",
        targetAudience: "Medical Students, Pediatric Residents",
        objectives: [
            "Distinguish simple from complex febrile seizures",
            "Understand when LP is indicated",
            "Counsel families on recurrence risk and prognosis",
            "Recognize when anticonvulsant therapy is indicated"
        ],
        vignette: {
            text: "An 18-month-old boy is brought to the ED after a witnessed seizure at home. His mother reports he had 2 days of rhinorrhea and cough, then developed fever to 103°F this morning. Shortly after, he had a generalized shaking episode lasting ~2 minutes with post-ictal drowsiness. He is now alert and interactive.\n\nPast Medical History: Full-term, normal development, no prior seizures\nVaccinations: Up to date\nFamily History: Father had febrile seizures as a child",
            physicalExam: {
                general: "Alert, interactive, non-toxic appearing",
                vitals: { Temp: "102.4°F (39.1°C)", HR: "130 bpm", RR: "28/min", SpO2: "99% RA" },
                HEENT: "TMs clear bilaterally, pharynx mildly erythematous, rhinorrhea",
                neurologic: "Alert, normal tone, moving all extremities equally, no meningismus"
            }
        },
        sections: [
            {
                title: "Classification",
                questions: [
                    { id: 1, type: "multiple_choice", question: "Which features define a SIMPLE febrile seizure?", options: ["Generalized, <15 min, single episode in 24h, age 6mo-5yr", "Focal onset, any duration", "Multiple seizures in 24 hours", "Occurs with afebrile illness"], correctAnswer: 0, explanation: "Simple febrile seizure: generalized, <15 minutes, does not recur within 24 hours, in child 6 months to 5 years without underlying neurologic disease." },
                    { id: 2, type: "multiple_choice", question: "This child's seizure is classified as:", options: ["Simple febrile seizure", "Complex febrile seizure", "Epilepsy", "Status epilepticus"], correctAnswer: 0, explanation: "This was generalized, lasted 2 minutes (<15), single episode, in appropriate age range with fever from viral URI = simple febrile seizure." }
                ]
            },
            {
                title: "Workup",
                questions: [
                    { id: 3, type: "multiple_choice", question: "When is LP indicated for febrile seizure?", options: ["All febrile seizures", "Complex febrile seizure only", "Signs of meningitis or unvaccinated/partially vaccinated child", "Never - clinical diagnosis"], correctAnswer: 2, explanation: "LP is indicated when there are signs of meningitis (meningismus, toxic appearance, prolonged AMS) or in unvaccinated/partially vaccinated children where meningitis cannot be clinically excluded." }
                ]
            },
            {
                title: "Management & Counseling",
                questions: [
                    { id: 4, type: "multiple_choice", question: "What is the recurrence risk after a first simple febrile seizure?", options: ["5%", "15%", "30-35%", "60%"], correctAnswer: 2, explanation: "Recurrence risk is ~30-35% overall. Risk factors for recurrence: young age at first seizure (<15 months), family history, low-grade fever at seizure, brief duration of fever before seizure." },
                    { id: 5, type: "multiple_choice", question: "What should parents be told about epilepsy risk?", options: ["50% will develop epilepsy", "Risk is slightly elevated (~2-4%) vs general population (1%)", "No increased risk", "Anticonvulsants prevent epilepsy"], correctAnswer: 1, explanation: "Simple febrile seizures carry only slightly increased epilepsy risk (2-4% vs 1% general population). Complex febrile seizures have higher risk (~6-8%). Prophylactic anticonvulsants do NOT prevent later epilepsy." }
                ]
            }
        ],
        keyTakeaways: [
            "Simple FS: generalized, <15 min, single in 24h, age 6mo-5yr",
            "Complex FS: focal, >15 min, recurrent in 24h, or abnormal neuro exam",
            "LP if signs of meningitis or inadequate vaccination",
            "Recurrence ~30-35%; epilepsy risk only slightly elevated",
            "Prophylactic anticonvulsants NOT routinely recommended"
        ]
    },
    {
        id: "dvt-deep-dive",
        title: "Deep Vein Thrombosis",
        version: "1.0",
        totalQuestions: 16,
        estimatedTime: "28 minutes",
        difficulty: "Intermediate",
        targetAudience: "Medical Students, Internal Medicine Residents",
        objectives: [
            "Apply Wells criteria for DVT probability assessment",
            "Interpret D-dimer in clinical context",
            "Select appropriate anticoagulation therapy",
            "Recognize indications for IVC filter"
        ],
        vignette: {
            text: "A 58-year-old woman presents with 3 days of left leg swelling and pain. She had knee replacement surgery 3 weeks ago. She has been less active since surgery.\n\nPast Medical History: Osteoarthritis, Hypertension\nMedications: Lisinopril 10mg daily, was on enoxaparin post-op but stopped 1 week ago\nSocial History: Non-smoker, no recent travel",
            physicalExam: {
                general: "Comfortable at rest",
                vitals: { BP: "138/84 mmHg", HR: "88 bpm", RR: "16/min", Temp: "98.6°F", SpO2: "98% RA" },
                extremities: "Left leg: 3 cm larger circumference than right at calf, warmth, mild erythema, tenderness along deep veins, no cords palpable. Right leg normal."
            }
        },
        sections: [
            {
                title: "Diagnosis",
                questions: [
                    { id: 1, type: "multiple_choice", question: "Calculate this patient's Wells score for DVT:", options: ["1 point (low probability)", "3 points (moderate probability)", "4+ points (high probability)", "0 points"], correctAnswer: 2, explanation: "Wells criteria: Recent surgery +1, Localized tenderness +1, Entire leg swollen +1, Calf >3cm difference +1, Pitting edema +1 = 5 points (high probability). Alternative diagnosis less likely adds +1 if applicable." },
                    { id: 2, type: "multiple_choice", question: "With high Wells score, what is the next step?", options: ["D-dimer to rule out", "Compression ultrasound", "Empiric anticoagulation only", "CT venography"], correctAnswer: 1, explanation: "High probability Wells → go directly to compression ultrasound. D-dimer is only useful to rule out DVT in LOW probability patients. High probability needs imaging regardless of D-dimer." }
                ]
            },
            {
                title: "Treatment",
                questions: [
                    { id: 3, type: "multiple_choice", question: "What is appropriate initial anticoagulation for acute proximal DVT?", options: ["Warfarin alone", "DOAC (rivaroxaban or apixaban)", "Aspirin", "IVC filter"], correctAnswer: 1, explanation: "DOACs (rivaroxaban, apixaban) are first-line for most patients with acute DVT. Can be started without bridging (unlike warfarin). Exceptions: cancer (LMWH preferred), renal failure, pregnancy." },
                    { id: 4, type: "multiple_choice", question: "Standard duration of anticoagulation for provoked DVT (surgery)?", options: ["2 weeks", "3 months", "6 months", "Lifelong"], correctAnswer: 1, explanation: "Provoked DVT (major transient risk factor like surgery) = 3 months. Unprovoked DVT = consider extended therapy. Cancer-associated = treat while cancer active. Recurrent unprovoked = usually lifelong." }
                ]
            }
        ],
        keyTakeaways: [
            "Wells score stratifies pre-test probability",
            "D-dimer useful only in LOW probability patients",
            "DOACs first-line for most acute DVT",
            "Duration: provoked = 3 months; unprovoked = consider extended",
            "IVC filter only if anticoagulation contraindicated"
        ]
    },
    {
        id: "acute-abdomen-deep-dive",
        title: "Acute Abdomen",
        version: "1.0",
        totalQuestions: 18,
        estimatedTime: "30 minutes",
        difficulty: "Intermediate-Advanced",
        targetAudience: "Medical Students, Surgery Residents",
        objectives: [
            "Develop systematic approach to acute abdominal pain",
            "Identify surgical emergencies requiring immediate intervention",
            "Correlate pain location with likely diagnoses",
            "Order appropriate imaging studies"
        ],
        vignette: {
            text: "A 65-year-old man presents with sudden onset severe abdominal pain that started 4 hours ago. The pain is diffuse and constant. He has vomited twice. He has history of atrial fibrillation and stopped his anticoagulation 2 weeks ago for a dental procedure.\n\nPast Medical History: Atrial fibrillation, Hypertension, Type 2 DM\nMedications: Metoprolol (stopped apixaban 2 weeks ago)",
            physicalExam: {
                general: "Appears very uncomfortable, diaphoretic",
                vitals: { BP: "158/95 mmHg", HR: "115 bpm irregular", RR: "24/min", Temp: "99.8°F" },
                abdomen: "Soft but diffusely tender, minimal guarding, bowel sounds present but hypoactive. Pain seems out of proportion to exam findings."
            }
        },
        sections: [
            {
                title: "Pattern Recognition",
                questions: [
                    { id: 1, type: "multiple_choice", question: "The finding of 'pain out of proportion to exam' in a patient with AFib off anticoagulation suggests:", options: ["Pancreatitis", "Small bowel obstruction", "Acute mesenteric ischemia", "Peptic ulcer disease"], correctAnswer: 2, explanation: "Pain out of proportion to physical exam + atrial fibrillation + off anticoagulation = think mesenteric ischemia until proven otherwise. Arterial embolism to SMA is classic presentation." },
                    { id: 2, type: "multiple_choice", question: "What is the most appropriate initial imaging?", options: ["Plain abdominal X-ray", "CT angiography of abdomen", "Ultrasound", "MRI"], correctAnswer: 1, explanation: "CTA is the gold standard for mesenteric ischemia. Shows arterial occlusion and bowel wall changes. Time is critical - bowel becomes necrotic within hours." }
                ]
            },
            {
                title: "Surgical Emergencies",
                questions: [
                    { id: 3, type: "multiple_choice", question: "Which finding mandates emergent surgery?", options: ["Elevated lipase", "Small bowel dilation on X-ray", "Pneumoperitoneum on imaging", "Elevated WBC"], correctAnswer: 2, explanation: "Free air (pneumoperitoneum) indicates perforated viscus - requires emergent laparotomy. Other causes of surgical abdomen: mesenteric ischemia with necrosis, ruptured AAA, bowel obstruction with strangulation." }
                ]
            }
        ],
        keyTakeaways: [
            "Pain out of proportion to exam = think ischemia",
            "Surgical emergencies: perforation, ischemia with necrosis, obstruction with strangulation",
            "CTA for suspected mesenteric ischemia",
            "Free air = emergent surgery",
            "AFib + abdominal pain + off anticoagulation = mesenteric ischemia until proven otherwise"
        ]
    },
    {
        id: "postpartum-hemorrhage-deep-dive",
        title: "Postpartum Hemorrhage",
        version: "1.0",
        totalQuestions: 14,
        estimatedTime: "25 minutes",
        difficulty: "Intermediate-Advanced",
        targetAudience: "Medical Students, OB/GYN Residents",
        objectives: [
            "Define PPH and recognize risk factors",
            "Apply the 4 T's framework for etiology",
            "Implement stepwise management algorithm",
            "Know when to escalate to surgical intervention"
        ],
        vignette: {
            text: "A 32-year-old G3P3 delivered vaginally 30 minutes ago after a prolonged labor with oxytocin augmentation. The placenta delivered intact. She is now having heavy vaginal bleeding and appears pale. Estimated blood loss is 800 mL and ongoing.\n\nDelivery History: Term infant, 4200g birth weight, prolonged second stage",
            physicalExam: {
                general: "Pale, anxious",
                vitals: { BP: "95/60 mmHg", HR: "118 bpm", RR: "22/min" },
                abdomen: "Uterus soft, boggy, fundus above umbilicus",
                vaginal: "Continued bleeding, no obvious lacerations on inspection"
            }
        },
        sections: [
            {
                title: "Diagnosis",
                questions: [
                    { id: 1, type: "multiple_choice", question: "What defines postpartum hemorrhage?", options: ["Any vaginal bleeding after delivery", ">500mL after vaginal delivery or >1000mL after cesarean", ">1000mL regardless of delivery type", ">250mL after vaginal delivery"], correctAnswer: 1, explanation: "Traditional definition: >500mL vaginal, >1000mL cesarean. Newer definition (ACOG): cumulative blood loss ≥1000mL with signs/symptoms of hypovolemia within 24h regardless of delivery route." },
                    { id: 2, type: "multiple_choice", question: "Using the 4 T's, what is the most likely cause in this patient?", options: ["Tissue (retained placenta)", "Tone (uterine atony)", "Trauma (lacerations)", "Thrombin (coagulopathy)"], correctAnswer: 1, explanation: "Boggy uterus = uterine atony (Tone). Risk factors present: prolonged labor, oxytocin use, macrosomia. Atony is the #1 cause of PPH (~80%)." }
                ]
            },
            {
                title: "Management",
                questions: [
                    { id: 3, type: "multiple_choice", question: "What is first-line treatment for uterine atony?", options: ["Blood transfusion", "Bimanual uterine massage + uterotonics", "Hysterectomy", "Uterine artery embolization"], correctAnswer: 1, explanation: "First-line: fundal massage + uterotonics (oxytocin, methylergonovine, carboprost, misoprostol). Bimanual compression while uterotonics take effect. Escalate if no response." },
                    { id: 4, type: "multiple_choice", question: "Which uterotonic is contraindicated in asthma?", options: ["Oxytocin", "Methylergonovine", "Carboprost (Hemabate)", "Misoprostol"], correctAnswer: 2, explanation: "Carboprost (15-methyl PGF2α) causes bronchospasm - contraindicated in asthma. Methylergonovine is contraindicated in hypertension. Know the contraindications!" }
                ]
            }
        ],
        keyTakeaways: [
            "4 T's: Tone (80%), Trauma, Tissue, Thrombin",
            "Atony: boggy uterus - treat with massage + uterotonics",
            "Carboprost contraindicated in asthma; methylergonovine in HTN",
            "Escalation: Bakri balloon → B-Lynch suture → uterine artery ligation/embolization → hysterectomy",
            "Massive transfusion protocol if ongoing hemorrhage"
        ]
    },
    {
        id: "spinal-cord-compression-deep-dive",
        title: "Spinal Cord Compression",
        version: "1.0",
        totalQuestions: 14,
        estimatedTime: "25 minutes",
        difficulty: "Intermediate-Advanced",
        targetAudience: "Medical Students, Emergency Medicine Residents",
        objectives: [
            "Recognize clinical presentation of cord compression",
            "Identify sensory level and its significance",
            "Understand urgency of diagnosis and treatment",
            "Know indications for emergent MRI and steroids"
        ],
        vignette: {
            text: "A 68-year-old man with history of prostate cancer (diagnosed 2 years ago) presents with 1 week of progressive back pain and 2 days of leg weakness. Today he noticed difficulty urinating. The pain is worse at night and with lying flat.\n\nPast Medical History: Prostate cancer (Gleason 8), treated with radiation",
            physicalExam: {
                general: "Uncomfortable, cannot lie flat due to pain",
                vitals: { BP: "148/88 mmHg", HR: "92 bpm" },
                neurologic: "Bilateral lower extremity weakness (3/5), decreased sensation below T10, absent ankle reflexes, decreased rectal tone",
                spine: "Midthoracic tenderness to palpation"
            }
        },
        sections: [
            {
                title: "Recognition",
                questions: [
                    { id: 1, type: "multiple_choice", question: "What triad suggests spinal cord compression?", options: ["Fever, neck stiffness, AMS", "Back pain, weakness, bladder dysfunction", "Headache, vision changes, papilledema", "Chest pain, dyspnea, leg swelling"], correctAnswer: 1, explanation: "Classic triad: back pain (often worse at night/supine) + progressive weakness + bladder/bowel dysfunction. In cancer patients with back pain, always consider cord compression." },
                    { id: 2, type: "multiple_choice", question: "What does the T10 sensory level indicate?", options: ["Cervical cord lesion", "Lesion at or above T10", "Peripheral neuropathy", "Cauda equina only"], correctAnswer: 1, explanation: "Sensory level indicates the level of cord involvement (lesion at or above that level). T10 = umbilicus level. The sensory level helps localize the lesion for imaging." }
                ]
            },
            {
                title: "Management",
                questions: [
                    { id: 3, type: "multiple_choice", question: "What is the diagnostic study of choice?", options: ["CT spine without contrast", "MRI entire spine with contrast", "X-ray spine", "Lumbar puncture"], correctAnswer: 1, explanation: "MRI of ENTIRE spine with contrast is gold standard. Must image entire spine as there may be multiple levels of disease (especially in metastatic cancer). Time is critical - ambulation at diagnosis predicts ambulation after treatment." },
                    { id: 4, type: "multiple_choice", question: "What is the role of dexamethasone?", options: ["No benefit", "Reduces edema and preserves neurologic function", "Only for infection", "Only post-operatively"], correctAnswer: 1, explanation: "High-dose dexamethasone (10mg IV then 4mg q6h) reduces vasogenic edema around the tumor, potentially preserving neurologic function. Give immediately if cord compression suspected (don't wait for MRI)." }
                ]
            }
        ],
        keyTakeaways: [
            "Triad: back pain (worse supine) + weakness + bladder/bowel dysfunction",
            "Sensory level localizes the lesion",
            "MRI entire spine with contrast - don't delay",
            "Dexamethasone immediately if suspected (don't wait for MRI)",
            "Prognosis depends on neuro function at diagnosis - TIME IS FUNCTION"
        ]
    }
];

deepDives.forEach(dd => {
    fs.writeFileSync(path.join(DD_DIR, `${dd.id}.json`), JSON.stringify(dd, null, 2));
    console.log(`Created: ${dd.id}.json`);
});

console.log(`\nGenerated ${deepDives.length} deep dive modules`);
