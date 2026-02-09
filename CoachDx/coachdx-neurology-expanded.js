// ============================================================================
// COACHDX NEUROLOGY EXPANDED CASE PACK
// Attending conversations for Neurology topics missing CoachDx coverage
// Created: February 7, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================

const COACHDX_NEUROLOGY_EXPANDED = {

'acute-stroke-workup': {
    id: 'acute-stroke-workup',
    title: 'Acute Ischemic Stroke - Time-Critical Decisions',
    category: 'Neurology',
    patient: { name: 'George Patel', age: 71, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Right-Sided Weakness and Slurred Speech' },
    description: 'A 71-year-old man with AFib (not on anticoagulation) presents with acute-onset right hemiparesis and aphasia. Symptoms began 90 minutes ago per witness. BP 178/96, HR 88 irregularly irregular. NIHSS 14. Non-contrast CT head shows no hemorrhage.',
    openingStatement: 'Mr. Patel has a large-vessel ischemic stroke with a last known well of 90 minutes ago. His NIHSS is 14, which puts him in the moderate-to-severe category. You have a narrow treatment window. Walk me through your decision about tPA, the blood pressure parameters, and when you escalate to thrombectomy.',
    conceptDomains: {
        'Situation': ['nihss_score', 'time_from_onset', 'ct_findings'],
        'Background': ['afib_without_anticoag', 'stroke_risk_factors'],
        'Assessment': ['large_vessel_occlusion', 'tpa_eligibility', 'hemorrhagic_conversion_risk'],
        'Recommendation': ['tpa_administration', 'bp_management', 'thrombectomy_criteria']
    },
    quickActions: ['Is he eligible for tPA?', 'What are the BP parameters?', 'Does he need thrombectomy?', 'What if the CT showed a bleed?'],
    keyTeachingPoints: [
        'tPA window: ≤4.5 hours from symptom onset (3 hours in certain populations). His 90 minutes is well within window.',
        'BP must be <185/110 BEFORE tPA, then <180/105 for 24 hours AFTER tPA',
        'NIHSS ≥6 with anterior large vessel occlusion → consider mechanical thrombectomy up to 24 hours (with perfusion imaging)',
        'CTA of head and neck should be ordered simultaneously — do not delay tPA to get CTA results',
        'Uninstructed AFib is the precipitant — this is a cardioembolic stroke. He needs anticoagulation long-term.'
    ],
    sbarTemplate: {
        situation: 'I have a 71-year-old man with acute ischemic stroke, NIHSS 14, last known well 90 minutes ago. CT negative for hemorrhage.',
        background: 'AFib, not anticoagulated. No recent surgery, no history of ICH.',
        assessment: 'Large vessel territory stroke, tPA eligible. Need CTA to evaluate for thrombectomy candidacy.',
        recommendation: 'Administering tPA now. BP controlled to <185/110. CTA ordered. Neurology and interventional neuroradiology notified for possible thrombectomy.'
    },
    defined_responses: {
        'tpa eligibility': 'Within 4.5-hour window, CT negative for hemorrhage, NIHSS 14 (significant deficit). Key contraindications to check: no recent surgery/trauma, no active bleeding, no prior ICH, platelets >100K, INR <1.7. His AFib raises the question of anticoagulation — if he is NOT on anticoagulants, tPA is fine. If on a DOAC, need to check drug level or time of last dose.',
        'bp parameters': 'Before tPA: must lower to <185/110. Use IV labetalol 10-20mg or nicardipine drip. After tPA: maintain <180/105 for 24 hours. If NOT getting tPA: permissive hypertension up to 220/120 is acceptable — the elevated BP is maintaining perfusion to the penumbra. His 178/96 is actually fine for tPA eligibility — no treatment needed.',
        'thrombectomy': 'NIHSS ≥6 + anterior large vessel occlusion (ICA or M1 MCA) = thrombectomy candidate up to 24 hours from onset (DAWN and DEFUSE-3 trials). Get CTA of head and neck to identify occlusion. Do NOT delay tPA for CTA — give tPA first, get imaging, then send to neuroIR if occlusion found. Thrombectomy improves outcomes even after tPA.',
        'hemorrhage': 'If CT showed hemorrhage: NO tPA. Reverse any anticoagulation. BP target <140 systolic (INTERACT2/ATACH-2). Neurosurgery consult for large hematomas or posterior fossa bleeds. Check coagulation studies immediately.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Stroke Module', link: '../mechanism/stroke-module.html', reason: 'Ischemic penumbra and reperfusion pathophysiology' }
    ],
    evidenceBase: { guidelines: ['AHA/ASA Acute Stroke Guidelines 2019'], openAccess: ['StatPearls: Ischemic Stroke (NBK499997)'] }
},

'status-epilepticus-mgmt': {
    id: 'status-epilepticus-mgmt',
    title: 'Status Epilepticus - Stepwise Management',
    category: 'Neurology',
    patient: { name: 'Maya Rodriguez', age: 28, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Continuous Seizure Activity' },
    description: 'A 28-year-old woman with epilepsy is brought in by EMS with ongoing generalized tonic-clonic seizure activity for 12 minutes. She was found by her roommate. Medication bottles at the scene: levetiracetam. EMS gave midazolam 10mg IM en route. She is still seizing on arrival.',
    openingStatement: 'She has been seizing for 12 minutes and benzodiazepine failed. Walk me through the timeline: what is status epilepticus, why every minute matters for brain injury, and your stepwise protocol from first-line to third-line agents.',
    conceptDomains: {
        'Situation': ['duration_of_seizure', 'benzo_failure', 'airway_status'],
        'Background': ['epilepsy_history', 'medication_noncompliance', 'precipitants'],
        'Assessment': ['convulsive_se_definition', 'refractory_se', 'nonconvulsive_se'],
        'Recommendation': ['second_line_agents', 'third_line_agents', 'intubation_criteria']
    },
    quickActions: ['First-line failed — what next?', 'When is it refractory?', 'Does she need intubation?', 'What labs do I send?'],
    keyTeachingPoints: [
        'Status epilepticus: seizure >5 minutes OR ≥2 seizures without return to baseline between them',
        'First-line: benzodiazepine (lorazepam IV or midazolam IM). She already got midazolam — can give lorazepam IV.',
        'Second-line (at 5-10 min after benzo): fosphenytoin, levetiracetam, or valproate IV. Pick one.',
        'Third-line (refractory SE at 20-30 min): intubation + continuous IV midazolam, propofol, or pentobarbital drip with continuous EEG',
        'Every minute of ongoing seizure increases NMDA-mediated excitotoxic brain injury — treat aggressively'
    ],
    sbarTemplate: {
        situation: 'I have a 28-year-old in generalized convulsive status epilepticus for 12 minutes. Midazolam IM failed in the field. She is still actively seizing.',
        background: 'Known epilepsy on levetiracetam. Possible medication noncompliance.',
        assessment: 'Established status epilepticus, benzodiazepine-resistant. Need second-line agent immediately.',
        recommendation: 'Giving lorazepam 4mg IV now as repeat first-line. Simultaneously loading fosphenytoin 20mg PE/kg IV. If still seizing at 20 minutes, preparing for intubation and continuous infusion.'
    },
    defined_responses: {
        'second line': 'After benzodiazepine failure, choose ONE second-line agent: (1) Fosphenytoin 20mg PE/kg IV at 150mg PE/min — most evidence, but avoid in cardiac disease. (2) Levetiracetam 60mg/kg IV (max 4500mg) — fewer drug interactions, but she was already on it and may be noncompliant. (3) Valproate 40mg/kg IV — good if seizure type unknown. ESETT trial showed all three are roughly equivalent. I would avoid levetiracetam since she is already on it and still seizing.',
        'refractory': 'Refractory SE = seizure continues after adequate doses of first-line benzo AND one second-line agent. This typically occurs around the 20-30 minute mark. At that point: intubate for airway protection, start continuous IV infusion (midazolam 0.2mg/kg/hr or propofol 1-2mg/kg bolus then 20-50 mcg/kg/min), and place on continuous EEG monitoring. You MUST have EEG because once paralyzed for intubation, you cannot see clinical seizures.',
        'intubation': 'Intubate if: refractory SE requiring continuous infusion, inability to protect airway (prolonged postictal state, aspiration risk), respiratory compromise from repeated benzos. Use short-acting paralytic (succinylcholine or rocuronium) — BUT remember paralysis masks ongoing seizures. Get EEG leads on before or immediately after intubation.',
        'labs': 'Immediate: glucose (most important — rule out hypoglycemia), BMP (Na, Ca, Mg), CBC, AED levels (levetiracetam level), toxicology screen, lactate. Consider: lumbar puncture if febrile (after seizure control), head CT if first seizure or focal features, ammonia if on valproate.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Status Epilepticus Module', link: '../mechanism/status-epilepticus-module.html', reason: 'GABA receptor internalization and excitotoxicity' }
    ],
    evidenceBase: { guidelines: ['AES Status Epilepticus Guidelines 2016', 'NCS Guidelines 2012'], openAccess: ['StatPearls: Status Epilepticus (NBK430686)'] }
},

'gbs-ascending-weakness': {
    id: 'gbs-ascending-weakness',
    title: 'Guillain-Barré Syndrome - Ascending Weakness',
    category: 'Neurology',
    patient: { name: 'Kevin Park', age: 42, sex: 'Male', setting: 'Emergency', acuity: 'High', chiefComplaint: 'Progressive Leg Weakness Over 3 Days' },
    description: 'A 42-year-old man presents with 3 days of progressive bilateral leg weakness now affecting his ability to walk. He had a diarrheal illness (Campylobacter) 2 weeks ago. Exam: symmetric proximal and distal LE weakness (3/5), areflexia, intact sensation. UE strength 4/5. No facial weakness yet. FVC 2.8L (predicted 4.5L).',
    openingStatement: 'Mr. Park has ascending weakness with areflexia 2 weeks after a Campylobacter infection. That combination should trigger one diagnosis immediately. But the critical question is not diagnostic — it is respiratory. His FVC is 62% of predicted. Walk me through why that number scares you and what determines whether he gets admitted to the floor or the ICU.',
    conceptDomains: {
        'Situation': ['ascending_weakness', 'areflexia', 'respiratory_compromise'],
        'Background': ['antecedent_infection', 'campylobacter_and_gbs', 'autoimmune_mechanism'],
        'Assessment': ['clinical_diagnosis', 'csf_findings', 'respiratory_monitoring'],
        'Recommendation': ['ivig_vs_plex', 'icu_criteria', 'intubation_thresholds']
    },
    quickActions: ['How do I confirm GBS?', 'When does he need the ICU?', 'IVIG or plasma exchange?', 'When do I intubate?'],
    keyTeachingPoints: [
        'GBS: acute inflammatory demyelinating polyradiculoneuropathy. Ascending weakness + areflexia + post-infectious = classic triad',
        'Respiratory failure is the #1 killer — monitor FVC and NIF every 4-6 hours',
        '20/30/40 rule: intubate if FVC <20 mL/kg, NIF weaker than -30 cmH2O, or FVC declined >30% from baseline',
        'LP shows albuminocytologic dissociation: elevated protein, normal WBC (may be normal in first week)',
        'IVIG and plasma exchange are equally effective. Do NOT give steroids — they worsen GBS.'
    ],
    sbarTemplate: {
        situation: 'I have a 42-year-old with ascending weakness and areflexia consistent with Guillain-Barré. FVC is 62% of predicted and declining.',
        background: 'Campylobacter gastroenteritis 2 weeks ago. No prior neurologic history.',
        assessment: 'GBS with respiratory compromise. FVC trending down. He needs ICU-level monitoring.',
        recommendation: 'Admitting to ICU for serial FVC and NIF monitoring every 4 hours. Starting IVIG 0.4g/kg/day for 5 days. Holding on intubation for now but threshold is FVC <20 mL/kg.'
    },
    defined_responses: {
        'confirm gbs': 'GBS is primarily a clinical diagnosis: progressive symmetric weakness (ascending), areflexia or hyporeflexia, post-infectious trigger. LP: albuminocytologic dissociation (elevated protein, normal or near-normal WBC) — but this may be normal in the first week. NCS/EMG: demyelination pattern (prolonged distal latencies, conduction block) — most useful after 2 weeks. Do NOT wait for LP or EMG to start treatment if clinical picture is clear.',
        'icu criteria': 'ICU admission for: FVC <20 mL/kg, rapid decline in FVC (>30% drop), NIF weaker than -30 cmH2O, bulbar weakness (dysphagia, inability to handle secretions), autonomic instability (labile BP, arrhythmias). His FVC at 62% predicted is concerning and trending down. The classic pattern is rapid deterioration over hours — by the time you recognize trouble, intubation may be emergent.',
        'ivig vs plex': 'IVIG (0.4g/kg/day x 5 days) and plasma exchange (5 sessions over 10-14 days) are equally effective. IVIG is more commonly used because it is logistically simpler (no large-bore access, no apheresis machine). Do NOT combine them — no additional benefit. Do NOT give corticosteroids — RCTs show steroids do not help and may worsen outcome. This is one of the few autoimmune conditions where steroids are specifically contraindicated.',
        'intubation': 'The 20/30/40 rule: intubate if FVC drops below 20 mL/kg, NIF is weaker than -30 cmH2O, or vital capacity has declined >30% from baseline. Do NOT wait for ABG changes — by the time CO2 rises or O2 drops, the patient is in extremis. Also intubate for bulbar dysfunction with aspiration risk. Elective intubation is far safer than crash intubation in a fatigued patient.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'GBS Module', link: '../mechanism/guillain-barre-module.html', reason: 'Molecular mimicry and demyelination mechanisms' }
    ],
    evidenceBase: { guidelines: ['AAN GBS Practice Parameter 2003'], openAccess: ['StatPearls: Guillain-Barré Syndrome (NBK532254)'] }
},

'meningitis-workup': {
    id: 'meningitis-workup',
    title: 'Bacterial Meningitis - Empiric Therapy Before LP',
    category: 'Neurology',
    patient: { name: 'Aisha Williams', age: 22, sex: 'Female', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Fever, Headache, Neck Stiffness' },
    description: 'A 22-year-old college student presents with 8 hours of severe headache, fever (39.8°C), photophobia, and neck stiffness. HR 112, BP 100/62. She is confused and has a petechial rash on her trunk and extremities. Kernig sign positive.',
    openingStatement: 'She has the classic meningitis triad plus petechiae. The petechiae tell you something specific about the organism. Before you even think about the LP, what do you do first, and why does the sequence of antibiotics → imaging → LP matter in bacterial meningitis?',
    conceptDomains: {
        'Situation': ['classic_triad', 'petechial_rash', 'altered_mental_status'],
        'Background': ['college_age_risk', 'vaccination_status', 'close_contacts'],
        'Assessment': ['bacterial_vs_viral', 'likely_organism', 'csf_interpretation'],
        'Recommendation': ['empiric_antibiotics_first', 'dexamethasone_timing', 'lp_vs_ct_first']
    },
    quickActions: ['Do I give antibiotics before the LP?', 'Does she need CT before LP?', 'What empiric regimen?', 'What about the rash?'],
    keyTeachingPoints: [
        'NEVER delay antibiotics for LP or CT — mortality increases with every hour of delay',
        'Empiric regimen age 18-50: ceftriaxone + vancomycin + dexamethasone',
        'Dexamethasone BEFORE or WITH first dose of antibiotics — reduces mortality in pneumococcal meningitis',
        'Petechiae + meningitis = Neisseria meningitidis until proven otherwise — notify public health for contact prophylaxis',
        'CT before LP only if: immunocompromised, history of CNS disease, new-onset seizure, papilledema, focal neuro deficit, GCS <12'
    ],
    sbarTemplate: {
        situation: 'I have a 22-year-old with bacterial meningitis — fever, neck stiffness, confusion, and petechial rash. She is hemodynamically borderline.',
        background: 'College student. Petechiae suggest Neisseria meningitidis. Need vaccination and contact history.',
        assessment: 'Clinical bacterial meningitis, likely meningococcal. This is a time-critical emergency.',
        recommendation: 'Giving dexamethasone, ceftriaxone, and vancomycin NOW — before CT or LP. Will LP after CT if needed. Starting fluid resuscitation. Public health notification for meningococcal prophylaxis of close contacts.'
    },
    defined_responses: {
        'antibiotics before lp': 'ALWAYS give antibiotics immediately in suspected bacterial meningitis. Every hour of delay increases mortality. The sequence: (1) Blood cultures (draw immediately), (2) Dexamethasone + empiric antibiotics (give within minutes), (3) CT if indicated, (4) LP when safe. Antibiotics will not sterilize CSF for several hours — the LP will still be diagnostic even after antibiotics are given.',
        'ct before lp': 'CT before LP is needed ONLY if risk of herniation: immunocompromised, history of CNS disease, new-onset seizure within 1 week, papilledema, focal neurological deficit, or significantly altered consciousness (GCS <12). She is confused but has no focal deficits. However, given her altered mental status, many would get CT. Either way: give antibiotics FIRST, then CT, then LP.',
        'empiric regimen': 'Age 18-50: ceftriaxone 2g IV q12h + vancomycin (covers resistant pneumococcus). Add ampicillin if >50, immunocompromised, or pregnant (covers Listeria). Add dexamethasone 0.15mg/kg q6h x 4 days — give BEFORE or WITH first antibiotic dose, not after. If meningococcal confirmed, can narrow to penicillin G or ceftriaxone alone.',
        'rash': 'Petechiae and purpura in meningitis = meningococcemia (Neisseria meningitidis disseminated intravascular infection). This organism causes DIC and fulminant purpura fulminans. Public health MUST be notified — close contacts (roommates, kissing contacts, anyone sharing utensils) need prophylaxis with rifampin, ciprofloxacin, or ceftriaxone within 24 hours. Droplet precautions until 24 hours of effective antibiotics.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Meningitis Module', link: '../mechanism/meningitis-encephalitis-module.html', reason: 'Blood-brain barrier disruption and CSF inflammatory patterns' }
    ],
    evidenceBase: { guidelines: ['IDSA Bacterial Meningitis Guidelines 2004'], openAccess: ['StatPearls: Bacterial Meningitis (NBK470351)'] }
},

'ich-management': {
    id: 'ich-management',
    title: 'Intracerebral Hemorrhage - Acute Management',
    category: 'Neurology',
    patient: { name: 'Thomas Chen', age: 68, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Sudden Severe Headache and Left Arm Weakness' },
    description: 'A 68-year-old man on apixaban for AFib presents with sudden-onset severe headache and left-sided weakness for 1 hour. BP 212/118, HR 78, GCS 12 (E3V4M5). CT head shows a 35mL right basal ganglia hemorrhage with 4mm midline shift.',
    openingStatement: 'Mr. Chen has an intracerebral hemorrhage while anticoagulated. This is the nightmare scenario of anticoagulation. You have three immediate priorities: stop the bleeding from expanding, reverse the anticoagulant, and control the blood pressure. Walk me through each one and why the order matters.',
    conceptDomains: {
        'Situation': ['hematoma_volume', 'midline_shift', 'anticoagulation_status'],
        'Background': ['apixaban_on_board', 'afib_indication', 'hypertension'],
        'Assessment': ['ich_score', 'hematoma_expansion_risk', 'surgical_candidacy'],
        'Recommendation': ['anticoag_reversal', 'bp_target', 'neurosurgery_consult']
    },
    quickActions: ['How do I reverse apixaban?', 'What is the BP target?', 'Does he need surgery?', 'What is the ICH score?'],
    keyTeachingPoints: [
        'Reverse apixaban with andexanet alfa (specific reversal agent) or 4-factor PCC if unavailable',
        'BP target: <140 systolic within 1 hour (INTERACT2 trial) — IV nicardipine or clevidipine',
        'Hematoma expansion occurs in ~30% within first 6 hours — anticoagulation makes this much worse',
        'ICH score (0-6) predicts mortality: GCS, volume, IVH, infratentorial, age >80',
        'Neurosurgery for: posterior fossa hemorrhage with brainstem compression, large lobar hemorrhage with deterioration'
    ],
    sbarTemplate: {
        situation: 'I have a 68-year-old on apixaban with a 35mL right basal ganglia ICH and midline shift. GCS 12.',
        background: 'On apixaban for AFib. BP 212/118.',
        assessment: 'Anticoagulant-associated ICH with high risk of hematoma expansion. Needs immediate reversal and BP control.',
        recommendation: 'Giving andexanet alfa for apixaban reversal. Starting nicardipine drip targeting SBP <140. Neurosurgery consulted. Repeat CT in 6 hours to assess for expansion.'
    },
    defined_responses: {
        'reverse apixaban': 'Andexanet alfa is the specific reversal agent for factor Xa inhibitors (apixaban, rivaroxaban). Dose depends on timing and dose of last apixaban. If unavailable: 4-factor PCC (50 units/kg) — not specifically indicated for this but provides factor replacement. Do NOT give FFP alone — insufficient factor concentration. Activated charcoal if apixaban ingested within 2 hours. Reversal should happen within minutes of diagnosis.',
        'bp target': 'SBP target <140 mmHg within 1 hour (INTERACT2 trial showed safety and trend toward benefit). Use IV nicardipine or clevidipine (titratable). His 212 systolic is dangerously high — each 10 mmHg increase in SBP increases hematoma expansion risk. But do NOT drop below 120 — need perfusion pressure for the uninjured brain.',
        'surgery': 'Neurosurgery considerations: (1) Posterior fossa hemorrhage >3cm or with hydrocephalus or brainstem compression = emergent surgery. (2) Lobar hemorrhage >30mL within 1cm of cortical surface in a deteriorating patient = consider surgical evacuation (STICH II). (3) His basal ganglia location is deep — surgical evacuation is controversial and generally NOT recommended for deep hemorrhages. (4) EVD (external ventricular drain) if hydrocephalus develops.',
        'ich score': 'ICH Score (0-6, higher = worse): GCS 13-15 (0), 5-12 (1), 3-4 (2); ICH volume ≥30mL (1); IVH present (1); infratentorial (1); age ≥80 (1). His score: GCS 12 (1) + volume 35mL (1) + no IVH stated (0) + supratentorial (0) + age <80 (0) = 2. ICH score 2 = approximately 26% 30-day mortality. The anticoagulation and potential for expansion make his actual risk higher.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'ICH Module', link: '../mechanism/ich-module.html', reason: 'Hematoma expansion and perihematomal edema' }
    ],
    evidenceBase: { guidelines: ['AHA/ASA ICH Guidelines 2022'], openAccess: ['StatPearls: Intracerebral Hemorrhage (NBK553103)'] }
},

'nms-vs-serotonin': {
    id: 'nms-vs-serotonin',
    title: 'NMS vs Serotonin Syndrome - Critical Differentiation',
    category: 'Neurology',
    patient: { name: 'Brian Foster', age: 38, sex: 'Male', setting: 'Emergency', acuity: 'Critical', chiefComplaint: 'Fever, Rigidity, and Altered Mental Status' },
    description: 'A 38-year-old man with schizophrenia presents with fever (40.2°C), severe generalized rigidity, diaphoresis, and confusion. His haloperidol dose was increased 5 days ago. HR 118, BP 164/98. CK 12,400 U/L. WBC 14,200.',
    openingStatement: 'Fever, rigidity, altered mental status, and a recent antipsychotic dose change. This is neuroleptic malignant syndrome until proven otherwise. But the differential includes serotonin syndrome, malignant hyperthermia, and lethal catatonia. How do you tell them apart, and why does the CK of 12,400 tell you this is bad?',
    conceptDomains: {
        'Situation': ['hyperthermia', 'lead_pipe_rigidity', 'elevated_ck'],
        'Background': ['antipsychotic_exposure', 'dose_change_timing', 'other_medications'],
        'Assessment': ['nms_diagnostic_criteria', 'differential_diagnosis', 'complication_risk'],
        'Recommendation': ['stop_causative_agent', 'dantrolene_vs_bromocriptine', 'supportive_care']
    },
    quickActions: ['How do I differentiate NMS from serotonin syndrome?', 'What is the treatment?', 'Why is the CK dangerous?', 'How long does NMS last?'],
    keyTeachingPoints: [
        'NMS: lead-pipe rigidity, slow onset (days), antipsychotic trigger, elevated CK, bradykinetic',
        'Serotonin syndrome: clonus/hyperreflexia, rapid onset (hours), serotonergic drug, agitation/hyperkinetic',
        'Treatment: STOP the offending agent, IV fluids for rhabdomyolysis, dantrolene for rigidity, bromocriptine as dopamine agonist',
        'CK >10,000 = high risk for rhabdomyolysis → AKI. Aggressive IV hydration, target UO >200 mL/hr',
        'NMS mortality ~10% untreated; recovery over 1-2 weeks after stopping the drug'
    ],
    sbarTemplate: {
        situation: 'I have a 38-year-old with neuroleptic malignant syndrome. Fever 40.2, lead-pipe rigidity, CK 12,400, altered mental status.',
        background: 'Haloperidol increased 5 days ago. No serotonergic medications.',
        assessment: 'NMS with rhabdomyolysis. High risk for AKI if not aggressively hydrated.',
        recommendation: 'Stopped haloperidol. Aggressive IV NS targeting UO >200 mL/hr. Starting dantrolene for rigidity and hyperthermia. ICU admission for monitoring. Checking BMP, CK q6h, and monitoring renal function.'
    },
    defined_responses: {
        'nms vs ss': 'Key differences: (1) Onset: NMS develops over days (slow), SS develops over hours (rapid). (2) Muscle findings: NMS = lead-pipe rigidity (bradykinetic), SS = clonus, hyperreflexia, myoclonus (hyperkinetic). (3) Drug trigger: NMS = dopamine antagonists (antipsychotics), SS = serotonergic drugs (SSRIs, MAOIs, tramadol). (4) Reflexes: NMS = normal or decreased, SS = hyperreflexic with clonus especially in lower extremities. His rigidity, slow onset, and haloperidol exposure = NMS.',
        'treatment': 'Stop the causative agent immediately. Dantrolene 1-2.5 mg/kg IV for severe rigidity and hyperthermia (direct muscle relaxant — works on RyR1 receptor). Bromocriptine 2.5mg PO q8h (dopamine agonist — addresses the underlying dopamine blockade). Aggressive cooling for hyperthermia >40°C. Benzodiazepines for agitation. Avoid succinylcholine if intubation needed (hyperkalemia risk with rhabdo). Supportive: IV fluids, monitor CK/renal/electrolytes.',
        'ck danger': 'CK 12,400 = significant rhabdomyolysis. The myoglobin released from damaged muscle precipitates in renal tubules causing AKI. Threshold for renal injury typically CK >5,000-10,000. Aggressive IV hydration (goal UO 200-300 mL/hr) with isotonic saline to flush myoglobin. Monitor potassium (released from muscle) — can cause fatal arrhythmia. Bicarbonate drip is controversial but sometimes used to alkalinize urine.',
        'duration': 'NMS typically resolves over 7-14 days after stopping the causative agent. Depot antipsychotics (like haloperidol decanoate) cause prolonged NMS lasting weeks because the drug continues to release from the injection site. During recovery: do NOT rechallenge with same antipsychotic. If antipsychotic is needed later: wait at least 2 weeks, use a lower-potency agent (quetiapine preferred), start at lowest dose.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'NMS Module', link: '../mechanism/nms-module.html', reason: 'Central dopamine blockade and muscle rigidity mechanism' }
    ],
    evidenceBase: { guidelines: ['APA NMS Treatment Consensus 2007'], openAccess: ['StatPearls: Neuroleptic Malignant Syndrome (NBK482282)'] }
},

'myasthenia-diagnosis': {
    id: 'myasthenia-diagnosis',
    title: 'Myasthenia Gravis - Diagnosis & Crisis Prevention',
    category: 'Neurology',
    patient: { name: 'Catherine Li', age: 35, sex: 'Female', setting: 'Neurology Clinic', acuity: 'Moderate', chiefComplaint: 'Double Vision and Difficulty Swallowing' },
    description: 'A 35-year-old woman presents with 6 weeks of intermittent diplopia (worse in the evening), drooping eyelids, and new-onset difficulty swallowing liquids. Exam shows bilateral ptosis that worsens with sustained upgaze, fatigable diplopia on lateral gaze. Strength is preserved in extremities.',
    openingStatement: 'Mrs. Li has fluctuating weakness that worsens with use — that pattern is the hallmark of neuromuscular junction disease. She has ocular and now bulbar symptoms. Walk me through how you confirm the diagnosis, why bulbar involvement changes the urgency, and what can precipitate a crisis.',
    conceptDomains: {
        'Situation': ['fluctuating_weakness', 'ocular_plus_bulbar', 'fatigable_exam'],
        'Background': ['autoimmune_associations', 'thymic_pathology', 'age_sex_pattern'],
        'Assessment': ['acetylcholine_receptor_abs', 'musk_abs', 'edrophonium_test'],
        'Recommendation': ['cholinesterase_inhibitors', 'immunosuppression', 'crisis_prevention']
    },
    quickActions: ['How do I confirm the diagnosis?', 'What makes this urgent?', 'What medications worsen MG?', 'What is myasthenic crisis?'],
    keyTeachingPoints: [
        'Fatigable weakness that worsens with activity and improves with rest = NMJ disease',
        'AChR antibodies positive in ~85% of generalized MG; MuSK antibodies in some seronegative patients',
        'Bulbar symptoms (dysphagia, dysarthria) = higher risk of respiratory crisis',
        'Medications that worsen MG: aminoglycosides, fluoroquinolones, magnesium, beta-blockers, neuromuscular blockers',
        'All MG patients need CT chest for thymoma (10-15% have thymoma; thymectomy can improve disease)'
    ],
    sbarTemplate: {
        situation: 'I have a 35-year-old woman with 6 weeks of fatigable ptosis, diplopia, and new dysphagia consistent with myasthenia gravis with bulbar involvement.',
        background: 'No other autoimmune conditions. No current medications that could worsen NMJ transmission.',
        assessment: 'Likely myasthenia gravis with ocular and bulbar features. Bulbar involvement raises concern for potential respiratory compromise.',
        recommendation: 'Sending AChR antibodies and anti-MuSK antibodies. Ordering CT chest for thymoma screening. Starting pyridostigmine for symptomatic relief. FVC for respiratory baseline. Will refer to neurology for immunosuppression discussion.'
    },
    defined_responses: {
        'confirm diagnosis': 'Step 1: AChR binding antibodies (positive in ~85% generalized, ~50% ocular-only MG). If negative, check MuSK antibodies and LRP4 antibodies. Step 2: Electrodiagnostics — repetitive nerve stimulation shows decremental response (>10% decrement); single-fiber EMG is most sensitive. Step 3: CT chest for thymoma. Ice pack test (bedside): place ice on closed eyelid for 2 minutes — ptosis improves because cold improves NMJ transmission. Edrophonium (Tensilon) test is rarely used now.',
        'urgency': 'Bulbar involvement (dysphagia, dysarthria, difficulty handling secretions) means the muscles controlling swallowing and breathing are affected. The phrenic nerve innervates the diaphragm — respiratory muscles can fail next. She needs an FVC baseline now and serial monitoring. Bulbar MG can progress to myasthenic crisis (respiratory failure) with triggers like infection, surgery, or offending medications.',
        'medications worsen': 'Drugs that exacerbate MG (MUST know for boards and patient safety): aminoglycosides, fluoroquinolones, macrolides, tetracyclines — all impair NMJ transmission. Magnesium sulfate (blocks calcium at NMJ). Beta-blockers. Phenytoin. Neuromuscular blocking agents (use with extreme caution in surgery). D-penicillamine can actually cause drug-induced MG. Iodinated contrast media. Botulinum toxin. Always check before prescribing anything to an MG patient.',
        'crisis': 'Myasthenic crisis: respiratory failure from MG exacerbation. Triggers: infection (most common), surgery, medication changes, emotional stress. FVC <20 mL/kg or NIF weaker than -30 = intubate (same 20/30 rule as GBS). Treatment: IVIG or plasma exchange for acute crisis, NOT just increasing pyridostigmine (cholinergic crisis can look identical and makes things worse). Distinguish myasthenic from cholinergic crisis: cholinergic = excessive secretions, miosis, diarrhea, bradycardia.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Myasthenia Gravis Module', link: '../mechanism/myasthenia-gravis-module.html', reason: 'NMJ antibody-mediated destruction' }
    ],
    evidenceBase: { guidelines: ['AAN MG Guidelines 2016'], openAccess: ['StatPearls: Myasthenia Gravis (NBK559331)'] }
},

'parkinson-management': {
    id: 'parkinson-management',
    title: 'Parkinson Disease - Diagnosis & Treatment Initiation',
    category: 'Neurology',
    patient: { name: 'Robert Gonzalez', age: 64, sex: 'Male', setting: 'Neurology Clinic', acuity: 'Low', chiefComplaint: 'Right Hand Tremor and Slow Movements' },
    description: 'A 64-year-old retired engineer presents with 8 months of progressive right hand tremor at rest, difficulty buttoning his shirt (bradykinesia), and his wife notices he shuffles when walking. Exam: 4-5 Hz resting tremor right hand (pill-rolling), cogwheel rigidity right upper extremity, decreased arm swing on right, masked facies. No postural instability.',
    openingStatement: 'Mr. Gonzalez has the cardinal features of Parkinson disease — but not all tremors are PD, and some PD mimics can be dangerous to miss. Walk me through the cardinal features, how you distinguish PD from essential tremor, and why asymmetry matters in your diagnostic confidence.',
    conceptDomains: {
        'Situation': ['resting_tremor', 'bradykinesia', 'rigidity'],
        'Background': ['age_of_onset', 'medication_history', 'family_history'],
        'Assessment': ['cardinal_features', 'red_flags_for_mimics', 'staging'],
        'Recommendation': ['levodopa_vs_agonists', 'nonmotor_symptoms', 'when_to_refer']
    },
    quickActions: ['What are the cardinal features?', 'PD vs essential tremor?', 'When do I start levodopa?', 'What are non-motor symptoms?'],
    keyTeachingPoints: [
        'Cardinal features: bradykinesia (required) + at least one of: resting tremor, rigidity, postural instability',
        'Asymmetric onset strongly supports PD — symmetric onset raises concern for atypical parkinsonism',
        'Resting tremor = PD; action/postural tremor = essential tremor (though PD can have re-emergent postural tremor)',
        'Levodopa-carbidopa is the gold standard — no benefit to delaying treatment',
        'Non-motor symptoms often precede motor: constipation, anosmia, REM sleep behavior disorder, depression'
    ],
    sbarTemplate: {
        situation: 'I have a 64-year-old man with an 8-month history of asymmetric resting tremor, bradykinesia, and cogwheel rigidity — classic Parkinson disease presentation.',
        background: 'No medication exposure that could cause parkinsonism. No family history of neurodegenerative disease. Functionally independent but having difficulty with fine motor tasks.',
        assessment: 'Clinical diagnosis of Parkinson disease. Asymmetric onset, resting tremor, and bradykinesia are all consistent. No red flags for atypical parkinsonism.',
        recommendation: 'Initiating carbidopa-levodopa. Will counsel on motor fluctuations with long-term use. Screening for non-motor symptoms. Referral to PT for gait training.'
    },
    defined_responses: {
        'cardinal features': 'Bradykinesia is REQUIRED — without it, you cannot diagnose PD. Plus at least one of: (1) Resting tremor (4-6 Hz, pill-rolling, suppressible with action), (2) Rigidity (cogwheel or lead-pipe), (3) Postural instability (late feature — its early presence suggests atypical parkinsonism). His presentation: bradykinesia (difficulty buttoning) + resting tremor + rigidity = meets criteria. The asymmetry and pill-rolling character strongly support idiopathic PD.',
        'pd vs et': 'Essential tremor (ET): action/postural tremor (worse with movement, like pouring coffee), bilateral (may be asymmetric), family history common, improves with alcohol, no bradykinesia or rigidity. PD: resting tremor (worse at rest, like hands in lap), asymmetric onset, bradykinesia and rigidity present, does not improve with alcohol. His resting tremor with cogwheel rigidity and bradykinesia is clearly PD, not ET.',
        'levodopa timing': 'There is no benefit to delaying levodopa. The old concern about "wearing off" and motor complications was based on early studies — we now know the complications are related to disease duration, not treatment duration. Start when symptoms impair function or quality of life. His difficulty buttoning shirts = functional impairment = time to start. Begin carbidopa-levodopa 25/100 three times daily and titrate. Dopamine agonists (pramipexole, ropinirole) are alternatives for younger patients but have more side effects (impulse control disorders, somnolence).',
        'nonmotor': 'Non-motor symptoms may precede motor symptoms by years and significantly impact quality of life: constipation (altered gut motility), hyposmia/anosmia (90% of PD patients), REM sleep behavior disorder (acting out dreams — can precede PD by >10 years), depression/anxiety, orthostatic hypotension, urinary urgency, cognitive decline (later stages). Screen for these at every visit — they often respond to targeted treatment.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Parkinson Module', link: '../mechanism/parkinson-module.html', reason: 'Dopaminergic pathway degeneration and Lewy body pathology' }
    ],
    evidenceBase: { guidelines: ['MDS PD Diagnostic Criteria 2015', 'AAN PD Guidelines 2006'], openAccess: ['StatPearls: Parkinson Disease (NBK470193)'] }
}

};

if (typeof module !== 'undefined') module.exports = COACHDX_NEUROLOGY_EXPANDED;
