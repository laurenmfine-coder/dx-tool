/* emr-data/tetralogy-of-fallot.js — Tetralogy of Fallot — Hypercyanotic (Tet) Spell Management */
window.CASES = window.CASES || {};
window.CASES['tetralogy-of-fallot'] = {
  id: 'tetralogy-of-fallot', name: 'Marcus Reed', age: '4M', dob: '2025-11-30',
  mrn: 'RDX-2026-38542', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Tetralogy of Fallot — Hypercyanotic (Tet) Spell Management',
  diagnosis: 'Tetralogy of Fallot — Hypercyanotic (Tet) Spell Management',
  presentation: {
    hpi: '4-month-old male with known TOF (VSD + overriding aorta + pulmonary stenosis + RVH — \'boot-shaped heart\' on CXR). Brought in by parents: sudden onset crying, extreme cyanosis, SpO2 50%, inconsolable. This is a hypercyanotic (Tet) spell — increased pulmonary vascular resistance or decreased SVR → increased R→L shunting → severe desaturation.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: '82/50', HR: '198', RR: '52', Temp: '37.4°C', SpO2: '50%' },
  labs: { 'Echo (prior)': 'Large perimembranous VSD, overriding aorta, severe RVOTO, RVH — TOF confirmed', 'ABG': 'pH 7.18, PaO2 32 (severely low), PaCO2 52', 'CBC': 'Hgb 14.2 (polycythemia — compensatory)' },
  orders: {
    correct: [
      { id: 'knee-chest', name: 'Knee-chest position IMMEDIATELY — increases SVR, reduces R→L shunt', rationale: 'Knee-chest position compresses the femoral arteries → increases systemic vascular resistance (SVR) → reduces right-to-left shunting through VSD → more blood flows to lungs. This is the first and most critical intervention for a Tet spell.' },
      { id: 'morphine-tet', name: 'Morphine 0.1mg/kg IV/SC — reduces infundibular spasm and tachypnea', rationale: 'Morphine: (1) reduces hyperpnea (which worsens R→L shunting), (2) reduces infundibular muscle spasm (the RVOT obstruction), (3) sedates the infant, reducing O2 consumption. Do NOT give O2 alone — it will not correct the shunt.' },
      { id: 'phenylephrine-tet', name: 'Phenylephrine 0.02mg/kg IV — alpha-agonist to increase SVR if not responding to knee-chest', rationale: 'Phenylephrine is a pure alpha-agonist that raises SVR without increasing HR (unlike epinephrine). This is the pharmacological equivalent of knee-chest position. Use for refractory Tet spells.' }
    ],
    incorrect: [
      { id: 'o2-only-tet', name: 'Give high-flow O2 — cyanosis requires oxygen', rationale: 'O2 alone does not treat a Tet spell — the problem is right-to-left shunting at the VSD level, so increasing FiO2 in the alveoli cannot correct the shunt. Knee-chest + morphine + phenylephrine to increase SVR and reduce spasm are the correct treatments.' },
      { id: 'furosemide-tet', name: 'IV furosemide — cyanotic heart disease, may have pulmonary congestion', rationale: 'TOF is a RIGHT-TO-LEFT shunt causing cyanosis from REDUCED pulmonary blood flow — not pulmonary congestion. Diuretics would worsen dehydration and hemoconcentration, potentially worsening the spell. Furosemide is used for LEFT-to-right shunts with overcirculation (VSD, PDA).' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Tet spell treatment: (1) Knee-chest position (increases SVR), (2) Morphine 0.1mg/kg (reduces spasm + hyperpnea), (3) Propranolol (reduces infundibular spasm long-term), (4) Phenylephrine if refractory (increases SVR pharmacologically).', 'TOF physiology: pulmonary stenosis → RVOTO → right-to-left VSD shunt → cyanosis. Severity of RVOTO determines degree of cyanosis. Cyanosis worsens with: crying, feeding, dehydration, fever, exercise.', 'Boot-shaped heart on CXR: upturned cardiac apex (RV hypertrophy) + concave pulmonary artery segment. Pulmonary vascularity decreased.'],
    boardPearls: ['TOF: most common CYANOTIC CHD overall (after newborn period). TGA is most common at birth. TOF presents 1-6 months as PDA closes.', 'Blalock-Taussig shunt: subclavian artery → pulmonary artery anastomosis. Palliative shunt to increase pulmonary blood flow until complete repair (total surgical correction at 3-6 months).', '22q11 deletion (DiGeorge): associated in ~15% of TOF. Screen with FISH. Hypocalcemia (no parathyroids), immune deficiency (no thymus), conotruncal defects.']
  },
  references: [{ id: 'StatPearls', title: 'Tetralogy of Fallot — Hypercyanotic (Tet) Spell Management', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK557628/', openAccess: true }]
};
