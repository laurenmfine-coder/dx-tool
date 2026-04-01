/* emr-data/postpartum-hemorrhage.js — PPH — The 4 Ts */
window.CASES = window.CASES || {};
window.CASES['postpartum-hemorrhage'] = {
  id: 'postpartum-hemorrhage', name: 'Maria Delgado', age: '32F', dob: '1993-07-12',
  mrn: 'RDX-2026-88471', setting: 'Labor & Delivery / OR', category: 'obstetric', acuity: 1,
  chiefComplaint: 'Excessive bleeding after vaginal delivery — uterus boggy, estimated blood loss 1200mL',
  diagnosis: 'Primary Postpartum Hemorrhage — Uterine Atony (Tone)',
  presentation: {
    hpi: 'Maria Delgado, 32F G2P2, spontaneous vaginal delivery 30 minutes ago. Pregnancy was complicated by polyhydramnios and prolonged labor (24h). Placenta delivered intact. Now with heavy vaginal bleeding, estimated blood loss 1200mL. Uterus is boggy and poorly contracted on bimanual exam. Laceration exam: no cervical or vaginal lacerations. No retained placental fragments on ultrasound. Platelets and coags normal prenatally.',
    pmh: ['G2P2 — prior uncomplicated vaginal delivery', 'GDM this pregnancy (diet-controlled)'],
    meds: ['Oxytocin infusion running (standard post-delivery)'], allergies: ['NKDA']
  },
  vitals: { BP: '90/58', HR: '126', RR: '22', Temp: '37.0°C', SpO2: '98%', GCS: '15' },
  labs: {
    'CBC': 'Hgb 8.4 (L — acute blood loss + baseline dilutional anemia of pregnancy)',
    'Coags': 'PT 14.2, PTT 28, INR 1.1, Fibrinogen 280 — normal (no DIC yet)',
    'Type & Screen': 'O positive — crossmatch 2 units pRBC'
  },
  orders: {
    correct: [
      { id: 'bimanual-uterine', name: 'Bimanual uterine massage — immediate', rationale: 'First-line mechanical intervention for atony. Compress the uterus between vaginal hand and abdominal hand. Stimulates contraction. Do simultaneously with uterotonic administration.' },
      { id: 'oxytocin-pph', name: 'Oxytocin 10-40 units in 1L NS IV — increase rate', rationale: 'First-line uterotonic. Should already be running post-delivery. Increase rate. IV bolus is NOT recommended (causes hypotension and tachycardia). Oxytocin is the single most important uterotonic.' },
      { id: 'methergine-pph', name: 'Methylergonovine 0.2mg IM — second uterotonic', rationale: 'Second-line: causes sustained uterine contraction. CONTRAINDICATED in hypertension (causes vasoconstriction). Maria has hypotension — use cautiously. Check BP first.' },
      { id: 'carboprost-pph', name: 'Carboprost (15-methyl PGF2α) 0.25mg IM q15-90min (max 8 doses)', rationale: 'Third-line uterotonic. CONTRAINDICATED in asthma (causes bronchospasm). Most potent uterotonic available for atony. Monitor for fever, diarrhea.' },
      { id: 'balloon-pph', name: 'Bakri balloon tamponade if uterotonics insufficient', rationale: 'Intrauterine balloon provides mechanical tamponade if pharmacologic measures fail. Bridges to OR. Can be placed at bedside by OB.' },
      { id: 'mtp-pph', name: 'Activate massive transfusion protocol — 1:1:1 (pRBC:FFP:platelets)', rationale: 'EBL 1200mL and still bleeding — early MTP reduces mortality. Do not wait for labs to worsen. Permissive hypotension until hemorrhage controlled.' }
    ],
    incorrect: [
      { id: 'carboprost-asthma', name: 'Carboprost for patient with asthma', rationale: 'CONTRAINDICATED — carboprost (PGF2α) causes severe bronchospasm in asthmatic patients. Use misoprostol or Bakri balloon instead.' },
      { id: 'methergine-htn', name: 'Methylergonovine for hypertensive patient', rationale: 'CONTRAINDICATED — methylergonovine causes systemic vasoconstriction. Can precipitate hypertensive crisis, stroke, and MI in hypertensive patients. Use misoprostol instead.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'PPH definition: blood loss >500mL vaginal delivery or >1000mL cesarean, OR any blood loss causing hemodynamic instability. The 4 Ts: Tone (atony — 80%), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy).',
      'Uterotonic escalation: oxytocin (first) → methylergonovine (second, avoid in HTN) → carboprost (third, avoid in asthma) → misoprostol (all settings, sublingual) → tranexamic acid (given within 3h of delivery).',
      'Activate massive transfusion protocol early — do not wait for severe anemia. 1:1:1 pRBC:FFP:platelets reduces mortality. Fibrinogen <2 g/L in PPH is an indication for cryoprecipitate.',
      'Tranexamic acid (TXA) 1g IV within 3 hours of delivery — WOMAN trial: reduces death from bleeding without increasing thromboembolic risk.'
    ],
    boardPearls: [
      'Risk factors for uterine atony: prolonged labor, macrosomia, polyhydramnios, chorioamnionitis, uterine distension (twins, hydramnios), high parity, magnesium therapy.',
      'B-Lynch suture: surgical compression suture for uterine atony failing medical management.',
      'Uterine inversion (rare): placenta attached to fundus, forceful cord traction inverts the uterus — presents as sudden shock + mass in vagina. Do NOT remove placenta first — replace uterus manually.',
      'Sheehan syndrome: pituitary necrosis from severe PPH → secondary adrenal insufficiency and hypothyroidism postpartum. Suspect in any woman with failure to lactate or amenorrhea after PPH.'
    ]
  },
  references: [{ id: 'StatPearls-PPH', title: 'Postpartum Hemorrhage', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK499988/', openAccess: true }]
};
