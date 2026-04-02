/* CASE: copd-v2 — Bernard Collins — COPD: NIV Failure, Intubation Decision */
window.CASES = window.CASES || {};
window.CASES['copd-v2'] = {
  id: 'copd-v2', name: 'Bernard Collins', age: '71M', dob: '1955-02-26',
  mrn: 'MRN-121842', setting: 'ED → Medical ICU',
  chiefComplaint: 'COPD exacerbation on NIV 2 hours — pH falling, not improving, intubation decision',
  diagnosis: 'Severe COPD Exacerbation — NIV Failure, Hypercapnic Respiratory Failure',
  category: 'pulmonary', acuity: 1,
  continuityNote: 'Prior encounter: copd-v1 — Bernard Collins, 71M GOLD COPD stage D, 40 pack-year smoker. Presented with 3-day worsening dyspnea, increased sputum production. Started bronchodilators, steroids, antibiotics, BiPAP 10/5 initiated 2 hours ago.',
  presentation: {
    hpi: 'Bernard Collins, 71M, on BiPAP for 2 hours for severe COPD exacerbation. Repeat ABG now shows: pH 7.26 (down from 7.28), PaCO2 72 (up from 68), PaO2 58 on BiPAP settings IPAP 14/EPAP 6, FiO2 0.45. He is increasingly agitated and pulling at his mask. RR 34. He cannot speak in full sentences. He told his daughter 6 months ago he "never wants a breathing tube." The daughter is at bedside and is asking the team not to intubate per her father\'s wishes. The patient is currently alert enough to make decisions — briefly.',
    pmh: ['COPD GOLD Stage D', '40 pack-year smoking (quit 5 years ago)', 'Prior intubation for COPD exacerbation 2 years ago — successfully extubated after 4 days'],
    meds: ['BiPAP 14/6 (not tolerating)', 'Ipratropium + albuterol nebs continuous', 'Methylprednisolone 125mg IV', 'Azithromycin 500mg IV', 'Magnesium sulfate 2g IV']
  },
  vitals: { BP: '162/94', HR: '118', RR: '34', Temp: '38.2°C', SpO2: '88% on BiPAP FiO2 45%', GCS: '13 (agitated)' },
  labs: {
    'ABG (2h into BiPAP)': 'pH 7.26 (H — WORSENING) | PaCO2 72 mmHg (H, rising) | PaO2 58 mmHg (L) | HCO3 31 (chronic compensation) | SpO2 88%',
    'Initial ABG (on arrival)': 'pH 7.28, PaCO2 68, PaO2 52 — baseline hypercapnia + acute-on-chronic',
    'CXR': 'Hyperinflation, flattened diaphragms (chronic). Increased right lower lobe density — possible consolidation/pneumonia as trigger.',
    'BMP': 'Na 138, K 3.8, Cr 1.1, Bicarb 31 (chronic)'
  },
  orders: {
    correct: [
      { id: 'goals-copd', name: 'Immediate goals-of-care conversation with patient — he can still make decisions', rationale: 'Bernard is alert enough to participate in the decision. His prior stated wishes were against intubation, but he was successfully extubated before and may not fully understand that context. Have a direct, brief goals-of-care conversation NOW while he can participate: "Your breathing is getting worse on the mask. A breathing tube may save your life. Is that something you want?" Document his decision.' },
      { id: 'optimize-niv', name: 'Optimize NIV settings — increase IPAP to 18-20, FiO2 to 0.6, tighter mask fit', rationale: 'Before declaring NIV failure: ensure optimal settings. IPAP 14 may be insufficient — increase to 18-20 cmH2O. Ensure mask fit is airtight. Add heated humidification if not already on.' },
      { id: 'heliox', name: 'Consider heliox (helium-oxygen) — reduces airway resistance', rationale: 'Heliox (79% helium / 21% O2) reduces gas density and turbulent flow in obstructed airways. Can improve CO2 clearance and buy time for NIV or medications to work. Temporizing measure.' },
      { id: 'intubation-prep', name: 'Prepare for intubation — if patient agrees or deteriorates to obtundation', rationale: 'NIV failure criteria met (pH worsening, rising PaCO2, agitation, respiratory rate 34). Prepare for intubation with RSI. Use ketamine for induction (bronchodilating). Use rocuronium. Prepare for post-intubation ventilation challenges (auto-PEEP, permissive hypercapnia).' }
    ],
    incorrect: [
      { id: 'no-discuss', name: 'Proceed with intubation — medical emergency, no time for discussion', rationale: 'Bernard is conscious and can participate in decision-making. His previously stated wishes cannot be overridden by family or physician assumption of best interest if he has decisional capacity. The 60 seconds for a goals-of-care conversation is ethically and legally required.' },
      { id: 'high-o2-copd', name: 'Increase FiO2 to 1.0 — SpO2 88% is too low', rationale: 'Hypercapnic COPD patients: target SpO2 88-92%. Hyperoxia suppresses hypoxic drive and causes hypercapnic respiratory failure (Haldane effect). SpO2 88% in COPD exacerbation is appropriate. Do not over-oxygenate.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'NIV failure criteria (intubation indicated): worsening acidosis (pH <7.25 or falling despite 2h NIV), rising PaCO2 despite optimal NIV, GCS decline, respiratory arrest, hemodynamic instability, inability to protect airway, NIV intolerance.',
      'Goals of care in respiratory failure: if patient has decisional capacity, they participate in intubation decisions regardless of urgency. Document conversation and decision. Daughter\'s prior-stated wishes are informative but not binding if patient is competent.',
      'Post-intubation COPD ventilation: auto-PEEP (breath stacking) is the major hazard — use low respiratory rate (10-12), long expiratory time (I:E 1:4-5), accept permissive hypercapnia (pH ≥7.20). Reconnect to vent slowly after intubation.',
      'Target SpO2 88-92% in hypercapnic COPD. Hyperoxia causes V/Q mismatch redistribution and Haldane effect → worsens CO2 retention.'
    ],
    boardPearls: [
      'NIV (BiPAP) reduces intubation rate, ICU stay, and mortality in COPD exacerbation with pH 7.25-7.35. Most effective when started early.',
      'Indications for mechanical ventilation in COPD: pH <7.25 despite NIV, inability to tolerate mask, altered consciousness, cardiovascular instability, pH 7.25-7.35 with NIV failure after 2h.',
      'Auto-PEEP in ventilated COPD: air trapping from prolonged expiratory time. Causes hemodynamic collapse (reduces venous return). Disconnect from ventilator for 30-60 seconds to allow full exhalation if auto-PEEP suspected.',
      'Post-exacerbation COPD: escalate maintenance inhaler therapy (LAMA + LABA + ICS for GOLD E). Pulmonary rehabilitation reduces future exacerbation risk. Smoking cessation if still smoking.'
    ]
  },
  references: [{ id: 'StatPearls-COPD', title: 'Chronic Obstructive Pulmonary Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK559281/', openAccess: true }]
};
