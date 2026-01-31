// ============================================================================
// COACHDX OB/GYN EMERGENCIES CASE PACK
// SBAR scenarios for obstetric/gynecologic emergencies
// Created: January 30, 2026 | Dr. Lauren Fine | NSU KPCOM
// ============================================================================

const COACHDX_OBGYN_EMERGENCY_CASES = {

'placental-abruption-severe': {
    id: 'placental-abruption-severe',
    title: 'Placental Abruption - Severe',
    category: 'OB Emergency',
    patient: { name: 'Maria Rodriguez', age: 32, sex: 'Female', setting: 'L&D', acuity: 'Critical', chiefComplaint: 'Vaginal Bleeding and Pain' },
    description: 'A 32-year-old G3P2 at 34 weeks with sudden severe abdominal pain and bleeding after MVA. BP 92/58, HR 128. Rigid, tender uterus. FHR with late decelerations.',
    openingStatement: 'Maria has severe placental abruption with hemorrhagic shock and fetal distress. The rigid uterus distinguishes from previa.',
    conceptDomains: { 'Situation': ['maternal_status', 'fetal_status'], 'Background': ['trauma'], 'Assessment': ['abruption_severity'], 'Recommendation': ['emergent_cesarean'] },
    quickActions: ['Abruption vs previa?', 'Why DIC?', 'Delivery urgency?'],
    keyTeachingPoints: ['Abruption: Painful + rigid vs Previa: Painless + soft', 'DIC in 10-20%', 'Emergent delivery for instability', 'Concealed hemorrhage can be massive'],
    sbarTemplate: { situation: '32yo at 34wk with abruption, hypotensive, fetal distress', background: 'Post-MVA, retroplacental clot on US', assessment: 'Maternal/fetal emergency, DIC risk', recommendation: 'Emergent cesarean, MTP, check coags' },
    defined_responses: { 'abruption vs previa': 'ABRUPTION = Painful, rigid uterus, fetal distress. PREVIA = Painless, soft uterus.', 'dic': 'DIC 10-20% from tissue factor. Monitor fibrinogen.', 'delivery': 'Emergent if fetal distress or maternal instability.' },
    relatedContent: [{ type: 'mechanism', title: 'Abruption Module', link: '../mechanism/placental-abruption-module.html', reason: 'Pathophysiology' }],
    evidenceBase: { guidelines: ["ACOG - Placental Abruption 2021"], keyEvidence: ["DIC 10-20%", "Concealed hemorrhage"], openAccessLinks: [] }
},

'eclamptic-seizure': {
    id: 'eclamptic-seizure',
    title: 'Eclamptic Seizure',
    category: 'OB Emergency',
    patient: { name: 'Ashley Williams', age: 24, sex: 'Female', setting: 'L&D', acuity: 'Critical', chiefComplaint: 'Seizure' },
    description: 'A 24-year-old primigravida at 38 weeks with witnessed GTC seizure. Admitted with BP 168/108, proteinuria. Post-ictal BP 182/118.',
    openingStatement: 'Ashley had eclamptic seizure. Needs magnesium and BP control immediately.',
    conceptDomains: { 'Situation': ['seizure', 'blood_pressure'], 'Background': ['preeclampsia'], 'Assessment': ['eclampsia'], 'Recommendation': ['magnesium', 'delivery'] },
    quickActions: ['Magnesium dose?', 'BP target?', 'Delivery timing?'],
    keyTeachingPoints: ['Magnesium first-line - NOT phenytoin', 'Target BP <160/110', 'Eclampsia = delivery indication', 'Most seizures occur postpartum'],
    sbarTemplate: { situation: '24yo at 38wk with eclamptic seizure, BP 182/118', background: 'Severe preeclampsia', assessment: 'Eclampsia - needs Mg and BP control', recommendation: 'Mg 6g load, labetalol, deliver after stable' },
    defined_responses: { 'magnesium': 'Load 4-6g IV, maintenance 1-2g/hr. Continue 24-48h postpartum.', 'bp': 'Target <160/110. Labetalol, hydralazine, or nifedipine.', 'delivery': 'After stabilization. At 38 weeks, no reason to delay.' },
    relatedContent: [{ type: 'mechanism', title: 'Preeclampsia Module', link: '../mechanism/preeclampsia-module.html', reason: 'Pathophysiology' }],
    evidenceBase: { guidelines: ["ACOG - Gestational HTN 2020"], keyEvidence: ["Mg > phenytoin", "BP <160/110"], openAccessLinks: [] }
},

'pph-massive': {
    id: 'pph-massive',
    title: 'Postpartum Hemorrhage - Massive',
    category: 'OB Emergency',
    patient: { name: 'Jennifer Davis', age: 35, sex: 'Female', setting: 'L&D', acuity: 'Critical', chiefComplaint: 'Heavy Bleeding' },
    description: 'A 35-year-old G4P4 with brisk bleeding 30min postpartum - EBL 1,800mL. BP 88/54, HR 132. Boggy uterus despite oxytocin.',
    openingStatement: 'Jennifer has massive PPH from atony not responding to oxytocin. Hemorrhagic shock.',
    conceptDomains: { 'Situation': ['blood_loss', 'uterine_tone'], 'Background': ['multiparity'], 'Assessment': ['atony'], 'Recommendation': ['uterotonics', 'transfusion'] },
    quickActions: ['4 T\'s?', 'Next uterotonics?', 'When surgery?', 'TXA?'],
    keyTeachingPoints: ['4 T\'s: Tone (70-80%), Trauma, Tissue, Thrombin', 'Escalate: Oxytocin→Methergine→Carboprost→Misoprostol', 'TXA 1g within 3h', 'Don\'t delay hysterectomy if deteriorating'],
    sbarTemplate: { situation: '35yo G4P4, EBL 1800mL, hypotensive, boggy uterus', background: 'Grand multipara, oxytocin not working', assessment: 'PPH from atony, hemorrhagic shock', recommendation: 'Methergine now, MTP, TXA, consider Bakri' },
    defined_responses: { 'four ts': 'Tone 70-80%, Trauma, Tissue, Thrombin.', 'uterotonics': 'Oxytocin→Methylergonovine→Carboprost→Misoprostol.', 'txa': '1g IV over 10min within 3h. Can repeat.', 'surgery': 'Bakri balloon, B-Lynch, UAE, hysterectomy.' },
    relatedContent: [{ type: 'mechanism', title: 'PPH Module', link: '../mechanism/pph-module.html', reason: 'Management' }],
    evidenceBase: { guidelines: ["ACOG - PPH 2017"], keyEvidence: ["Atony 70-80%", "TXA reduces death"], openAccessLinks: [] }
},

'ruptured-ectopic': {
    id: 'ruptured-ectopic',
    title: 'Ruptured Ectopic Pregnancy',
    category: 'GYN Emergency',
    patient: { name: 'Samantha Chen', age: 28, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Sudden Abdominal Pain' },
    description: 'A 28-year-old, LMP 7 weeks, with sudden LLQ pain radiating to shoulder. BP 82/50, HR 138. Positive preg test, β-hCG 4200. US: empty uterus, adnexal mass, free fluid.',
    openingStatement: 'Samantha has ruptured ectopic with hemoperitoneum. Shoulder pain from diaphragmatic irritation. Surgical emergency.',
    conceptDomains: { 'Situation': ['shock', 'free_fluid'], 'Background': ['lmp', 'bhcg'], 'Assessment': ['ruptured_ectopic'], 'Recommendation': ['surgery'] },
    quickActions: ['Signs of rupture?', 'Surgery type?', 'Methotrexate?'],
    keyTeachingPoints: ['Ruptured: instability + peritoneal signs + free fluid', 'Shoulder pain = Kehr\'s sign', 'Ruptured = SURGICAL, not MTX', 'Salpingectomy vs salpingostomy'],
    sbarTemplate: { situation: '28yo with ruptured ectopic, BP 82/50, free fluid', background: 'LMP 7wk, β-hCG 4200, no IUP', assessment: 'Ruptured ectopic, hemorrhagic shock', recommendation: 'Emergent surgery, MTP, OR now' },
    defined_responses: { 'rupture': 'Hypotension, peritoneal signs, shoulder pain, free fluid.', 'surgery': 'Salpingectomy if extensive damage; salpingostomy if minimal.', 'mtx': 'NOT for ruptured. MTX needs: stable, unruptured, β-hCG <5000.' },
    relatedContent: [{ type: 'mechanism', title: 'Ectopic Module', link: '../mechanism/ectopic-pregnancy-module.html', reason: 'Pathophysiology' }],
    evidenceBase: { guidelines: ["ACOG - Tubal Ectopic 2018"], keyEvidence: ["Ruptured = surgical"], openAccessLinks: [] }
},

'shoulder-dystocia': {
    id: 'shoulder-dystocia',
    title: 'Shoulder Dystocia',
    category: 'OB Emergency',
    patient: { name: 'Rebecca Thompson', age: 29, sex: 'Female', setting: 'L&D', acuity: 'Critical', chiefComplaint: 'Delivery in Progress' },
    description: 'A 29-year-old G2P1 with GDM pushing. Head delivers but retracts (turtle sign). Gentle traction doesn\'t deliver shoulder.',
    openingStatement: 'Rebecca has shoulder dystocia - turtle sign, shoulder stuck. Time-critical. Start maneuvers.',
    conceptDomains: { 'Situation': ['dystocia'], 'Background': ['gdm'], 'Assessment': ['maneuvers'], 'Recommendation': ['mcroberts', 'suprapubic'] },
    quickActions: ['First maneuvers?', 'Time limit?', 'Injuries?', 'Zavanelli?'],
    keyTeachingPoints: ['Turtle sign = head retracts', 'HELPERR mnemonic', 'McRoberts + suprapubic first', 'NO fundal pressure'],
    sbarTemplate: { situation: 'Shoulder dystocia - head delivered, turtle sign, shoulder stuck', background: 'GDM - macrosomia risk', assessment: 'Limited time before hypoxia', recommendation: 'McRoberts NOW, suprapubic DOWN and LATERAL' },
    defined_responses: { 'first': 'McRoberts (hyperflex legs) + suprapubic pressure (down/lateral). Resolves 50-60%.', 'time': '>5min increases injury risk. Work efficiently.', 'injuries': 'Brachial plexus, clavicle fracture, hypoxia.', 'zavanelli': 'Last resort - push head back, emergency cesarean.' },
    relatedContent: [{ type: 'mechanism', title: 'Labor Module', link: '../ReasonDx-Audited-Modules/labor-delivery-module.html', reason: 'Delivery mechanics' }],
    evidenceBase: { guidelines: ["ACOG - Shoulder Dystocia 2017"], keyEvidence: ["McRoberts 50-60% success", "No fundal pressure"], openAccessLinks: [] }
}

};

// Export
if (typeof module !== 'undefined' && module.exports) { module.exports = COACHDX_OBGYN_EMERGENCY_CASES; }
if (typeof COACHDX_CASES !== 'undefined') { Object.assign(COACHDX_CASES, COACHDX_OBGYN_EMERGENCY_CASES); }
