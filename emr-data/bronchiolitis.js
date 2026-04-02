window.CASES = window.CASES || {};
window.CASES['bronchiolitis'] = {
  id: 'bronchiolitis', name: 'Emma Sullivan', age: '5mo', dob: '2025-10-14',
  mrn: 'RDX-2026-71229', setting: 'Pediatric ED → PICU',
  chiefComplaint: 'RSV bronchiolitis — 5-month-old, SpO2 82%, high-flow nasal cannula ordered',
  diagnosis: 'Severe RSV Bronchiolitis — High-Flow Nasal Cannula Therapy',
  category: 'pediatric', acuity: 2,
  presentation: {
    hpi: '5-month-old female, 3 days of rhinorrhea, then worsening cough, increased work of breathing, poor feeding (taking <half of normal). Born at 35 weeks (late premature). SpO2 82% on RA. Nasal flaring, subcostal retractions, head bobbing. Tachypnea RR 60. CXR: hyperinflation + peribronchial cuffing, patchy infiltrates.',
    pmh: ['Born 35 weeks (late preterm — higher bronchiolitis severity risk)'],
    meds: ['None'], allergies: ['NKDA']
  },
  vitals: { Temp: '37.8°C', HR: '168', RR: '60', SpO2: '82% RA → 94% 2L NC', Weight: '6.2 kg' },
  labs: {
    'RSV nasal swab': 'Positive RSV A',
    'CXR': 'Hyperinflation + peribronchial thickening + scattered atelectasis',
    'ABG (if severe)': 'pH 7.32, PCO2 52 (rising) — impending respiratory failure'
  },
  orders: {
    correct: [
      { id: 'hfnc-bronch', name: 'High-flow nasal cannula (HFNC) — start at 2L/kg/min, FiO2 to maintain SpO2 >90%', rationale: 'HFNC is the most effective non-invasive respiratory support for bronchiolitis. It washes out nasopharyngeal dead space, delivers heated humidified oxygen, and provides modest positive pressure. Start at 2L/kg/min. The PARIS trial showed HFNC reduced treatment failure vs standard O2 in severe bronchiolitis.' },
      { id: 'suction-bronch', name: 'Nasal suctioning before feeds — removes secretions obstructing upper airway', rationale: 'Infants are obligate nose breathers. Nasal suctioning clears secretions and significantly improves work of breathing in bronchiolitis. Most effective intervention besides HFNC.' },
      { id: 'fluids-bronch', name: 'IV fluids or NG feeds — she is taking <50% normal feeds', rationale: 'Inadequate fluid intake from tachypnea and increased work of breathing → dehydration. NG feeds if breathing stabilizes, IV fluids if too tachypneic to feed safely.' }
    ],
    incorrect: [
      { id: 'albuterol-bronch', name: 'Albuterol nebulization — wheeze is present', rationale: 'Albuterol is NOT recommended for bronchiolitis (AAP 2014 guidelines). Bronchiolitis wheeze is from mucosal edema and secretions — NOT bronchospasm (so bronchodilators don\'t help). Multiple RCTs and meta-analyses confirm no benefit. Do not use.' },
      { id: 'steroids-bronch', name: 'Dexamethasone — reduce airway inflammation', rationale: 'Corticosteroids are NOT recommended for bronchiolitis (AAP guidelines). Multiple large RCTs show no benefit. The Cochrane review: no improvement in hospitalization, duration, or readmissions.' },
      { id: 'antibiotics-bronch', name: 'Amoxicillin — fever and infiltrate on CXR', rationale: 'Bronchiolitis is a viral illness. Secondary bacterial pneumonia is rare (<2%). Antibiotics are NOT routinely indicated. The CXR findings (peribronchial thickening, atelectasis) are typical viral bronchiolitis — not bacterial pneumonia.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Bronchiolitis treatment is SUPPORTIVE ONLY: oxygen, suctioning, hydration. Albuterol, steroids, antibiotics, and chest physiotherapy are NOT recommended (multiple RCTs, AAP guidelines).',
      'HFNC is the most effective non-invasive respiratory support. Start at 2L/kg/min. The PARIS trial showed HFNC reduced treatment failure vs standard oxygen in infants with severe bronchiolitis.',
      'Palivizumab (RSV prophylaxis): monthly IM for RSV season in high-risk infants (<29 weeks, CHD, chronic lung disease). Not a treatment — prevention only.',
      'Intubation criteria: PCO2 rising + increasing work of breathing + SpO2 <90% despite HFNC at maximum flow → intubation with lung-protective ventilation.'
    ],
    boardPearls: [
      'Bronchiolitis risk factors for severe disease: age <3 months, prematurity, congenital heart disease, chronic lung disease, immunodeficiency.',
      'RSV season: October-March in Northern Hemisphere. RSV A typically causes more severe disease than RSV B.',
      'Nirsevimab (Beyfortus): long-acting RSV monoclonal antibody for all infants ≤8 months entering their first RSV season (since 2023). Replaces palivizumab for most indications.',
      'HFNC failure predictors: RR >70 after 1 hour, SpO2/FiO2 ratio <200, Retractions Score >7 after 1 hour → early intubation before respiratory arrest.'
    ]
  },
  references: [{ id: 'StatPearls-Bronchiolitis', title: 'Bronchiolitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459301/', openAccess: true }]
};
