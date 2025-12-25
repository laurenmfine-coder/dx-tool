/**
 * ReasonDx First Seizure Evaluation Template
 * Based on UpToDate: "Evaluation and management of the first seizure in adults"
 */

const FIRST_SEIZURE_TEMPLATE = {
  id: "first_seizure_evaluation",
  title: "Evaluation and Management of First Seizure in Adults",
  description: "Classification, workup, and treatment decisions for first-time seizure",
  
  defined_findings: {
    // Event characteristics
    witnessed_event: { label: "Event witnessed", type: "boolean" },
    duration_minutes: { label: "Duration (minutes)", type: "number" },
    tonic_stiffening: { label: "Tonic stiffening", type: "boolean" },
    clonic_jerking: { label: "Clonic jerking", type: "boolean" },
    bilateral_symmetric: { label: "Bilateral symmetric movements", type: "boolean" },
    unilateral_movements: { label: "Unilateral/asymmetric movements", type: "boolean" },
    head_eye_deviation: { label: "Head/eye deviation", type: "boolean" },
    automatisms: { label: "Automatisms", type: "boolean" },
    
    // Consciousness
    loc_complete: { label: "Complete LOC", type: "boolean" },
    awareness_retained: { label: "Awareness retained", type: "boolean" },
    
    // Aura
    aura_present: { label: "Aura present", type: "boolean" },
    aura_visual: { label: "Visual aura", type: "boolean" },
    aura_sensory: { label: "Sensory aura", type: "boolean" },
    aura_deja_vu: { label: "Déjà vu/jamais vu", type: "boolean" },
    aura_epigastric: { label: "Epigastric rising", type: "boolean" },
    
    // Postictal
    postictal_confusion: { label: "Postictal confusion", type: "boolean" },
    postictal_duration_minutes: { label: "Postictal duration (min)", type: "number" },
    todd_paralysis: { label: "Todd paralysis", type: "boolean" },
    rapid_return_baseline: { label: "Rapid return to baseline", type: "boolean" },
    
    // Physical findings
    tongue_bite_lateral: { label: "Lateral tongue bite", type: "boolean" },
    urinary_incontinence: { label: "Urinary incontinence", type: "boolean" },
    cyanosis: { label: "Cyanosis during event", type: "boolean" },
    eyes_open: { label: "Eyes open during event", type: "boolean" },
    eyes_closed: { label: "Eyes closed during event", type: "boolean" },
    
    // Triggers
    event_during_sleep: { label: "During sleep", type: "boolean" },
    sleep_deprived: { label: "Sleep deprived", type: "boolean" },
    triggered_standing: { label: "Triggered by standing", type: "boolean" },
    
    // Prior events
    prior_similar_events: { label: "Prior similar events", type: "boolean" },
    prior_myoclonic_jerks: { label: "Prior morning myoclonic jerks", type: "boolean" },
    prior_staring_spells: { label: "Prior staring spells", type: "boolean" },
    
    // Provocations
    alcohol_withdrawal: { label: "Alcohol withdrawal (7-48h)", type: "boolean" },
    illicit_drug_use: { label: "Illicit drug use", type: "boolean" },
    new_medication: { label: "New medication", type: "boolean" },
    medication_noncompliance: { label: "ASM noncompliance", type: "boolean" },
    recent_head_trauma: { label: "Recent head trauma", type: "boolean" },
    fever_infection: { label: "Fever/infection", type: "boolean" },
    
    // History
    history_epilepsy: { label: "Known epilepsy", type: "boolean" },
    history_stroke: { label: "History of stroke", type: "boolean" },
    history_tbi: { label: "History of TBI", type: "boolean" },
    history_brain_tumor: { label: "History brain tumor", type: "boolean" },
    history_dementia: { label: "History dementia", type: "boolean" },
    immunocompromised: { label: "Immunocompromised", type: "boolean" },
    on_anticoagulation: { label: "On anticoagulation", type: "boolean" },
    family_history_seizures: { label: "Family history seizures", type: "boolean" },
    
    // Exam
    focal_neurologic_deficit: { label: "Focal deficit on exam", type: "boolean" },
    meningismus: { label: "Meningismus", type: "boolean" },
    
    // Labs
    hypoglycemia: { label: "Hypoglycemia", type: "boolean" },
    hyponatremia: { label: "Hyponatremia", type: "boolean" },
    hypocalcemia: { label: "Hypocalcemia", type: "boolean" },
    elevated_lactate: { label: "Elevated lactate (<2h)", type: "boolean" },
    
    // Imaging/EEG
    ct_abnormal: { label: "CT abnormal", type: "boolean" },
    mri_abnormal: { label: "MRI abnormal", type: "boolean" },
    eeg_epileptiform: { label: "Epileptiform on EEG", type: "boolean" },
    eeg_focal: { label: "Focal EEG abnormality", type: "boolean" }
  },
  
  teaching_points: {
    definitions: {
      title: "Key Definitions",
      content: `ACUTE SYMPTOMATIC (PROVOKED) SEIZURE:
• Within 1 week of stroke, TBI, anoxia, surgery
• During active CNS infection
• Within 24h of severe metabolic derangement
• With drug/alcohol withdrawal
→ LOW risk future epilepsy

UNPROVOKED SEIZURE:
• No identifiable acute cause
• May relate to remote structural lesion
→ HIGHER risk future epilepsy (~33% at 5 years)

EPILEPSY DIAGNOSIS:
1. Two unprovoked seizures >24h apart, OR
2. One unprovoked + ≥60% recurrence risk, OR
3. Epilepsy syndrome diagnosis`
    },
    
    classification: {
      title: "Seizure Classification",
      content: `FOCAL SEIZURES:
• Aware (simple partial): Consciousness retained
• Impaired awareness (complex partial): Most common in adults
• Focal to bilateral tonic-clonic: May look like primary generalized

Features suggesting FOCAL:
• Aura before LOC
• Asymmetric movements
• Postictal focal deficits (Todd)
• Structural lesion on imaging
• Focal EEG abnormalities

GENERALIZED SEIZURES:
• Tonic-clonic: Stiffening → jerking, postictal confusion
• Absence: Brief staring, abrupt onset/offset
• Myoclonic: Brief jerks, awareness preserved

CRITICAL: Most "generalized" seizures in adults are actually focal-to-bilateral!`
    },
    
    workup: {
      title: "First Seizure Workup",
      content: `LABS FOR ALL:
• POC glucose (STAT!)
• BMP (Na, Ca, Mg)
• Renal/liver function
• CBC
• Consider: Lactate, toxicology

ECG: All patients with LOC

NEUROIMAGING:
URGENT CT if:
• Focal deficit, persistent AMS
• Fever, headache, trauma
• Anticoagulation, immunocompromise
• Alcoholism, malignancy

MRI (epilepsy protocol): All eventually

EEG:
• URGENT if not at baseline in 60 min
• Outpatient if recovered
• ~25% show epileptiform abnormalities
• Increases recurrence risk if abnormal

LP: If CNS infection suspected`
    },
    
    physical_findings: {
      title: "Key Physical Findings",
      content: `LATERAL TONGUE BITE:
• Specificity 96-100% for epileptic seizure
• Sensitivity only 20-33%
• If present, strongly supports seizure over PNES/syncope

URINARY INCONTINENCE:
• Poor discriminator (Sens 38%, Spec 57%)
• Occurs with syncope and PNES too

ELEVATED LACTATE (within 2h):
• Supports GTC over syncope/PNES
• Absence doesn't exclude seizure`
    },
    
    mimics: {
      title: "Seizure vs Mimics",
      content: `SYNCOPE vs SEIZURE:
Syncope:
• Triggered by standing, emotion
• Prodrome: Lightheaded, pallor
• Brief LOC, rapid recovery
• No postictal confusion

Seizure:
• Any position including supine
• Sustained tonic-clonic activity
• Cyanosis, lateral tongue bite
• Prolonged postictal confusion

CONVULSIVE SYNCOPE:
• Brief (10-20 sec) seizure-like movements
• Due to cerebral hypoperfusion
• NOT epilepsy!

PNES FEATURES:
• Eyes CLOSED (usually open in epileptic)
• Variable, fluctuating movements
• Side-to-side head movements
• Resistance to eye opening
• Duration >2-3 minutes
• No postictal confusion`
    },
    
    treatment_decision: {
      title: "When to Start ASM",
      content: `PROVOKED SEIZURE:
• Generally NO long-term ASM
• Treat underlying cause
• Short-term ASM for severe acute illness

UNPROVOKED SEIZURE:
Overall recurrence: ~33% at 5 years

HIGH RECURRENCE RISK (≥60%):
• Structural lesion on imaging
• Epileptiform EEG
• Nocturnal seizure
• Prior neuro insult
→ May diagnose EPILEPSY, consider treatment

LOW RISK (normal imaging + EEG):
• ~65% will NOT have another seizure
• Reasonable to observe
• Shared decision-making

ALL PATIENTS:
• Seizure precautions
• Driving restrictions (state-specific)
• Neurology referral`
    }
  },
  
  clinical_reasoning_prompts: [
    {
      trigger: "lateral_tongue_bite",
      question: "Significance of lateral tongue bite?",
      teaching: "Specificity 96-100% for epileptic seizure. Sensitivity only 20-33%. Highly useful 'rule-in' finding when present."
    },
    {
      trigger: "morning_jerks",
      question: "Patient mentions 'morning jerks' for years before GTC?",
      teaching: "Critical history! Suggests JME (juvenile myoclonic epilepsy). This is NOT their first seizure - they've had epilepsy. JME responds to valproate/levetiracetam, may worsen with phenytoin/carbamazepine."
    },
    {
      trigger: "provoked_treatment",
      question: "Seizure with Na 118 - need long-term ASM?",
      teaching: "Acute symptomatic seizure. Treat hyponatremia. Long-term ASM NOT indicated. Low future epilepsy risk once corrected."
    },
    {
      trigger: "normal_workup",
      question: "First unprovoked seizure, normal CT and EEG - treat?",
      teaching: "Shared decision-making. ~65% won't have another. Options: observe vs treat if high impact from recurrence. Discuss driving restrictions regardless."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FIRST_SEIZURE_TEMPLATE;
}
/**
 * ReasonDx Status Epilepticus Template
 * Based on UpToDate: "Convulsive status epilepticus in adults: Clinical features and diagnosis"
 */

const STATUS_EPILEPTICUS_TEMPLATE = {
  id: "status_epilepticus",
  title: "Convulsive Status Epilepticus - Recognition and Management",
  description: "Recognition, classification, and emergency management of status epilepticus",
  
  defined_findings: {
    // Seizure characteristics
    seizure_duration_minutes: { label: "Duration (minutes)", type: "number" },
    continuous_activity_5min: { label: "Continuous activity >5 min", type: "boolean" },
    recurrent_no_recovery: { label: "Recurrent without recovery", type: "boolean" },
    
    // Type
    bilateral_tonic_clonic: { label: "Bilateral tonic-clonic", type: "boolean" },
    focal_motor: { label: "Focal motor", type: "boolean" },
    myoclonic: { label: "Myoclonic", type: "boolean" },
    subtle_motor: { label: "Subtle motor only", type: "boolean" },
    no_motor: { label: "No motor (possible NCSE)", type: "boolean" },
    
    // Consciousness
    unconscious: { label: "Unconscious", type: "boolean" },
    comatose: { label: "Comatose", type: "boolean" },
    
    // Response
    responded_first_benzo: { label: "Responded to first benzo", type: "boolean" },
    required_second_agent: { label: "Required second agent", type: "boolean" },
    refractory: { label: "Refractory (failed 2 agents)", type: "boolean" },
    
    // Etiology
    known_epilepsy: { label: "Known epilepsy", type: "boolean" },
    asm_noncompliance: { label: "ASM noncompliance", type: "boolean" },
    alcohol_withdrawal: { label: "Alcohol withdrawal", type: "boolean" },
    acute_stroke: { label: "Acute stroke", type: "boolean" },
    acute_trauma: { label: "Acute head trauma", type: "boolean" },
    cns_infection: { label: "CNS infection", type: "boolean" },
    metabolic: { label: "Metabolic cause", type: "boolean" },
    post_anoxic: { label: "Post-anoxic", type: "boolean" },
    
    // Complications
    hypoxia: { label: "Hypoxia", type: "boolean" },
    hypotension: { label: "Hypotension", type: "boolean" },
    hyperthermia: { label: "Hyperthermia", type: "boolean" },
    acidosis: { label: "Acidosis", type: "boolean" },
    rhabdomyolysis: { label: "Rhabdomyolysis", type: "boolean" },
    
    // EEG
    eeg_continuous_sz: { label: "EEG: continuous seizures", type: "boolean" },
    eeg_periodic_discharges: { label: "Periodic discharges", type: "boolean" },
    eeg_burst_suppression: { label: "Burst suppression", type: "boolean" }
  },
  
  teaching_points: {
    definition: {
      title: "Status Epilepticus Definition",
      content: `ILAE 2015 DEFINITION:

GENERALIZED CONVULSIVE SE:
• ≥5 minutes continuous seizure (t1) = START TREATMENT
• ≥30 minutes (t2) = Risk of long-term complications

WHY 5 MINUTES?
• Most seizures stop spontaneously in 2-3 min
• After 5 min, unlikely to stop on own
• Harder to control the longer it continues
• Neuronal injury can begin

ALSO CONSIDERED SE:
• Recurrent seizures without return to baseline

REFRACTORY SE:
• Failed 2 appropriately dosed ASMs (including IV benzo)
• ~10-30% of SE cases

SUPER-REFRACTORY SE:
• Persists ≥24h despite continuous infusion`
    },
    
    classification: {
      title: "Types of Status Epilepticus",
      content: `CONVULSIVE SE:

1. GENERALIZED CONVULSIVE SE
• Most dramatic, highest risk
• Bilateral tonic → clonic
• Always impaired consciousness

2. FOCAL MOTOR SE
• Repetitive focal jerking
• May retain awareness
• Usually has structural lesion

3. EPILEPSIA PARTIALIS CONTINUA
• Prolonged focal motor SE
• Can last days to weeks
• Often aware
• Causes: Stroke, Rasmussen, hyperglycemic state

4. MYOCLONIC SE
• Variable prognosis by cause:
  - JME: Good prognosis
  - Post-anoxic: VERY poor
  - Metabolic: Depends on reversibility

NONCONVULSIVE SE:
• No prominent motor activity
• REQUIRES EEG for diagnosis
• May follow convulsive SE

CRITICAL: After convulsive SE stops clinically, ~50% have ongoing electrical seizures!`
    },
    
    etiology: {
      title: "Causes of Status Epilepticus",
      content: `ACUTE SYMPTOMATIC (~50%):
• Acute stroke (most common in elderly)
• Traumatic brain injury
• CNS infection
• Metabolic (hypoglycemia, Na, Ca, uremia)
• Drug toxicity/withdrawal
• Hypoxic-ischemic injury

AUTOIMMUNE:
• Anti-NMDA, Anti-LGI1 encephalitis
• Often REFRACTORY to standard treatment
• May respond to immunotherapy

REMOTE SYMPTOMATIC (~25%):
• Prior stroke, TBI, CNS infection

EPILEPSY-RELATED (~25%):
• ASM noncompliance
• Medication change

#1 PREDICTOR OF OUTCOME = ETIOLOGY
• 89% of SE deaths attributable to underlying cause
• Post-anoxic mortality: 69-81%`
    },
    
    treatment: {
      title: "SE Treatment Algorithm",
      content: `TIME IS BRAIN!

IMMEDIATE (0-5 min):
• ABCs
• IV access (or IM if no access)
• Check glucose - treat if low!
• Draw labs

FIRST-LINE (0-5 min):
BENZODIAZEPINES - Choose ONE:
• Lorazepam 0.1 mg/kg IV (max 4mg, may repeat)
• Midazolam 10mg IM (if no IV)
• Diazepam 0.15-0.2 mg/kg IV

~60-65% respond

SECOND-LINE (5-30 min):
If continues, add ONE:
• Fosphenytoin 20 mg PE/kg IV
• Levetiracetam 60 mg/kg IV (max 4500mg)
• Valproate 40 mg/kg IV

THIRD-LINE / REFRACTORY (>30 min):
• Prepare for intubation
• Continuous infusion: Midazolam, propofol, or pentobarbital
• ICU admission
• Continuous EEG monitoring REQUIRED

KEY PRINCIPLES:
1. DON'T WAIT for EEG/imaging to treat!
2. Give adequate doses
3. Have second-line ready
4. Always search for cause`
    },
    
    eeg_monitoring: {
      title: "EEG in Status Epilepticus",
      content: `WHEN IS CONTINUOUS EEG ESSENTIAL?

MANDATORY:
• Not at baseline 60 min after clinical SE
• After controlling convulsive SE
• Refractory SE management
• Intubated/paralyzed patient

WHY?
After clinical seizures stop, ~50% have ongoing electrographic seizures!

WHAT TO LOOK FOR:
• Ongoing seizures: Need more treatment
• Periodic discharges: High seizure risk
• Burst suppression: May be treatment target

DURATION:
• At least 12-24 hours after last seizure
• Longer for refractory SE`
    },
    
    differential: {
      title: "SE Differential Diagnosis",
      content: `NOT EVERYTHING THAT SHAKES IS SE!

FUNCTIONAL/PNES:
• Eyes CLOSED (usually open in SE)
• Variable, fluctuating movements
• Side-to-side head movements
• Very prolonged without physiologic changes
• Resistance to eye opening
CAUTION: Iatrogenic harm from inappropriate treatment!

MOVEMENT DISORDERS:
• No LOC
• May be rhythmic
• EEG normal

METABOLIC ENCEPHALOPATHY:
• Myoclonus, asterixis, tremor
• Usually irregular
• EEG: Slow, no seizures

POST-ANOXIC MYOCLONUS:
• May or may not be epileptic
• EEG essential for distinction
• Very poor prognosis either way

If uncertain, get EEG!`
    },
    
    prognosis: {
      title: "Complications and Prognosis",
      content: `SYSTEMIC COMPLICATIONS:
• Arrhythmias
• Hypoxia, aspiration
• Acidosis, hyperthermia
• Rhabdomyolysis
• Posterior shoulder dislocation

MORTALITY:
• Overall: 10-20%
• Refractory SE: 25-37%
• Post-anoxic: 69-81%
• ICU >1 week: >50%

LONG-TERM:
• 20-40% develop epilepsy
• ~33% have SE recurrence
• 10-50% with disabling deficits

KEY FACTOR: UNDERLYING ETIOLOGY`
    },
    
    myoclonic_se: {
      title: "Myoclonic SE - Special Considerations",
      content: `MYOCLONIC SE IS HETEROGENEOUS!

1. PRIMARY (in genetic epilepsies - JME):
• Usually responds to treatment
• GOOD prognosis
• Avoid phenytoin, carbamazepine

2. SYMPTOMATIC (encephalopathies):
• More refractory
• Prognosis depends on underlying condition

3. POST-ANOXIC:
• VERY POOR PROGNOSIS
• 89% mortality historically
• Some survivors now with TTM
• Don't use alone for prognostic decisions

NOT ALL MYOCLONUS IS EPILEPTIC:
• May be "status myoclonicus"
• Irregular, multifocal
• No EEG correlation
• Common in metabolic encephalopathy

EEG IS ESSENTIAL to distinguish!`
    }
  },
  
  clinical_reasoning_prompts: [
    {
      trigger: "se_definition",
      question: "When does seizure become status epilepticus?",
      teaching: "≥5 minutes continuous seizure OR recurrent without return to baseline. At 5 min, unlikely to stop on own and becomes harder to control. Treat immediately!"
    },
    {
      trigger: "first_line",
      question: "First-line treatment for SE?",
      teaching: "BENZODIAZEPINES: Lorazepam 0.1 mg/kg IV (max 4mg), Midazolam 10mg IM, or Diazepam IV. ~60-65% respond. Give adequate doses - underdosing is common!"
    },
    {
      trigger: "refractory",
      question: "What is refractory SE?",
      teaching: "Failed 2 appropriately dosed ASMs including IV benzo. Requires continuous infusion, ICU, and EEG monitoring. Super-refractory = persists ≥24h despite infusion."
    },
    {
      trigger: "eeg_timing",
      question: "When is urgent EEG needed?",
      teaching: "If not at baseline 60 min after clinical seizure; after convulsive SE controlled (50% have ongoing electrical seizures!); intubated/paralyzed patient; refractory SE."
    },
    {
      trigger: "post_anoxic",
      question: "Prognosis of post-anoxic myoclonic SE?",
      teaching: "Very poor (69-81% mortality). But some survivors with TTM. Don't use myoclonus alone for prognosis - consider EEG patterns and other factors."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STATUS_EPILEPTICUS_TEMPLATE;
}

// Combined export
const SEIZURE_TEMPLATES = { first_seizure_evaluation: FIRST_SEIZURE_TEMPLATE, status_epilepticus: STATUS_EPILEPTICUS_TEMPLATE };
