// CoachDx OB/GYN SBAR Cases
// 12 cases covering obstetric and gynecologic emergencies
// Each case includes level-specific adaptations for different learners

const OBGYN_CASES = [
  // OBSTETRIC EMERGENCIES
  {
    id: 'ob-preeclampsia-severe',
    title: 'Severe Preeclampsia',
    category: 'Obstetric Emergency',
    difficulty: 'advanced',
    patientAge: '28 years',
    gestationalAge: '34 weeks',
    chiefComplaint: 'Headache and visual changes',
    scenario: 'A 28-year-old G1P0 at 34 weeks presents with severe headache, visual changes (seeing spots), and new-onset swelling. BP at triage is 178/112.',
    vitals: { HR: 95, RR: 18, SpO2: '98% on RA', BP: '178/112', Temp: '37.0°C' },
    keyFindings: [
      'Severe range blood pressures (>160/110)',
      'Hyperreflexia with clonus',
      'Right upper quadrant tenderness',
      'Proteinuria 3+ on dipstick',
      'Labs: AST 156, ALT 142, Platelets 98K, Creatinine 1.2'
    ],
    idealSBAR: {
      situation: 'Calling about a 28-year-old G1P0 at 34 weeks with severe preeclampsia - BP 178/112, visual changes, RUQ pain, and labs showing HELLP features.',
      background: 'First pregnancy, previously healthy. No prior hypertension. Has not had regular prenatal care last 4 weeks.',
      assessment: 'Severe preeclampsia with HELLP syndrome features. High risk for eclampsia, placental abruption, and fetal distress.',
      recommendation: 'Magnesium sulfate for seizure prophylaxis, IV labetalol or hydralazine for BP control (goal <160/110), betamethasone for fetal lung maturity, continuous fetal monitoring. Plan for delivery within 24-48 hours.'
    },
    learningPoints: ['Severe features criteria', 'Magnesium dosing and toxicity', 'Delivery timing decisions']
  },
  {
    id: 'ob-eclampsia',
    title: 'Eclamptic Seizure',
    category: 'Obstetric Emergency',
    difficulty: 'advanced',
    patientAge: '24 years',
    gestationalAge: '37 weeks',
    chiefComplaint: 'Seizure',
    scenario: 'A 24-year-old G2P1 at 37 weeks has a witnessed generalized tonic-clonic seizure in the waiting room. She came in for headache and is now post-ictal.',
    vitals: { HR: 110, RR: 22, SpO2: '94% on RA', BP: '185/118', Temp: '37.2°C' },
    keyFindings: [
      'Post-ictal state, responsive to pain',
      'Seizure was generalized, lasted 90 seconds',
      'Tongue laceration present',
      'Fetal heart tones 90s during seizure, now 145',
      'No prior seizure history'
    ],
    idealSBAR: {
      situation: 'Calling code OB for 24-year-old G2P1 at 37 weeks with eclamptic seizure. Currently post-ictal, fetal heart rate has recovered.',
      background: 'Came to ED for headache, had elevated BP in triage. No known preeclampsia diagnosis. Previous pregnancy uncomplicated.',
      assessment: 'Eclampsia with post-ictal recovery. High risk for recurrent seizures and fetal compromise.',
      recommendation: 'Loading dose magnesium sulfate 4-6g IV over 20 minutes, then 2g/hr maintenance. Antihypertensives for BP control. Prepare for emergent delivery once patient stabilized. Type and screen, OR notification.'
    },
    learningPoints: ['Magnesium is treatment of choice for eclampsia', 'Stabilize before delivery', 'Recurrent seizure management']
  },
  {
    id: 'ob-placental-abruption',
    title: 'Placental Abruption',
    category: 'Obstetric Emergency',
    difficulty: 'advanced',
    patientAge: '32 years',
    gestationalAge: '32 weeks',
    chiefComplaint: 'Vaginal bleeding and abdominal pain',
    scenario: 'A 32-year-old G3P2 at 32 weeks presents with sudden onset severe abdominal pain and dark vaginal bleeding following a motor vehicle accident 2 hours ago.',
    vitals: { HR: 118, RR: 24, SpO2: '97% on RA', BP: '100/70', Temp: '36.9°C' },
    keyFindings: [
      'Rigid, tender abdomen',
      'Dark red vaginal bleeding (moderate amount)',
      'Fetal heart tones 170s with minimal variability',
      'Frequent contractions every 2 minutes',
      'Ultrasound: retroplacental clot visualized'
    ],
    idealSBAR: {
      situation: 'Calling about a 32-year-old G3P2 at 32 weeks with placental abruption following MVA - presenting with rigid abdomen, bleeding, and non-reassuring fetal heart tracing.',
      background: 'MVA 2 hours ago, restrained driver. Two prior uncomplicated vaginal deliveries. Blood type A positive.',
      assessment: 'Significant placental abruption with fetal distress. At risk for DIC, hemorrhagic shock, and fetal demise.',
      recommendation: 'Large bore IV access x2, type and crossmatch 4 units, coagulation studies. Continuous fetal monitoring. If fetal distress persists, emergent cesarean delivery. Betamethasone if time allows.'
    },
    learningPoints: ['Trauma in pregnancy evaluation', 'Kleihauer-Betke test indication', 'DIC monitoring']
  },
  {
    id: 'ob-postpartum-hemorrhage',
    title: 'Postpartum Hemorrhage',
    category: 'Obstetric Emergency',
    difficulty: 'advanced',
    patientAge: '30 years',
    chiefComplaint: 'Heavy bleeding after delivery',
    scenario: 'A 30-year-old G2P2 delivered vaginally 30 minutes ago after prolonged second stage. She is now having heavy vaginal bleeding and feeling lightheaded.',
    vitals: { HR: 125, RR: 22, SpO2: '96% on RA', BP: '88/58', Temp: '37.1°C' },
    keyFindings: [
      'Estimated blood loss 1200 mL and ongoing',
      'Uterus is boggy and above umbilicus',
      'No obvious laceration on exam',
      'Placenta delivered complete',
      'Hemoglobin baseline was 11.2, now 8.5'
    ],
    idealSBAR: {
      situation: 'Calling code OB for postpartum hemorrhage - 30-year-old P2 with EBL >1200 mL, ongoing bleeding, boggy uterus, and hemodynamic instability.',
      background: 'Vaginal delivery 30 minutes ago after prolonged pushing. Large baby (4.2 kg). Placenta delivered intact.',
      assessment: 'Primary postpartum hemorrhage most likely from uterine atony. At risk for hypovolemic shock and DIC.',
      recommendation: 'Bimanual uterine massage, uterotonics (oxytocin bolus, methylergonovine, carboprost), IV fluids wide open, type and crossmatch. Call for Bakri balloon if medical management fails. Activate massive transfusion protocol if needed.'
    },
    learningPoints: ['Four Ts of PPH', 'Uterotonic agents and contraindications', 'Massive transfusion triggers']
  },
  {
    id: 'ob-shoulder-dystocia',
    title: 'Shoulder Dystocia',
    category: 'Obstetric Emergency',
    difficulty: 'advanced',
    patientAge: '35 years',
    chiefComplaint: 'Delivery emergency',
    scenario: 'During vaginal delivery, the fetal head delivers but retracts against the perineum (turtle sign). The anterior shoulder is impacted behind the pubic symphysis.',
    vitals: { HR: 100, RR: 20, SpO2: '98% on RA', BP: '125/80' },
    keyFindings: [
      'Turtle sign present',
      'Gentle downward traction unsuccessful',
      'Estimated fetal weight 4.5 kg',
      'Mother is diabetic',
      'Time since head delivery: 60 seconds'
    ],
    idealSBAR: {
      situation: 'Calling shoulder dystocia - fetal head delivered with turtle sign, anterior shoulder impacted. Need additional help immediately.',
      background: 'G2P1, gestational diabetes, estimated fetal weight 4.5 kg. Vacuum-assisted delivery.',
      assessment: 'Shoulder dystocia requiring immediate maneuvers to prevent fetal hypoxic injury and brachial plexus injury.',
      recommendation: 'Call for help, McRoberts maneuver with suprapubic pressure. If unsuccessful: Rubin maneuver, Woods screw, delivery of posterior arm. Document time and maneuvers. Pediatrics to bedside for neonatal resuscitation.'
    },
    learningPoints: ['HELPERR mnemonic', 'Maneuver sequence', 'Avoid fundal pressure']
  },
  // GYNECOLOGIC EMERGENCIES
  {
    id: 'gyn-ectopic-pregnancy',
    title: 'Ruptured Ectopic Pregnancy',
    category: 'Gynecologic Emergency',
    difficulty: 'intermediate',
    patientAge: '26 years',
    chiefComplaint: 'Abdominal pain and dizziness',
    scenario: 'A 26-year-old presents with sudden severe right lower abdominal pain and dizziness. LMP was 6 weeks ago and she has had some spotting.',
    vitals: { HR: 120, RR: 22, SpO2: '97% on RA', BP: '92/60', Temp: '36.8°C' },
    keyFindings: [
      'Right lower quadrant tenderness with guarding',
      'Cervical motion tenderness on exam',
      'Positive urine pregnancy test',
      'Quantitative beta-hCG: 3,500',
      'FAST exam positive for free fluid',
      'Hemoglobin 9.2 (baseline unknown)'
    ],
    idealSBAR: {
      situation: 'Calling about a 26-year-old with suspected ruptured ectopic pregnancy - hypotensive, acute abdomen, positive pregnancy test, and free fluid on FAST.',
      background: 'LMP 6 weeks ago, vaginal spotting. History of chlamydia infection 2 years ago.',
      assessment: 'Ruptured ectopic pregnancy with hemoperitoneum causing hemorrhagic shock.',
      recommendation: 'Large bore IV access, type and crossmatch, emergent OB/GYN consult for operative management. Transfusion may be needed. This patient needs OR, not methotrexate.'
    },
    learningPoints: ['Risk factors for ectopic', 'Discriminatory zone for beta-hCG', 'Medical vs surgical management criteria']
  },
  {
    id: 'gyn-ovarian-torsion',
    title: 'Ovarian Torsion',
    category: 'Gynecologic Emergency',
    difficulty: 'intermediate',
    patientAge: '22 years',
    chiefComplaint: 'Sudden severe pelvic pain',
    scenario: 'A 22-year-old presents with sudden onset severe right-sided pelvic pain with nausea and vomiting. Pain started 4 hours ago during exercise.',
    vitals: { HR: 105, RR: 20, SpO2: '99% on RA', BP: '118/75', Temp: '37.3°C' },
    keyFindings: [
      'Severe right adnexal tenderness',
      'Unable to find comfortable position',
      'Negative pregnancy test',
      'Ultrasound: 6 cm right ovarian cyst with absent Doppler flow',
      'White count 12,000'
    ],
    idealSBAR: {
      situation: 'Calling about a 22-year-old with suspected right ovarian torsion - sudden severe pain, 6 cm cyst with absent Doppler flow.',
      background: 'Previously healthy, regular periods. Known ovarian cyst found incidentally last year. Not on contraception.',
      assessment: 'Ovarian torsion until proven otherwise. Ovarian viability at risk with prolonged torsion.',
      recommendation: 'NPO status, IV access, pain control, emergent GYN consult for diagnostic laparoscopy and detorsion. Time-sensitive to preserve ovarian function.'
    },
    learningPoints: ['Doppler can be falsely normal', 'Detorsion vs oophorectomy', 'Ovarian salvage rates by time']
  },
  {
    id: 'gyn-pid-toa',
    title: 'PID with Tubo-Ovarian Abscess',
    category: 'Gynecologic Emergency',
    difficulty: 'intermediate',
    patientAge: '19 years',
    chiefComplaint: 'Pelvic pain and fever',
    scenario: 'A 19-year-old presents with 5 days of worsening bilateral pelvic pain, fever, and abnormal vaginal discharge. She has a new sexual partner.',
    vitals: { HR: 110, RR: 18, SpO2: '98% on RA', BP: '110/70', Temp: '38.9°C' },
    keyFindings: [
      'Bilateral adnexal tenderness',
      'Cervical motion tenderness',
      'Mucopurulent cervical discharge',
      'Right adnexal mass on exam',
      'Ultrasound: 5 cm complex right adnexal mass (TOA)',
      'WBC 18,000, CRP elevated'
    ],
    idealSBAR: {
      situation: 'Calling about a 19-year-old with PID and 5 cm tubo-ovarian abscess, febrile with leukocytosis.',
      background: 'Sexually active with new partner, no barrier contraception. No prior STI history.',
      assessment: 'Moderate-severe PID with tubo-ovarian abscess requiring admission for IV antibiotics.',
      recommendation: 'Admit for IV antibiotics (cefoxitin + doxycycline or clindamycin + gentamicin). GYN consult for abscess management. Test for gonorrhea, chlamydia, HIV. Partner notification.'
    },
    learningPoints: ['CDC criteria for PID diagnosis', 'Inpatient vs outpatient treatment criteria', 'TOA management algorithm']
  },
  // EARLY PREGNANCY COMPLICATIONS
  {
    id: 'ob-miscarriage-incomplete',
    title: 'Incomplete Miscarriage with Hemorrhage',
    category: 'Early Pregnancy',
    difficulty: 'intermediate',
    patientAge: '31 years',
    gestationalAge: '9 weeks',
    chiefComplaint: 'Heavy vaginal bleeding',
    scenario: 'A 31-year-old G3P1 at 9 weeks by LMP presents with heavy vaginal bleeding and cramping for 3 hours. She passed tissue at home.',
    vitals: { HR: 108, RR: 18, SpO2: '99% on RA', BP: '105/68', Temp: '37.0°C' },
    keyFindings: [
      'Active vaginal bleeding, soaking pad every 30 minutes',
      'Open cervical os with tissue visible',
      'Uterus 8 week size, tender',
      'Hemoglobin 10.2',
      'Ultrasound: heterogeneous material in uterus, no fetal cardiac activity'
    ],
    idealSBAR: {
      situation: 'Calling about a 31-year-old at 9 weeks with incomplete miscarriage and significant hemorrhage - open os with retained products, soaking pads.',
      background: 'G3P1 with one prior miscarriage managed expectantly. Blood type O negative.',
      assessment: 'Incomplete miscarriage with ongoing hemorrhage requiring intervention.',
      recommendation: 'IV access, type and screen, RhoGAM (Rh negative). Options include expectant management with close follow-up, misoprostol, or surgical evacuation (D&C). Given ongoing hemorrhage, recommend D&C.'
    },
    learningPoints: ['Management options for miscarriage', 'RhoGAM indications', 'When surgical management is needed']
  },
  {
    id: 'ob-hyperemesis',
    title: 'Hyperemesis Gravidarum',
    category: 'Early Pregnancy',
    difficulty: 'beginner',
    patientAge: '25 years',
    gestationalAge: '8 weeks',
    chiefComplaint: 'Severe nausea and vomiting',
    scenario: 'A 25-year-old G1P0 at 8 weeks presents with 2 weeks of persistent nausea and vomiting. She cannot keep anything down and has lost 8 pounds.',
    vitals: { HR: 115, RR: 16, SpO2: '99% on RA', BP: '100/62', Temp: '36.8°C' },
    keyFindings: [
      'Dry mucous membranes, poor skin turgor',
      'Ketones 3+ on urinalysis',
      'Potassium 3.0, BUN/Cr ratio elevated',
      '8% weight loss from pre-pregnancy weight',
      'Unable to tolerate oral intake for 48 hours'
    ],
    idealSBAR: {
      situation: 'Calling about a 25-year-old G1P0 at 8 weeks with hyperemesis gravidarum - dehydrated with ketonuria, 8% weight loss, unable to tolerate PO.',
      background: 'First pregnancy, no prior medical history. Symptoms started 2 weeks ago, progressively worse.',
      assessment: 'Hyperemesis gravidarum with significant dehydration and electrolyte abnormalities.',
      recommendation: 'IV fluid resuscitation with D5NS, replete potassium, thiamine before dextrose, IV antiemetics (ondansetron, metoclopramide). Monitor for refeeding. May need admission if no improvement.'
    },
    learningPoints: ['Thiamine before dextrose (Wernicke prevention)', 'PUQE scoring', 'Antiemetic safety in pregnancy']
  },
  // LABOR AND DELIVERY
  {
    id: 'ob-cord-prolapse',
    title: 'Umbilical Cord Prolapse',
    category: 'Labor Emergency',
    difficulty: 'advanced',
    patientAge: '29 years',
    gestationalAge: '38 weeks',
    chiefComplaint: 'Felt something come out after water broke',
    scenario: 'A 29-year-old G2P1 at 38 weeks reports sudden gush of fluid followed by feeling "something in vagina." On exam, pulsating umbilical cord is palpable.',
    vitals: { HR: 95, RR: 18, SpO2: '98% on RA', BP: '120/75', Temp: '37.0°C' },
    keyFindings: [
      'Umbilical cord palpable at introitus',
      'Cord is pulsating',
      'Fetal heart tones 80s (was 140s)',
      'Cervix 6 cm dilated',
      'Fetal presenting part high'
    ],
    idealSBAR: {
      situation: 'Code OB - 29-year-old G2P1 at 38 weeks with cord prolapse. Cord palpable, pulsating. Fetal bradycardia to 80s.',
      background: 'Presented in active labor, membranes ruptured 5 minutes ago. Previous vaginal delivery.',
      assessment: 'Umbilical cord prolapse with fetal distress. Life-threatening emergency requiring immediate delivery.',
      recommendation: 'Elevate presenting part off cord (examiner hand in vagina), fill bladder with 500 mL saline, knee-chest or Trendelenburg position, do NOT attempt to replace cord. Emergent cesarean section - call OR and pediatrics STAT.'
    },
    learningPoints: ['Manual elevation technique', 'Bladder filling rationale', 'Do not replace cord']
  },
  {
    id: 'ob-fetal-distress',
    title: 'Non-Reassuring Fetal Heart Tracing',
    category: 'Labor Emergency',
    difficulty: 'intermediate',
    patientAge: '27 years',
    gestationalAge: '40 weeks',
    chiefComplaint: 'In labor with abnormal monitoring',
    scenario: 'A 27-year-old G1P0 at 40 weeks is in active labor. The fetal heart rate monitor shows repetitive late decelerations with minimal variability.',
    vitals: { HR: 88, RR: 16, SpO2: '99% on RA', BP: '125/82', Temp: '37.1°C' },
    keyFindings: [
      'FHR baseline 155 with minimal variability',
      'Repetitive late decelerations to 100s',
      'Cervix 7 cm, +1 station',
      'Contractions every 2-3 minutes',
      'Pitocin running at 12 mU/min'
    ],
    idealSBAR: {
      situation: 'Calling about a 27-year-old G1P0 at 40 weeks with Category III fetal heart tracing - recurrent late decelerations with minimal variability.',
      background: 'Labor augmented with Pitocin for slow progress. Epidural in place. No maternal fever.',
      assessment: 'Non-reassuring fetal status concerning for uteroplacental insufficiency. Category III tracing requires immediate evaluation.',
      recommendation: 'Intrauterine resuscitation: stop Pitocin, left lateral position, IV fluid bolus, supplemental oxygen. If no improvement in 5-10 minutes, prepare for cesarean delivery.'
    },
    learningPoints: ['FHR category classification', 'Intrauterine resuscitation steps', 'When to proceed to cesarean']
  }
];

