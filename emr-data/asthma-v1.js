window.CASES = window.CASES || {};
window.CASES['asthma-v1'] = {
  id: 'asthma-v1', name: 'Marcus Lee', age: '17M', dob: '2008-05-14',
  mrn: 'RDX-2026-38219', setting: 'ED', category: 'pulmonary', acuity: 2,
  chiefComplaint: 'Acute asthma exacerbation — SpO2 89%, not responding to home albuterol',
  diagnosis: 'Moderate-Severe Acute Asthma Exacerbation',
  presentation: {
    hpi: '17M with moderate persistent asthma (on ICS/LABA). 2 days of URI symptoms, worsening wheeze and dyspnea. Used albuterol MDI ×8 puffs at home — inadequate relief. SpO2 89% on RA, RR 28, accessory muscle use, speaks in phrases. Peak flow 45% predicted.',
    pmh: ['Moderate persistent asthma — on fluticasone/salmeterol', 'Prior hospitalization × 1 (no ICU)'],
    meds: ['Fluticasone/salmeterol 250/50 BID (ICS/LABA)','Montelukast 10mg'], allergies: ['NKDA']
  },
  vitals: { BP: '128/74', HR: '118', RR: '28', Temp: '37.8°C', SpO2: '89%', 'Peak Flow': '45% predicted' },
  labs: {
    'ABG (if not improving)': 'pH 7.38, PaCO2 38 — normal PaCO2 in severe asthma = WARNING (patient tiring)',
    'CXR': 'Hyperinflation, no infiltrate, no pneumothorax'
  },
  orders: {
    correct: [
      { id: 'albuterol-cont', name: 'Continuous nebulized albuterol 10-15mg/hr OR albuterol 2.5mg q20min × 3 doses + ipratropium 0.5mg q20min × 3', rationale: 'Moderate-severe exacerbation: continuous or frequent SABA + ipratropium is superior to SABA alone (NAEPP guidelines). Ipratropium adds bronchodilation via different mechanism for first 3 doses (benefit diminishes after).' },
      { id: 'steroids-asthma', name: 'Prednisone 40-60mg PO or methylprednisolone 125mg IV — systemic corticosteroids', rationale: 'Systemic steroids reduce airway inflammation, speed resolution, reduce hospitalizations and relapse. Give within 1 hour of ED arrival. IV vs PO equivalent efficacy — use IV only if cannot swallow.' },
      { id: 'magnesium-asthma', name: 'Magnesium sulfate 2g IV over 20 min — for severe/refractory exacerbation', rationale: 'IV magnesium relaxes smooth muscle via calcium antagonism. Reserved for severe exacerbations (SpO2 <90%, FEV1/PF <40% despite initial bronchodilator therapy). Reduces hospitalization rate.' },
      { id: 'heliox-asthma', name: 'Consider heliox (helium-oxygen mixture) if SpO2 not improving — reduces airway resistance', rationale: 'Heliox (70:30 or 80:20 helium:oxygen) reduces turbulent airflow resistance. Used for severe refractory asthma as bridge to intubation. Less dense than air-oxygen — improves delivery of nebulized medications.' }
    ],
    incorrect: [
      { id: 'normal-paco2-safe', name: 'Patient improving — PaCO2 normal, no intervention needed', rationale: 'DANGEROUS: Normal PaCO2 (38-40) in a severe asthma exacerbation is an ominous sign — the expected response to severe asthma is hyperventilation with LOW PaCO2. Normal or rising PaCO2 indicates respiratory fatigue and impending respiratory failure. Prepare for intubation.' },
      { id: 'salmeterol-acute', name: 'Give extra salmeterol doses — he is on this at home', rationale: 'LABA (salmeterol) is NOT for acute relief — it is for maintenance only. The SMART trial showed increased asthma mortality with LABA monotherapy. In acute exacerbation, use SABA (albuterol). Do not give extra LABA doses.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Normal PaCO2 in severe asthma = impending respiratory failure (patient tiring). Expected: low PaCO2 from hyperventilation. Normal or rising = intubate preparation.',
      'Magnesium sulfate 2g IV for severe asthma not responding to standard treatment. Reduces hospitalizations.',
      'Asthma step therapy: SABA PRN → low-dose ICS → ICS/LABA → high-dose ICS/LABA + LTRA → biologic (omalizumab for atopic, mepolizumab/dupilumab for eosinophilic).',
      'LABAs are NEVER used alone in asthma (SMART trial — mortality increase). Always combined with ICS.'
    ],
    boardPearls: [
      'RSV and influenza trigger severe asthma exacerbations in children — viral URI is the most common trigger.',
      'Risk factors for fatal asthma: prior intubation, prior ICU admission, ≥2 hospitalizations in past year, poor perception of severity, low SES, urban environment.',
      'Intubation in asthma is high-risk: dynamic hyperinflation (breath stacking), auto-PEEP, hypotension post-intubation. Permissive hypercapnia, low RR, long expiratory time, avoid PEEP.',
      'SABA overuse (>2 canisters/month): marker of uncontrolled asthma requiring step-up therapy, not just more rescue medication.'
    ]
  },
  references: [{ id: 'StatPearls-Asthma', title: 'Asthma', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430901/', openAccess: true }]
};
