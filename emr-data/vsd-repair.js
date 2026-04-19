/* emr-data/vsd-repair.js — Large VSD — Eisenmenger Syndrome Prevention */
window.CASES = window.CASES || {};
window.CASES['vsd-repair'] = {
  id: 'vsd-repair', name: 'Zoe Martinez', age: '18M', dob: '2024-09-30',
  mrn: 'RDX-2026-64581', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Large VSD — Eisenmenger Syndrome Prevention',
  diagnosis: 'Large VSD — Eisenmenger Syndrome Prevention',
  presentation: {
    hpi: '18-month-old female. Large perimembranous VSD diagnosed at birth (3mm → now 8mm on echo). Parents declined surgery \'to see if it closes.\' Now: failure to thrive, tachypnea with feeds, recurrent respiratory infections, hepatomegaly. Echo: large VSD, Qp:Qs 3:1 (massive overcirculation), pulmonary artery pressure 55 mmHg (rising). Eisenmenger syndrome developing — shunt reversal imminent.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: '90/55', HR: '138', RR: '38', Temp: '37.2°C', SpO2: '94%', Weight: '8.2kg (below 3rd percentile)' },
  labs: { 'Echo': 'Large 8mm perimembranous VSD. Qp:Qs 3:1. PA systolic pressure 55 mmHg (elevated). Bidirectional shunting beginning. LV volume overload.', 'CXR': 'Cardiomegaly + increased pulmonary vascularity + pulmonary plethora' },
  orders: {
    correct: [
      { id: 'vsd-surgery', name: 'Urgent surgical VSD repair — before Eisenmenger syndrome is irreversible', rationale: 'Large VSD with rising PA pressures and Qp:Qs >2:1 + symptoms = surgical closure is urgent. The window for repair is closing — once Eisenmenger is established (irreversible pulmonary vascular disease with R→L shunting), VSD closure is CONTRAINDICATED and lethal. Act now.' },
      { id: 'diuretics-vsd', name: 'Furosemide + captopril — manage heart failure symptoms while awaiting surgery', rationale: 'Medical management: diuretics reduce pulmonary congestion, ACEi (captopril) reduces afterload and LR shunt volume. This is TEMPORIZING — not definitive treatment. Surgery must not be delayed indefinitely.' }
    ],
    incorrect: [
      { id: 'watchful-wait-vsd', name: 'Continue observation — small VSDs close spontaneously', rationale: 'SMALL muscular VSDs (<3mm) may close spontaneously by age 2-3. This VSD is LARGE (8mm), symptomatic, with rising PA pressures. It will NOT close spontaneously. Further delay risks irreversible Eisenmenger syndrome. Surgery is urgent.' },
      { id: 'repair-eisenmenger', name: 'Proceed with VSD repair — she needs her defect fixed', rationale: 'Eisenmenger syndrome (complete reversal to R→L shunting + irreversible pulmonary vascular disease) = VSD closure is CONTRAINDICATED and LETHAL. Closing the VSD removes the \'pop-off valve\' — RV has nowhere to vent → RV failure → death. This patient is borderline — catheterization to assess reversibility is essential before deciding on repair.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Eisenmenger syndrome: chronic large L→R shunt → pulmonary hypertension → irreversible pulmonary vascular disease → R→L shunt reversal → cyanosis. Once established, VSD closure is lethal. Surgical window is before irreversible PVD.', 'VSD closure indications: Qp:Qs >2:1, symptoms (failure to thrive, recurrent infections), rising PA pressure. Small asymptomatic VSDs with normal PA pressure: observation.', 'Eisenmenger management: avoid vasodilators (reduce SVR → worsen R→L shunting), avoid hypoxia/acidosis, pulmonary vasodilators (bosentan, sildenafil), avoid pregnancy (very high mortality).'],
    boardPearls: ['Most common congenital heart defect overall: VSD. Most common CHD requiring surgery: VSD.', 'Fixed split S2 = ASD (not VSD). VSD: harsh holosystolic murmur at LLSB. Smaller VSD = louder murmur ("maladie de Roger" — very small VSD, loud murmur, benign).', 'Qp:Qs ratio: >2:1 = significant overcirculation → intervention needed. Measured by cardiac catheterization or estimated by echo.']
  },
  references: [{ id: 'StatPearls', title: 'Large VSD — Eisenmenger Syndrome Prevention', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK560540/', openAccess: true }]
};
