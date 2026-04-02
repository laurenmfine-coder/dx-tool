window.CASES=window.CASES||{};
window.CASES['psychopharmacology']={
  id:'psychopharmacology',name:'Thomas Brennan',age:'45M',dob:'1980-08-14',mrn:'RDX-2026-41218',
  setting:'Psychiatry Clinic',category:'psychiatric',acuity:3,
  chiefComplaint:'Treatment-resistant depression + recent serotonin syndrome scare — needs medication reconciliation',
  diagnosis:'Treatment-Resistant Depression — Serotonin Syndrome from Drug Interaction, Medication Safety Review',
  presentation:{
    hpi:'45M with severe MDD unresponsive to 3 SSRIs. His psychiatrist added tramadol (for back pain) to his current sertraline 150mg. 3 days later: agitation, tremor, hyperreflexia, diaphoresis, clonus — serotonin syndrome. Tramadol was stopped; symptoms resolved. Now stable, needs medication reconciliation and discussion of next steps for TRD.',
    pmh:['MDD — severe, 10 years','Chronic low back pain'],
    meds:['Sertraline 150mg (current)','Tramadol stopped (serotonin syndrome)'],allergies:['Tramadol — serotonin syndrome']
  },
  vitals:{BP:'128/82',HR:'78',RR:'14',Temp:'37.0°C',SpO2:'99%'},
  labs:{'PHQ-9':'21 (severe)','CMP/CBC':'Normal','TSH':'Normal'}
  ,orders:{
    correct:[
      {id:'esketamine-trd',name:'Esketamine nasal spray (Spravato) — FDA-approved for TRD',rationale:'Esketamine (intranasal S-ketamine) is FDA-approved for treatment-resistant depression (failed ≥2 antidepressants). Rapid onset (hours). TRANSFORM trials. Administered in office (REMS program — observe 2h for dissociation). Mechanism: NMDA receptor antagonism → rapid glutamate surge → AMPA receptor upregulation.'},
      {id:'augment-trd',name:'Augmentation strategy — add lithium, aripiprazole, or bupropion to sertraline',rationale:'TRD augmentation: (1) lithium (evidence for suicide reduction), (2) atypical antipsychotics (aripiprazole, quetiapine, olanzapine — FDA-approved adjuncts), (3) bupropion (different mechanism — NE/DA), (4) thyroid hormone (T3), (5) MAOIs (after adequate washout — highest efficacy for TRD). Aripiprazole + SSRI is the most commonly used and studied combination.'},
      {id:'no-tramadol-serotonin',name:'Avoid all serotonergic combinations — document serotonin syndrome risk',rationale:'Serotonin syndrome drug combinations to AVOID: SSRI/SNRI + tramadol, SSRI + MAOIs (fatal), SSRI + linezolid, SSRI + triptans (caution), SSRI + fentanyl/meperidine. Hunter Criteria for diagnosis: clonus is the key feature. Treatment: stop serotonergic agents, cyproheptadine, benzodiazepines.'}
    ],
    incorrect:[
      {id:'add-maoi-no-washout',name:'Start phenelzine (MAOI) — most effective for TRD',rationale:'MAOIs are highly effective for TRD but require a 2-week washout from SSRIs (5 weeks from fluoxetine — long half-life). Starting MAOI without adequate washout = potentially FATAL serotonin syndrome. Plan carefully with adequate wash-out period.'},
      {id:'tramadol-ok',name:'Re-start tramadol — the reaction was coincidental',rationale:'Tramadol has serotonin reuptake inhibitory properties AND weak opioid effects. In combination with SSRIs, it reliably causes serotonin syndrome. This reaction was NOT coincidental. Document allergy/adverse reaction. Use alternative analgesics: acetaminophen, NSAIDs (monitor BP/renal), gabapentin, duloxetine (for neuropathic — but NOTE: duloxetine + sertraline also increases serotonin load).'}
    ]
  },
  teachingPoints:{
    keyLearning:['Serotonin syndrome: clonus + hyperreflexia + agitation + hyperthermia. Hunter Criteria: inducible clonus + 1 of: agitation/diaphoresis/tremor/hyperreflexia + fever >38°C = serotonin syndrome. Onset: HOURS (vs NMS: DAYS).','Tramadol is serotonergic — avoid with SSRIs/SNRIs. Other dangerous combos: SSRI + MAOIs (fatal), SSRI + linezolid, SSRI + methylene blue (surgery).','TRD options: esketamine nasal spray (FDA-approved, rapid onset), ECT (most effective overall, 80-90% response), augmentation (lithium, atypical APs, bupropion), MAOIs with washout.','MAOI washout: 2 weeks from most SSRIs; 5 weeks from fluoxetine (long half-life). Starting MAOI without washout = fatal serotonin syndrome risk.'],
    boardPearls:['Serotonin syndrome vs NMS: SS = hours onset, clonus/hyperreflexia, caused by serotonergic drugs. NMS = days onset, lead-pipe rigidity, caused by antidopaminergic drugs. Both have hyperthermia.','Cyproheptadine: 5-HT2A antagonist — treatment for serotonin syndrome. 12mg loading dose, 2mg q2h.','ECT (electroconvulsive therapy): fastest and most effective treatment for severe TRD (80-90% response), psychotic depression, catatonia, suicidal emergency. Retrograde amnesia is the main side effect.','Bupropion: NE/DA reuptake inhibitor. No sexual side effects, weight-neutral, helps smoking cessation. Contraindicated in eating disorders (lowers seizure threshold) and seizure history.']
  },
  references:[{id:'StatPearls-SerotoninSyndrome',title:'Serotonin Syndrome',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK482377/',openAccess:true}]
};
