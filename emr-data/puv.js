window.CASES = window.CASES || {};
window.CASES['puv'] = {
  id: 'puv', name: 'Marcus Chen', age: '2M', dob: '2026-01-31',
  mrn: 'RDX-2026-17444', setting: 'Peds Urology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Posterior Urethral Valves — Males Only', diagnosis: 'Posterior Urethral Valves — Males Only',
  presentation: {
    hpi: '2-month-old male. Referred for bilateral hydronephrosis found on prenatal US. Now: poor urinary stream, dribbling, palpable bladder, bilateral flank masses (hydronephrotic kidneys). VCUG shows: \'spinning top\' posterior urethra, bilaterally refluxing ureters, thickened trabeculated bladder. PUV confirmed. Creatinine 0.8 (elevated for age) — renal dysplasia from prenatal obstruction.',
    pmh: ['See encounter'], meds: ['See encounter'], allergies: ['NKDA']
  },
  vitals: { BP: '92/58', HR: '148', RR: '38', Temp: '37.4°C', SpO2: '98%' },
  labs: { 'VCUG (voiding cystourethrogram)': 'Obstructing leaflets in posterior urethra (spinning top deformity). Bilateral grade IV VUR. Heavily trabeculated, thick-walled bladder.', 'Renal US': 'Bilateral hydronephrosis + hydroureter. Echogenic renal cortex bilaterally (renal dysplasia).', 'Creatinine': '0.8 mg/dL (H for age — indicates significant renal impairment)', 'Urine culture': 'E. coli UTI — UTI in any male infant = VUR/PUV workup' },
  orders: {
    correct: [{ id: 'valve-ablation', name: 'Cystoscopic valve ablation — primary definitive treatment', rationale: 'Transurethral valve ablation (cystoscopy) is the definitive treatment. The obstructing mucosal leaflets in the posterior urethra are incised. Catheter drainage prior to ablation. Improvement in hydronephrosis expected over weeks-months.' },
      { id: 'long-term-urology', name: 'Lifelong urology follow-up — PUV bladder dysfunction persists after ablation', rationale: 'The \'PUV bladder\': even after valve ablation, the bladder remains dysfunctional (high pressure, non-compliant, poor emptying). CIC, anticholinergics, and ongoing surveillance are needed lifelong. 25-50% of PUV patients develop ESRD by adulthood.' }],
    incorrect: [{ id: 'vcug-not-needed', name: 'VCUG is unnecessary — US shows hydronephrosis, enough for diagnosis', rationale: 'VCUG is essential for PUV diagnosis — ultrasound shows the CONSEQUENCES (hydronephrosis) but VCUG shows the CAUSE (the posterior urethral valve and bladder trabeculation). US alone cannot diagnose PUV.' },
      { id: 'resolve-puv', name: 'Catheter drainage for 2 weeks and observe — may resolve', rationale: 'PUV does not resolve with catheter drainage. The valves must be ablated cystoscopically. Catheter drainage temporarily decompresses the system but is not definitive. Delay risks ongoing renal damage.' }]
  },
  teachingPoints: {
    keyLearning: ['PUV is a disease of males only — the posterior urethra is an exclusively male structure. ANY male infant with bilateral hydronephrosis → VCUG to rule out PUV.', 'Renal function at birth reflects IN UTERO damage — the valves cause obstruction from early in fetal life. Creatinine nadir (lowest point) at 1 year predicts long-term renal outcome.', 'PUV bladder persists after valve ablation — high-pressure, non-compliant, poor compliance. CIC + anticholinergics reduce pressure, protect upper tracts.'],
    boardPearls: ['LUTO (lower urinary tract obstruction): prenatal finding of bilateral hydronephrosis + oligohydramnios + thickened bladder + keyhole sign (posterior urethra + bladder) → PUV. Prune belly sequence if severe.', 'Vesicoamniotic shunting for PUV: fetal intervention in selected severe cases (oligohydramnios threatening lung development) — controversial, evidence limited.', 'Paradoxical Nyhan creatinine: in utero, maternal kidneys clear fetal creatinine. At birth, creatinine briefly rises then falls to nadir — nadir at 1 year is the best predictor of long-term GFR.']
  },
  references: [{ id: 'StatPearls', title: 'Posterior Urethral Valves — Males Only', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK563177/', openAccess: true }]
};
