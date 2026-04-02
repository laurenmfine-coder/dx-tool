/* emr-data/croup.js — Croup: Westley Score + Dexamethasone */
window.CASES = window.CASES || {};
window.CASES['croup'] = {
  id: 'croup', name: 'Ethan Park', age: '2M', dob: '2024-01-15',
  mrn: 'RDX-2026-12881', setting: 'Pediatric ED', category: 'pediatric', acuity: 2,
  chiefComplaint: '2-year-old male — barking cough, stridor at rest, mild retractions',
  diagnosis: 'Moderate Croup (Laryngotracheobronchitis) — Parainfluenza Virus',
  presentation: {
    hpi: '2M brought by parents. 2 days of URI symptoms. Tonight: sudden onset barking seal-like cough, inspiratory stridor at rest, mild subcostal retractions. Worse when agitated. Better when held upright in cool night air. Afebrile. No drooling. No toxic appearance. No tripod positioning. Westley croup score: stridor at rest (2) + moderate retractions (2) + air entry mildly decreased (1) + no cyanosis (0) + normal consciousness (0) = 5 = MODERATE.',
    pmh: ['Born full-term', 'No prior croup', 'UTD immunizations (including Hib — epiglottitis prophylaxis)'],
    meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '96/62', HR: '128', RR: '36', Temp: '37.6°C', SpO2: '95% RA' },
  labs: {
    'Westley Croup Score': 'Stridor at rest (2) + Retractions moderate (2) + Air entry mildly reduced (1) + No cyanosis (0) + Normal level of consciousness (0) = 5 = MODERATE croup',
    'CXR (PA)': 'Steeple sign — subglottic narrowing on AP view. Confirms croup diagnosis.',
    'Neck XR (lateral)': 'No thumb sign (rules out epiglottitis — thumb-shaped epiglottis). Subglottic narrowing confirmed.'
  },
  orders: {
    correct: [
      { id: 'dexa-croup', name: 'Dexamethasone 0.6 mg/kg PO/IM × 1 dose (max 10mg)', rationale: 'Single dose dexamethasone is the cornerstone of croup treatment. Reduces laryngeal edema within 1-2h, reduces intubation and return visits. PO dexamethasone is as effective as IM — give orally if possible (no needle, easier compliance).' },
      { id: 'racemic-epi', name: 'Racemic epinephrine nebulized 0.5mL in 2.5mL NS — moderate/severe croup', rationale: 'Racemic epinephrine causes vasoconstriction of laryngeal mucosa, rapidly improves stridor (within 10-30 min). Effect is temporary (2-3h) — observe for 2-4h after administration for rebound stridor. Can be repeated.' },
      { id: 'observe-croup', name: 'Observe 2-4h post-racemic epi before discharge decision', rationale: 'Rebound stridor from epinephrine wearing off can occur 2-4h after administration. Do not discharge immediately after racemic epi. If stridor returns, additional treatment or admission required.' },
      { id: 'calm-croup', name: 'Minimize procedures — keep child calm in parent\'s arms, avoid agitation', rationale: 'Crying and agitation dramatically worsen upper airway obstruction in croup. Keep the child as calm as possible — in parent\'s lap, avoid IV access and blood draws unless absolutely necessary. A calm child is better treatment than most medications.' }
    ],
    incorrect: [
      { id: 'examine-oropharynx', name: 'Directly examine the oropharynx — need to look at the throat', rationale: 'DO NOT directly examine the oropharynx if epiglottitis is possible. Epiglottitis differentiation: toxic appearance, drooling, tripod positioning, muffled "hot potato" voice, no barking cough → do NOT examine. Croup: barking cough, subglottic on imaging → examination is acceptable but avoid agitation.' },
      { id: 'abx-croup', name: 'Amoxicillin — may be bacterial superinfection', rationale: 'Croup is viral (parainfluenza, RSV, adenovirus). Antibiotics have no role. Bacterial tracheitis (toxic appearance, high fever, failure to respond to croup treatment, membrane on scope) is a different entity requiring antibiotics.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Croup (LTB): barking cough + inspiratory stridor ± retractions in 6 months to 3 years. Parainfluenza type 1 most common. Steeple sign on CXR (not required for diagnosis). Viral — no antibiotics.',
      'Dexamethasone 0.6 mg/kg × 1 dose PO (preferred) or IM. Works for mild, moderate, AND severe croup. Oral is as effective as IM. Single dose is sufficient.',
      'Westley score: ≤2 = mild (dexamethasone, discharge), 3-5 = moderate (dexamethasone + racemic epi, observe 2-4h), ≥6 = severe (racemic epi + dexamethasone, heliox if available, ICU consideration).',
      'Minimize agitation — crying worsens airway obstruction. Keep child in parent\'s arms. Avoid unnecessary procedures.'
    ],
    boardPearls: [
      'Epiglottitis vs croup: Epiglottitis — toxic, drooling, tripod position, muffled hot-potato voice, no barking cough, thumb sign on lateral XR (vs steeple sign in croup). Hib vaccine has dramatically reduced epiglottitis (now more common in adults).',
      'Bacterial tracheitis: pseudomembrane formation in trachea. Looks like severe croup but does not respond to racemic epi or steroids. Toxic appearance, high fever. Requires bronchoscopy + antibiotics (MRSA coverage).',
      'Heliox (helium-oxygen mixture 70:30): reduces air turbulence in narrowed airway → improved gas exchange. Bridges time while awaiting steroid effect. Used for severe croup.',
      'Spasmodic croup: recurrent brief croup episodes, often at night, without fever. Allergic/atopic mechanism. Responds rapidly to cool air. Managed same as viral croup.'
    ]
  },
  references: [{ id: 'StatPearls-Croup', title: 'Croup', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK431temp/', openAccess: true }]
};