// Open-Access Guidelines References for OB/GYN Cases
const OBGYN_REFERENCES = {
  preeclampsia: {
    guideline: "ACOG Practice Bulletin 222: Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020;135(6):e237-e260",
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/gestational-hypertension-and-preeclampsia",
    access: "ACOG Summary Available",
    keyContent: "Diagnostic criteria, severe features, magnesium protocols"
  },
  hemorrhage: {
    guideline: "ACOG Practice Bulletin 183: Postpartum Hemorrhage. Obstet Gynecol. 2017;130(4):e168-e186",
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
    access: "ACOG Summary Available",
    keyContent: "Quantitative blood loss, uterotonics, massive transfusion"
  },
  ectopic: {
    guideline: "ACOG Practice Bulletin 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018;131(3):e91-e103",
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/03/tubal-ectopic-pregnancy",
    access: "ACOG Summary Available",
    keyContent": "Methotrexate criteria, surgical indications"
  },
  fetalHeartRate: {
    guideline: "ACOG Practice Bulletin 106: Intrapartum FHR Monitoring. Obstet Gynecol. 2009;114(1):192-202",
    url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2009/07/intrapartum-fetal-heart-rate-monitoring-nomenclature-interpretation-and-general-management-principles",
    access: "ACOG Summary Available",
    keyContent: "Category I/II/III classification, intrauterine resuscitation"
  },
  ovarianTorsion: {
    guideline: "StatPearls: Ovarian Torsion",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK560693/",
    access: "Open Access",
    keyContent: "Clinical features, ultrasound findings, surgical management"
  },
  placentalAbruption: {
    guideline: "ACOG Practice Bulletin 227: Placenta Accreta Spectrum. Obstet Gynecol. 2021;137(2):e29-e51",
    url: "https://pubmed.ncbi.nlm.nih.gov/33481513/",
    access: "PubMed",
    keyContent: "Risk factors, diagnosis, delivery planning"
  }
};

// Export for use in CoachDx system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OBGYN_CASES, OBGYN_REFERENCES };
}
