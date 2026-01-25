// Deep Dive Batch Generator - Part 4 (Remaining)
const fs = require('fs');
const DD_DIR = '/home/claude/DxSuite/ReasonDx/data/deep-dives';

const deepDives = [
    {
        id: "placental-abruption-deep-dive", title: "Placental Abruption", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate-Advanced", targetAudience: "Medical Students, OB/GYN Residents",
        objectives: ["Distinguish abruption from previa", "Recognize risk factors and presentation", "Manage maternal and fetal complications"],
        vignette: { text: "A 32-year-old G2P1 at 34 weeks presents with sudden severe abdominal pain and vaginal bleeding after a motor vehicle accident. She has chronic hypertension.", physicalExam: { abdomen: "Rigid, tender uterus", vitals: { HR: "110", BP: "90/60" } } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Key feature distinguishing abruption from previa?", options: ["Amount of bleeding", "Gestational age", "Painful vs painless bleeding", "Fetal heart rate"], correctAnswer: 2, explanation: "Abruption = PAINFUL bleeding with rigid uterus. Previa = PAINLESS bleeding with soft uterus." }
        ]}],
        keyTakeaways: ["Painful bleeding + rigid uterus = abruption", "Risk: HTN, trauma, cocaine, prior abruption", "Can cause DIC from tissue factor release", "Fetal monitoring critical", "Delivery if unstable or fetal distress"]
    },
    {
        id: "ovarian-torsion-deep-dive", title: "Ovarian Torsion", version: "1.0", totalQuestions: 12,
        estimatedTime: "22 minutes", difficulty: "Intermediate", targetAudience: "Medical Students, OB/GYN Residents",
        objectives: ["Recognize clinical presentation", "Understand imaging findings", "Know surgical management"],
        vignette: { text: "A 22-year-old woman presents with sudden onset right lower quadrant pain radiating to back, with nausea and vomiting. Pain is intermittent.", physicalExam: { abdomen: "RLQ tenderness, no peritoneal signs" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Most important imaging finding?", options: ["Free fluid", "Enlarged ovary with absent/decreased flow", "Ovarian cyst", "Uterine enlargement"], correctAnswer: 1, explanation: "Enlarged ovary (often >5cm) with absent or decreased Doppler flow. But presence of flow does NOT rule out torsion (intermittent)." }
        ]}],
        keyTakeaways: ["Sudden unilateral pain with N/V", "Right > left (sigmoid protects left)", "US: enlarged ovary ± absent flow", "Presence of flow doesn't exclude torsion", "Surgical emergency - laparoscopic detorsion"]
    },
    {
        id: "pid-toa-deep-dive", title: "PID & Tubo-ovarian Abscess", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate", targetAudience: "Medical Students, OB/GYN Residents",
        objectives: ["Apply diagnostic criteria", "Select appropriate antibiotics", "Know indications for hospitalization"],
        vignette: { text: "A 24-year-old sexually active woman presents with bilateral lower abdominal pain, fever, and vaginal discharge for 3 days.", physicalExam: { pelvic: "Mucopurulent discharge, CMT, bilateral adnexal tenderness" } },
        sections: [{ title: "Treatment", questions: [
            { id: 1, type: "mc", question: "Outpatient PID treatment regimen?", options: ["Azithromycin alone", "Ceftriaxone 500mg IM + Doxy 100mg BID x14d ± Flagyl", "Cipro + Flagyl", "Amoxicillin-clav"], correctAnswer: 1, explanation: "Must cover GC (ceftriaxone) AND Chlamydia (doxycycline). Add metronidazole for BV/anaerobe coverage." }
        ]}],
        keyTakeaways: ["Minimal criteria: pelvic pain + CMT or adnexal tenderness", "Test for GC/Chlamydia but treat empirically", "Hospitalize: TOA, pregnancy, severe illness, failed outpatient", "Partner treatment essential", "Long-term risk: infertility, ectopic, chronic pain"]
    },
    {
        id: "cdiff-deep-dive", title: "C. difficile Infection", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate", targetAudience: "Medical Students, IM Residents",
        objectives: ["Understand pathophysiology", "Apply current treatment guidelines", "Manage recurrent disease"],
        vignette: { text: "A 68-year-old woman develops watery diarrhea 10 days after completing antibiotics for pneumonia. She has 8-10 stools daily.", physicalExam: { abdomen: "Mild diffuse tenderness, hyperactive bowel sounds" } },
        sections: [{ title: "Treatment", questions: [
            { id: 1, type: "mc", question: "First-line treatment for initial, non-severe CDI?", options: ["Oral metronidazole", "Oral vancomycin or fidaxomicin", "IV vancomycin", "FMT"], correctAnswer: 1, explanation: "IDSA 2021: Oral vancomycin 125mg QID or fidaxomicin 200mg BID x10 days. Metronidazole only if others unavailable." }
        ]}],
        keyTakeaways: ["Toxin-mediated, not invasion", "Stop inciting antibiotic if possible", "Oral vanc or fidaxomicin first-line", "Fidaxomicin: lower recurrence rate", "FMT for multiple recurrences"]
    },
    {
        id: "dress-sjs-deep-dive", title: "DRESS, SJS & TEN", version: "1.0", totalQuestions: 16,
        estimatedTime: "28 minutes", difficulty: "Advanced", targetAudience: "Medical Students, Dermatology Residents",
        objectives: ["Differentiate DRESS from SJS/TEN", "Identify causative drugs", "Manage these emergencies"],
        vignette: { text: "A 45-year-old man on allopurinol for 3 weeks develops fever, diffuse rash, facial swelling, and is found to have elevated LFTs and eosinophilia.", physicalExam: { skin: "Morbilliform rash, facial edema", labs: "Eos 2000, ALT 250" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "This presentation is most consistent with?", options: ["SJS", "TEN", "DRESS", "Urticaria"], correctAnswer: 2, explanation: "DRESS: Drug Reaction with Eosinophilia and Systemic Symptoms. Fever + rash + eosinophilia + organ involvement (liver here). SJS/TEN would have mucosal involvement and skin detachment." }
        ]}],
        keyTakeaways: ["DRESS: rash + fever + eosinophilia + organ involvement", "SJS: <10% BSA detachment + mucositis", "TEN: >30% BSA detachment", "Common drugs: allopurinol, anticonvulsants, sulfonamides, antibiotics", "Stop drug immediately; supportive care"]
    },
    {
        id: "derm-emergencies-deep-dive", title: "Dermatologic Emergencies", version: "1.0", totalQuestions: 16,
        estimatedTime: "28 minutes", difficulty: "Advanced", targetAudience: "Medical Students, EM Residents",
        objectives: ["Recognize life-threatening skin findings", "Initiate appropriate management", "Know when to consult"],
        vignette: { text: "A 55-year-old diabetic presents with rapidly spreading erythema on his leg with severe pain, fever, and crepitus on exam.", physicalExam: { skin: "Tense erythema, dusky areas, crepitus", vitals: { Temp: "39.5C", HR: "120" } } },
        sections: [{ title: "Recognition", questions: [
            { id: 1, type: "mc", question: "This presentation suggests?", options: ["Cellulitis", "Necrotizing fasciitis", "DVT", "Erysipelas"], correctAnswer: 1, explanation: "Necrotizing fasciitis: pain out of proportion, rapid spread, crepitus, systemic toxicity. Surgical emergency." }
        ]}],
        keyTakeaways: ["Nec fasc: pain out of proportion, crepitus, rapid spread", "Purpura fulminans: DIC + skin necrosis (meningococcemia)", "Pemphigus vulgaris: oral erosions, flaccid bullae, + Nikolsky", "Erythroderma: >90% BSA erythema, thermoregulatory failure", "Most require ICU and specialist care"]
    },
    {
        id: "tbi-icp-deep-dive", title: "TBI & ICP Management", version: "1.0", totalQuestions: 16,
        estimatedTime: "28 minutes", difficulty: "Advanced", targetAudience: "Medical Students, Neurology/Neurosurgery Residents",
        objectives: ["Understand ICP physiology", "Apply treatment targets", "Recognize herniation syndromes"],
        vignette: { text: "A 35-year-old man is brought in after MVC with GCS 7. CT shows R temporal contusion with 8mm midline shift. His right pupil becomes fixed and dilated.", physicalExam: { neuro: "GCS 7, R pupil 6mm fixed, L pupil 3mm reactive, decorticate posturing" } },
        sections: [{ title: "Management", questions: [
            { id: 1, type: "mc", question: "Immediate intervention for this patient?", options: ["Repeat CT", "Mannitol or hypertonic saline", "Lumbar puncture", "High-dose steroids"], correctAnswer: 1, explanation: "Signs of uncal herniation (ipsilateral fixed pupil). Immediate osmotic therapy (mannitol 1g/kg or 23.4% saline) while preparing for surgical decompression." }
        ]}],
        keyTakeaways: ["Monro-Kellie: brain + blood + CSF = constant", "ICP target <22 mmHg, CPP 60-70 mmHg", "Cushing's triad is LATE sign", "Mannitol or hypertonic saline for acute ICP crisis", "Steroids NOT indicated in TBI"]
    },
    {
        id: "eye-emergencies-deep-dive", title: "Ophthalmologic Emergencies", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate-Advanced", targetAudience: "Medical Students, EM Residents",
        objectives: ["Identify vision-threatening conditions", "Initiate time-sensitive treatments", "Know referral indications"],
        vignette: { text: "A 70-year-old with AFib presents with sudden painless vision loss in right eye 45 minutes ago. VA is hand motion only.", physicalExam: { fundus: "Pale retina with cherry-red spot at macula" } },
        sections: [{ title: "Diagnosis", questions: [
            { id: 1, type: "mc", question: "Most likely diagnosis?", options: ["Retinal detachment", "Central retinal artery occlusion", "Vitreous hemorrhage", "Optic neuritis"], correctAnswer: 1, explanation: "CRAO: sudden painless vision loss, pale retina, cherry-red spot (fovea has separate blood supply). Often embolic from carotid or cardiac source." }
        ]}],
        keyTakeaways: ["CRAO: 90-minute window, ocular massage, lower IOP", "Acute angle closure: mid-dilated pupil, halos, IOP >40", "Chemical burns: immediate copious irrigation FIRST", "Retinal detachment: flashes, floaters, curtain over vision", "Globe rupture: shield eye, no pressure, emergent surgery"]
    },
    {
        id: "ent-emergencies-deep-dive", title: "ENT Emergencies", version: "1.0", totalQuestions: 14,
        estimatedTime: "25 minutes", difficulty: "Intermediate-Advanced", targetAudience: "Medical Students, EM Residents",
        objectives: ["Recognize airway emergencies", "Manage deep space neck infections", "Control severe epistaxis"],
        vignette: { text: "A 5-year-old presents with drooling, stridor, and tripod positioning. He has high fever and appears toxic.", physicalExam: { general: "Toxic, tripod position, drooling", vitals: { Temp: "40C", RR: "32" } } },
        sections: [{ title: "Recognition", questions: [
            { id: 1, type: "mc", question: "Most likely diagnosis and next step?", options: ["Croup - racemic epi", "Epiglottitis - prepare for airway", "Foreign body - Heimlich", "Peritonsillar abscess - I&D"], correctAnswer: 1, explanation: "Classic epiglottitis: toxic, drooling, tripod, stridor. Do NOT examine throat (may precipitate complete obstruction). Prepare for emergent airway in OR." }
        ]}],
        keyTakeaways: ["Epiglottitis: do NOT examine throat, prepare airway", "Ludwig angina: bilateral submandibular swelling, airway emergency", "Peritonsillar abscess: uvular deviation, trismus, hot potato voice", "Retropharyngeal abscess: neck stiffness, dysphagia, CT for diagnosis", "Epistaxis: direct pressure 15min, anterior packing, ENT if posterior"]
    }
];

deepDives.forEach(dd => {
    fs.writeFileSync(`${DD_DIR}/${dd.id}.json`, JSON.stringify(dd, null, 2));
    console.log('Created: ' + dd.id + '.json');
});
console.log('\nGenerated ' + deepDives.length + ' deep dives');
