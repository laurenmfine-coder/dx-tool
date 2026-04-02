/* emr-data/pid-toa.js */
window.CASES = window.CASES || {};
window.CASES['pid-toa'] = {
  id: 'pid-toa', name: 'Aisha Johnson', age: '24F', dob: '2001-09-15',
  mrn: 'RDX-2026-19928', setting: 'Clinic', category: 'gynecologic', acuity: 2,
  chiefComplaint: 'Lower abdominal pain + fever + vaginal discharge — sexual active, IUD in place',
  diagnosis: 'Pelvic Inflammatory Disease with Tubo-Ovarian Abscess',
  presentation: { hpi: '24F with IUD, sexually active with multiple partners. 4 days of worsening lower abdominal pain, fever 39.1°C, and mucopurulent vaginal discharge. Cervical motion tenderness on bimanual exam (CMT) + adnexal tenderness. Pelvic US: 4.5cm right adnexal complex mass — tubo-ovarian abscess.', pmh: ['IUD — 2 years'], meds: ['IUD in situ'], allergies: ['NKDA'] },
  vitals: { BP: '104/64', HR: '112', RR: '20', Temp: '39.1°C', SpO2: '98%' },
  labs: { 'NAAT (cervical)': 'N. gonorrhoeae positive | C. trachomatis negative', 'WBC': '16,400 (H)', 'CRP': '88 mg/L (H)', 'Pelvic US': '4.5cm right adnexal complex mass with internal echogenicity — TOA confirmed', 'Urine pregnancy test': 'NEGATIVE (ectopic excluded)' },
  orders: {
    correct: [
      { id: 'abx-pid', name: 'Ceftriaxone 1g IV q24h + doxycycline 100mg q12h + metronidazole 500mg q8h — inpatient PID/TOA', rationale: 'TOA requires inpatient IV antibiotics. Coverage: gonorrhea/chlamydia (ceftriaxone + doxycycline) + anaerobes (metronidazole). Outpatient criteria for uncomplicated PID: ceftriaxone 500mg IM single dose + doxycycline 100mg BID × 14 days + metronidazole 500mg BID × 14 days.' },
      { id: 'ir-drain-pid', name: 'IR drainage if no improvement at 48-72h — TOA 4.5cm', rationale: 'TOA >3-4cm that fails to respond to 48-72h of IV antibiotics requires image-guided percutaneous drainage. Surgical drainage if IR not available or abscess ruptures.' },
      { id: 'iud-pid', name: 'Keep IUD in place — remove only if no improvement at 48-72h', rationale: 'IUD should NOT be removed routinely in PID. Current guidelines: treat with antibiotics while IUD in place; remove only if no clinical improvement after 48-72h.' }
    ],
    incorrect: [
      { id: 'remove-iud-pid', name: 'Remove IUD immediately — it caused the PID', rationale: 'IUD does not need immediate removal. PID occurs regardless of IUD status (STI-related). Remove only if no improvement after 48-72h of antibiotics.' },
      { id: 'outpatient-toa', name: 'Treat as outpatient — PID is usually outpatient', rationale: 'TOA requires inpatient IV therapy. Outpatient treatment is for mild-moderate uncomplicated PID. TOA + fever + hemodynamic compromise = inpatient.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['PID diagnosis is CLINICAL: cervical motion tenderness + uterine or adnexal tenderness. Do not wait for culture results to treat — empiric antibiotics immediately.', 'TOA: treat as inpatient with IV antibiotics. IR drainage if no improvement at 48-72h for abscesses >3-4cm.', 'IUD in PID: do NOT remove immediately — treat first. Risk of ectopic pregnancy increases with each PID episode — test βhCG in every pelvic pain case.'],
    boardPearls: ['PID sequelae: infertility (tubal scarring — 10-15% per episode), ectopic pregnancy (6-10× increased risk), chronic pelvic pain.', 'Fitz-Hugh-Curtis syndrome: PID + perihepatitis → right upper quadrant pain (violin string adhesions between liver and abdominal wall).', 'All sexual partners within 60 days require treatment for N. gonorrhoeae and C. trachomatis.']
  },
  references: [{ id: 'StatPearls-PID', title: 'Pelvic Inflammatory Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK499914/', openAccess: true }]
};
