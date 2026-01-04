/**
 * ReasonDx Neurologic Emergencies Templates
 * Covers: Stroke Evaluation, Guillain-Barré Syndrome
 * Based on UpToDate clinical evidence
 * 
 * TEACHING FOCUS: Time-critical neurologic presentations
 * - Stroke: "Time is brain" - reperfusion windows
 * - GBS: Ascending weakness - respiratory monitoring
 */

const defined = (x) => x !== undefined && x !== null;

const NEURO_EMERGENCIES_TEMPLATES = {
  
  // ===========================================
  // STROKE EVALUATION TEMPLATE
  // ===========================================
  
  stroke_evaluation: {
    id: "stroke_evaluation",
    title: "Acute Stroke Evaluation",
    description: "Comprehensive stroke workup including classification, reperfusion candidacy, and etiology determination",
    
    defined_findings: {
      // Onset and timing
      time_last_known_well: { label: "Time last known well", type: "datetime" },
      wake_up_stroke: { label: "Woke up with symptoms", type: "boolean" },
      witnessed_onset: { label: "Witnessed onset", type: "boolean" },
      symptom_onset_sudden: { label: "Sudden onset (seconds to minutes)", type: "boolean" },
      symptom_fluctuating: { label: "Fluctuating/stuttering course", type: "boolean" },
      symptom_progressive: { label: "Progressive worsening", type: "boolean" },
      rapid_improvement: { label: "Rapid improvement occurring", type: "boolean" },
      
      // Presenting symptoms
      facial_droop: { label: "Facial droop", type: "boolean" },
      arm_weakness: { label: "Arm weakness", type: "boolean" },
      leg_weakness: { label: "Leg weakness", type: "boolean" },
      speech_abnormality: { label: "Speech abnormality (aphasia/dysarthria)", type: "boolean" },
      visual_field_deficit: { label: "Visual field deficit", type: "boolean" },
      diplopia: { label: "Diplopia", type: "boolean" },
      vertigo: { label: "Vertigo", type: "boolean" },
      ataxia: { label: "Ataxia/coordination problems", type: "boolean" },
      sensory_loss: { label: "Sensory loss", type: "boolean" },
      headache_severe: { label: "Severe headache", type: "boolean" },
      headache_worst_of_life: { label: '"Worst headache of life"', type: "boolean" },
      nausea_vomiting: { label: "Nausea/vomiting", type: "boolean" },
      altered_consciousness: { label: "Altered level of consciousness", type: "boolean" },
      seizure_at_onset: { label: "Seizure at onset", type: "boolean" },
      neck_stiffness: { label: "Neck stiffness", type: "boolean" },
      
      // Symptom lateralization
      symptoms_unilateral: { label: "Symptoms unilateral", type: "boolean" },
      symptoms_bilateral: { label: "Symptoms bilateral", type: "boolean" },
      crossed_findings: { label: "Crossed findings (face vs body)", type: "boolean" },
      
      // Vital signs
      bp_systolic: { label: "Systolic BP (mmHg)", type: "number" },
      bp_diastolic: { label: "Diastolic BP (mmHg)", type: "number" },
      heart_rate: { label: "Heart rate", type: "number" },
      heart_rate_irregular: { label: "Irregular heart rate", type: "boolean" },
      respiratory_rate: { label: "Respiratory rate", type: "number" },
      oxygen_saturation: { label: "Oxygen saturation (%)", type: "number" },
      temperature: { label: "Temperature (°C)", type: "number" },
      
      // Physical exam findings
      carotid_bruit: { label: "Carotid bruit", type: "boolean" },
      cardiac_murmur: { label: "Cardiac murmur", type: "boolean" },
      atrial_fibrillation: { label: "Atrial fibrillation on exam/ECG", type: "boolean" },
      absent_pulses: { label: "Absent peripheral pulses", type: "boolean" },
      retinal_emboli: { label: "Retinal emboli on fundoscopy", type: "boolean" },
      subhyaloid_hemorrhage: { label: "Subhyaloid hemorrhage", type: "boolean" },
      
      // Risk factors
      hypertension_history: { label: "History of hypertension", type: "boolean" },
      diabetes: { label: "Diabetes mellitus", type: "boolean" },
      atrial_fibrillation_history: { label: "Known atrial fibrillation", type: "boolean" },
      prior_stroke_tia: { label: "Prior stroke or TIA", type: "boolean" },
      prior_mi: { label: "Prior myocardial infarction", type: "boolean" },
      known_carotid_stenosis: { label: "Known carotid stenosis", type: "boolean" },
      heart_valve_disease: { label: "Heart valve disease", type: "boolean" },
      smoking: { label: "Current or recent smoker", type: "boolean" },
      cocaine_amphetamine_use: { label: "Cocaine/amphetamine use", type: "boolean" },
      recent_trauma: { label: "Recent head/neck trauma", type: "boolean" },
      recent_surgery: { label: "Recent surgery", type: "boolean" },
      
      // Anticoagulation status
      on_warfarin: { label: "On warfarin", type: "boolean" },
      on_doac: { label: "On DOAC (apixaban, rivaroxaban, etc.)", type: "boolean" },
      on_antiplatelet: { label: "On antiplatelet therapy", type: "boolean" },
      inr_value: { label: "INR value", type: "number" },
      
      // Imaging findings
      ct_hemorrhage: { label: "CT shows hemorrhage", type: "boolean" },
      ct_hypodensity: { label: "CT shows hypodensity/early infarct signs", type: "boolean" },
      ct_normal: { label: "CT normal", type: "boolean" },
      large_vessel_occlusion: { label: "Large vessel occlusion on CTA/MRA", type: "boolean" },
      lvo_location: { label: "LVO location", type: "string" },
      
      // Labs
      glucose: { label: "Glucose (mg/dL)", type: "number" },
      platelets: { label: "Platelet count", type: "number" },
      inr: { label: "INR", type: "number" },
      ptt: { label: "PTT", type: "number" },
      
      // NIHSS components (simplified)
      nihss_total: { label: "NIHSS total score", type: "number" }
    },
    
    defined_conditions: [
      "ischemic_stroke_large_vessel",
      "ischemic_stroke_cardioembolic", 
      "ischemic_stroke_lacunar",
      "intracerebral_hemorrhage",
      "subarachnoid_hemorrhage",
      "transient_ischemic_attack",
      "stroke_mimic"
    ],
    
    defined_workup: [
      "stat_noncontrast_ct_head",
      "ct_angiography_head_neck",
      "mri_brain_dwi",
      "ecg_12_lead",
      "cardiac_telemetry",
      "echocardiogram_tte",
      "echocardiogram_tee",
      "carotid_duplex",
      "transcranial_doppler",
      "prolonged_cardiac_monitoring",
      "hypercoagulable_workup",
      "lumbar_puncture"
    ],
    
    defined_treatments: [
      "iv_alteplase",
      "mechanical_thrombectomy",
      "blood_pressure_management",
      "aspirin_loading",
      "anticoagulation",
      "statin_high_intensity",
      "neurosurgical_consultation",
      "stroke_unit_admission",
      "icu_admission"
    ],
    
    defined_dispositions: [
      "stroke_unit",
      "neuro_icu",
      "interventional_radiology",
      "operating_room",
      "general_floor",
      "observation",
      "discharge_with_urgent_followup"
    ],
    
    teaching_points: {
      epidemiology: {
        title: "Stroke Epidemiology",
        content: `Approximately 80% of strokes are ischemic, 20% hemorrhagic.

ISCHEMIC STROKE CLASSIFICATION:
• Large vessel atherothrombotic: Carotid/intracranial stenosis
• Cardioembolic: AF, valve disease, recent MI, cardiomyopathy
• Small vessel (lacunar): Penetrating artery disease
• Other determined cause: Dissection, hypercoagulable, vasculitis
• Cryptogenic: No cause found despite workup

HEMORRHAGIC STROKE:
• Intracerebral hemorrhage (ICH): Usually hypertensive, amyloid angiopathy
• Subarachnoid hemorrhage (SAH): Usually aneurysmal rupture`
      },
      
      clinical_course_patterns: {
        title: "Clinical Course by Stroke Subtype",
        content: `The TEMPO of symptom onset is the most important historical feature:

EMBOLIC STROKE:
• Sudden onset - maximal deficit at start
• "Like flipping a switch"
• Rapid improvement suggests embolism ("spectacular shrinking deficit")

THROMBOTIC STROKE:
• Fluctuating, stuttering course
• Stepwise progression with periods of improvement
• May evolve over hours to days

LACUNAR INFARCT:
• Develops over hours to a few days
• Shorter evolution than large vessel disease
• Pure motor, pure sensory, or ataxic hemiparesis patterns

INTRACEREBRAL HEMORRHAGE:
• Gradual progression over minutes to hours
• Does NOT improve early - keeps getting worse
• "Snowball rolling downhill" as hematoma expands

SUBARACHNOID HEMORRHAGE:
• Instantaneous onset
• "Worst headache of my life" in 97%
• Brief loss of consciousness common
• Focal signs often ABSENT initially`
      },
      
      reperfusion_windows: {
        title: "Reperfusion Therapy Windows",
        content: `TIME IS BRAIN - Every minute matters!

IV ALTEPLASE (tPA):
• 0-3 hours: Standard window, strongest benefit
• 3-4.5 hours: Extended window with additional criteria
• Benefit decreases continuously over time
• Door-to-needle goal: <60 minutes

MECHANICAL THROMBECTOMY:
• Large vessel occlusion required (ICA, M1, M2, basilar)
• 0-6 hours: Standard window
• 6-24 hours: Selected patients with favorable imaging
  - Small core infarct on perfusion imaging
  - Significant salvageable tissue (penumbra)
• Door-to-groin goal: <90 minutes

KEY TEACHING POINT:
"Time last known well" is the clock that matters, NOT symptom discovery time.
Wake-up strokes may qualify for thrombectomy with perfusion imaging.`
      },
      
      tpa_contraindications: {
        title: "Alteplase Contraindications",
        content: `ABSOLUTE CONTRAINDICATIONS:
• Active internal bleeding
• Recent intracranial surgery, stroke, or head trauma (3 months)
• Intracranial neoplasm, AVM, or aneurysm
• Bleeding diathesis (platelets <100K, INR >1.7, therapeutic heparin)
• Uncontrolled severe hypertension (>185/110 despite treatment)
• CT evidence of hemorrhage

RELATIVE CONTRAINDICATIONS (risk-benefit discussion):
• Minor or rapidly improving symptoms
• Major surgery within 14 days
• GI/GU hemorrhage within 21 days
• Recent arterial puncture at noncompressible site
• Seizure at onset (if postictal paralysis suspected)
• Glucose <50 or >400 mg/dL
• Pregnancy (not absolute - discuss with patient)

IMPORTANT: Many "contraindications" are relative. The key question is whether the expected benefit outweighs the bleeding risk for THIS patient.`
      },
      
      hemorrhage_vs_ischemia: {
        title: "Distinguishing Hemorrhage from Ischemia",
        content: `CLINICAL CLUES (neither sensitive nor specific):

FAVORING HEMORRHAGE:
• Severe headache at onset
• Vomiting (common in ICH, posterior circulation)
• Rapid decrease in consciousness
• Marked hypertension (often >220 systolic in ICH)
• Seizure at onset (more common in lobar ICH)
• Progression over minutes to hours

FAVORING ISCHEMIA:
• Prior TIAs in same vascular territory
• Atrial fibrillation
• Known carotid stenosis
• Deficit maximal at onset without progression

CRITICAL POINT:
You CANNOT reliably distinguish hemorrhage from ischemia clinically!
NONCONTRAST CT is MANDATORY before any treatment decision.

CT for hemorrhage:
• ICH: Immediately visible as hyperdense (white) lesion
• SAH: Blood in subarachnoid space (sensitivity ~95% day 1, decreases over time)
• If SAH suspected and CT negative: LUMBAR PUNCTURE required`
      },
      
      large_vessel_occlusion_detection: {
        title: "Detecting Large Vessel Occlusion",
        content: `LVO identification is critical - these patients need thrombectomy evaluation!

CLINICAL SIGNS SUGGESTING LVO:
• NIHSS ≥6 (higher scores more predictive)
• Gaze deviation toward lesion
• Dense hemiplegia
• Aphasia (dominant hemisphere)
• Neglect (nondominant hemisphere)
• Cortical signs (aphasia, neglect, visual field cut)

LVO SCREENING SCALES:
• RACE scale ≥5: Sens 85%, Spec 68%
• LAMS ≥4: Sens 81%, Spec 89%

COMMON LVO LOCATIONS:
• Internal carotid artery (ICA)
• M1 segment of middle cerebral artery
• M2 segment (select patients)
• Basilar artery

CTA HEAD/NECK should be obtained with initial CT in suspected stroke - do not wait for tPA decision!`
      },
      
      cardiac_evaluation: {
        title: "Cardiac Evaluation in Stroke",
        content: `Cardiac evaluation is ESSENTIAL - heart disease is both cause and consequence of stroke.

IMMEDIATE:
• 12-lead ECG: Look for AF, MI, LVH
• Continuous cardiac monitoring: At least 24 hours

AF DETECTION:
• Standard monitoring misses paroxysmal AF
• Cryptogenic stroke: Consider prolonged monitoring (30 days)
• Loop recorder studies: 8-16% AF detection in cryptogenic stroke

ECHOCARDIOGRAPHY:
TTE preferred initial test for most patients:
• Evaluate LV function
• Detect LV thrombus (TTE better than TEE for apex)
• Identify valvular disease

TEE preferred for:
• Age <45 without known cardiac disease
• Suspected aortic source
• AF (look for LA appendage thrombus)
• Mechanical/bioprosthetic valves
• High suspicion for PFO

EMBOLIC SOURCES:
• High risk: AF, mechanical valve, recent MI with LV thrombus, 
  endocarditis, LA appendage thrombus
• Medium risk: PFO + atrial septal aneurysm, aortic atheroma ≥4mm,
  LV dysfunction without thrombus`
      },
      
      lacunar_syndromes: {
        title: "Lacunar Stroke Syndromes",
        content: `Lacunar infarcts = small deep infarcts from penetrating artery disease

CLASSIC LACUNAR SYNDROMES:
1. Pure motor hemiparesis
   • Face, arm, leg weakness - NO sensory, visual, or cognitive deficits
   • Location: Posterior limb internal capsule, pons

2. Pure sensory stroke
   • Face, arm, leg numbness - NO weakness
   • Location: Thalamus

3. Ataxic hemiparesis
   • Weakness + ipsilateral ataxia out of proportion to weakness
   • Location: Pons, internal capsule

4. Dysarthria-clumsy hand
   • Dysarthria + hand weakness/clumsiness
   • Location: Pons, internal capsule

KEY FEATURES:
• No cortical signs (aphasia, neglect, visual field cut)
• Small subcortical infarct on imaging (<1.5 cm)
• Risk factors: Hypertension (most important), diabetes

CAUTION: Early presentations mimicking lacunar syndrome may actually be LVO - obtain vascular imaging!`
      },
      
      posterior_circulation: {
        title: "Posterior Circulation Stroke",
        content: `Posterior circulation strokes are frequently MISSED or DELAYED in diagnosis!

SYMPTOMS SUGGESTING POSTERIOR CIRCULATION:
• Vertigo (distinguish from peripheral causes!)
• Diplopia
• Dysarthria
• Dysphagia
• Ataxia/incoordination
• Crossed findings (ipsilateral face, contralateral body)
• Bilateral motor or sensory symptoms
• Hemianopia or bilateral visual loss
• Decreased consciousness (basilar involvement)

CLASSIC SYNDROMES:
• Lateral medullary (Wallenberg): Vertigo, nystagmus, ipsilateral 
  Horner's, ipsilateral face/contralateral body sensory loss, ataxia
• Basilar artery occlusion: Quadriplegia, coma, locked-in syndrome
• Top of basilar: Visual, memory, behavioral changes

MIMICS TO CONSIDER:
• Peripheral vertigo (BPPV, vestibular neuritis)
• Migraine with brainstem aura

PEARL: The "5 D's" of posterior circulation:
Dizziness, Diplopia, Dysarthria, Dysphagia, Dystaxia`
      },
      
      stroke_mimics: {
        title: "Stroke Mimics",
        content: `Up to 30% of patients with suspected stroke have a mimic!

COMMON MIMICS:
• Hypoglycemia - ALWAYS check glucose immediately!
• Seizure with postictal (Todd's) paralysis
• Migraine with aura (hemiplegic migraine)
• Conversion disorder/functional symptoms
• Syncope
• Peripheral vertigo (for posterior circulation)
• Drug toxicity
• Hypertensive encephalopathy
• Brain tumor

LESS COMMON BUT IMPORTANT:
• Hyperosmolar hyperglycemic state
• Hepatic encephalopathy
• Wernicke encephalopathy
• Subdural hematoma
• CNS infection (abscess, encephalitis)
• Demyelinating disease (MS)

RED FLAGS FOR MIMIC:
• Symptom migration/evolution over minutes
• Positive symptoms (tingling spreading) rather than negative (weakness)
• Prior similar episodes with complete resolution
• Psychiatric history without vascular risk factors
• Inconsistent exam findings

CRITICAL: Do NOT let concern for mimics delay treatment!
If in doubt, err on side of treating true stroke.`
      },
      
      blood_pressure_management: {
        title: "Blood Pressure Management in Stroke",
        content: `BP management depends on stroke type and treatment plan:

ISCHEMIC STROKE - RECEIVING tPA:
• Must achieve BP <185/110 BEFORE tPA
• Maintain BP <180/105 for 24 hours AFTER tPA
• Agents: Labetalol, nicardipine, clevidipine

ISCHEMIC STROKE - NOT RECEIVING tPA:
• Generally allow permissive hypertension
• Treat only if BP >220/120
• Avoid rapid or aggressive reduction

INTRACEREBRAL HEMORRHAGE:
• Target SBP <140 mmHg (if presenting SBP 150-220)
• Intensive reduction may reduce hematoma expansion
• Avoid SBP <110 (may worsen outcomes)

SUBARACHNOID HEMORRHAGE:
• Before aneurysm secured: SBP <160 to prevent rebleeding
• Avoid hypotension (risk of vasospasm/DCI)

KEY TEACHING POINT:
Elevated BP in acute stroke is often COMPENSATORY to maintain 
cerebral perfusion. Aggressive lowering can worsen ischemia!`
      },
      
      secondary_prevention: {
        title: "Secondary Stroke Prevention",
        content: `Prevention starts in the hospital after acute treatment!

ANTIPLATELET THERAPY:
• Aspirin 325mg within 24-48 hours (if no hemorrhage)
• Dual antiplatelet (aspirin + clopidogrel) for 21 days in 
  minor stroke/TIA with ABCD2 ≥4
• Then single antiplatelet long-term

ANTICOAGULATION:
• AF: Anticoagulation for most (DOAC preferred over warfarin)
• Timing: Wait 4-14 days depending on infarct size
• Large infarct: Longer delay due to hemorrhagic transformation risk

CAROTID DISEASE:
• Symptomatic stenosis 50-99%: CEA or CAS
• Timing: Within 2 weeks of event ideally

RISK FACTOR MANAGEMENT:
• High-intensity statin for ALL ischemic strokes
• Blood pressure control (target generally <130/80)
• Diabetes management
• Smoking cessation
• Lifestyle modifications`
      }
    },
    
    clinical_reasoning_prompts: [
      {
        trigger: "sudden_onset",
        question: "The sudden, maximal-at-onset nature of symptoms suggests which stroke mechanism?",
        teaching: "Embolic strokes characteristically present with sudden onset and maximal deficit at start, 'like flipping a switch.' This contrasts with thrombotic strokes which typically fluctuate or progress in a stuttering fashion."
      },
      {
        trigger: "headache_worst_of_life",
        question: "What diagnosis must be immediately considered with 'worst headache of life' and what is the next step?",
        teaching: "Subarachnoid hemorrhage presents with sudden severe headache in 97% of cases. Immediate noncontrast CT is required. If CT is negative but suspicion remains, lumbar puncture is mandatory - CT sensitivity decreases over time from ~95% on day 1."
      },
      {
        trigger: "fluctuating_symptoms",
        question: "Fluctuating or stuttering symptoms suggest which stroke mechanism?",
        teaching: "Thrombotic strokes often have a fluctuating course with stepwise progression and periods of improvement, reflecting unstable thrombus with variable flow. This 'stuttering' pattern is less common in embolic strokes."
      },
      {
        trigger: "pure_motor_deficit",
        question: "A pure motor hemiparesis without cortical signs suggests what type of stroke?",
        teaching: "Pure motor hemiparesis (face, arm, leg weakness without sensory, visual, or cognitive deficits) is a classic lacunar syndrome, typically from small vessel disease in the internal capsule or pons. However, early LVO can mimic this - vascular imaging is important."
      },
      {
        trigger: "af_detected",
        question: "What is the significance of detecting atrial fibrillation in this stroke patient?",
        teaching: "AF is the most common cardiac source of embolism, increasing stroke risk 5-fold. Detection changes management: anticoagulation is indicated for secondary prevention. Note that 30-day monitoring detects AF in 8-16% of cryptogenic strokes missed on initial evaluation."
      },
      {
        trigger: "young_stroke",
        question: "What additional etiologies should be considered in stroke patients under age 45?",
        teaching: "Young stroke requires expanded workup: arterial dissection (especially with trauma/neck pain), PFO with paradoxical embolism, hypercoagulable states, vasculitis, illicit drugs (cocaine, amphetamines), and cardiomyopathy. TEE is often preferred over TTE in this group."
      }
    ]
  },

  // ===========================================
  // GUILLAIN-BARRÉ SYNDROME TEMPLATE
  // ===========================================
  
  guillain_barre: {
    id: "guillain_barre",
    title: "Guillain-Barré Syndrome Evaluation",
    description: "Acute inflammatory polyneuropathy workup including variant recognition and respiratory monitoring",
    
    defined_findings: {
      // Symptom timeline
      symptom_duration_days: { label: "Days since symptom onset", type: "number" },
      symptom_progression: { label: "Symptoms still progressing", type: "boolean" },
      nadir_reached: { label: "Nadir reached", type: "boolean" },
      time_to_nadir_hours: { label: "Hours to nadir (if reached)", type: "number" },
      
      // Antecedent events
      preceding_infection: { label: "Preceding infection within 4 weeks", type: "boolean" },
      preceding_uri: { label: "Upper respiratory infection", type: "boolean" },
      preceding_gastroenteritis: { label: "Gastroenteritis/diarrhea", type: "boolean" },
      preceding_vaccination: { label: "Recent vaccination", type: "boolean" },
      vaccine_type: { label: "Vaccine type", type: "string" },
      recent_surgery: { label: "Recent surgery", type: "boolean" },
      
      // Motor symptoms
      leg_weakness: { label: "Leg weakness", type: "boolean" },
      arm_weakness: { label: "Arm weakness", type: "boolean" },
      weakness_symmetric: { label: "Weakness symmetric", type: "boolean" },
      weakness_ascending: { label: "Ascending pattern", type: "boolean" },
      weakness_proximal: { label: "Proximal weakness", type: "boolean" },
      weakness_distal: { label: "Distal weakness", type: "boolean" },
      facial_weakness: { label: "Facial weakness", type: "boolean" },
      facial_weakness_bilateral: { label: "Bilateral facial weakness", type: "boolean" },
      bulbar_weakness: { label: "Bulbar weakness (dysphagia/dysarthria)", type: "boolean" },
      neck_weakness: { label: "Neck flexor weakness", type: "boolean" },
      respiratory_symptoms: { label: "Dyspnea or respiratory difficulty", type: "boolean" },
      
      // Cranial nerve involvement
      ophthalmoplegia: { label: "Ophthalmoplegia", type: "boolean" },
      ptosis: { label: "Ptosis", type: "boolean" },
      pupil_abnormality: { label: "Pupillary abnormality", type: "boolean" },
      
      // Sensory symptoms
      paresthesias: { label: "Paresthesias (hands/feet)", type: "boolean" },
      sensory_loss: { label: "Objective sensory loss", type: "boolean" },
      sensory_level: { label: "Sensory level present", type: "boolean" },
      back_pain: { label: "Back pain", type: "boolean" },
      limb_pain: { label: "Limb pain", type: "boolean" },
      
      // Reflexes
      reflexes_absent: { label: "Absent reflexes", type: "boolean" },
      reflexes_decreased: { label: "Decreased reflexes", type: "boolean" },
      reflexes_normal: { label: "Normal reflexes", type: "boolean" },
      reflexes_increased: { label: "Increased reflexes", type: "boolean" },
      
      // Ataxia
      ataxia: { label: "Ataxia", type: "boolean" },
      gait_ataxia: { label: "Gait ataxia", type: "boolean" },
      limb_ataxia: { label: "Limb ataxia", type: "boolean" },
      
      // Autonomic dysfunction
      autonomic_symptoms: { label: "Autonomic symptoms present", type: "boolean" },
      tachycardia: { label: "Tachycardia", type: "boolean" },
      bradycardia: { label: "Bradycardia", type: "boolean" },
      blood_pressure_lability: { label: "Blood pressure lability", type: "boolean" },
      orthostatic_hypotension: { label: "Orthostatic hypotension", type: "boolean" },
      urinary_retention: { label: "Urinary retention", type: "boolean" },
      ileus: { label: "Ileus/constipation", type: "boolean" },
      diaphoresis: { label: "Excessive sweating", type: "boolean" },
      
      // Mental status
      encephalopathy: { label: "Encephalopathy/altered consciousness", type: "boolean" },
      
      // Respiratory assessment
      fvc_liters: { label: "Forced vital capacity (liters)", type: "number" },
      fvc_percent_predicted: { label: "FVC % predicted", type: "number" },
      nif_cm_h2o: { label: "Negative inspiratory force (cm H2O)", type: "number" },
      single_breath_count: { label: "Single breath count", type: "number" },
      orthopnea: { label: "Orthopnea", type: "boolean" },
      use_accessory_muscles: { label: "Using accessory muscles", type: "boolean" },
      paradoxical_breathing: { label: "Paradoxical breathing", type: "boolean" },
      
      // CSF findings
      csf_protein: { label: "CSF protein (mg/dL)", type: "number" },
      csf_wbc: { label: "CSF WBC count", type: "number" },
      csf_rbc: { label: "CSF RBC count", type: "number" },
      albuminocytologic_dissociation: { label: "Albuminocytologic dissociation", type: "boolean" },
      
      // Nerve conduction findings
      ncs_demyelinating: { label: "NCS shows demyelinating pattern", type: "boolean" },
      ncs_axonal: { label: "NCS shows axonal pattern", type: "boolean" },
      ncs_normal: { label: "NCS normal", type: "boolean" },
      f_waves_prolonged: { label: "F waves prolonged or absent", type: "boolean" },
      conduction_block: { label: "Conduction block present", type: "boolean" },
      temporal_dispersion: { label: "Temporal dispersion", type: "boolean" },
      sural_sparing: { label: "Sural sparing pattern", type: "boolean" },
      
      // Antibodies
      anti_gq1b_positive: { label: "Anti-GQ1b antibodies positive", type: "boolean" },
      anti_gm1_positive: { label: "Anti-GM1 antibodies positive", type: "boolean" },
      anti_gd1a_positive: { label: "Anti-GD1a antibodies positive", type: "boolean" },
      
      // Other labs
      campylobacter_positive: { label: "Campylobacter testing positive", type: "boolean" }
    },
    
    defined_conditions: [
      "aidp", // Acute inflammatory demyelinating polyneuropathy
      "aman", // Acute motor axonal neuropathy
      "amsan", // Acute motor sensory axonal neuropathy
      "miller_fisher_syndrome",
      "bickerstaff_brainstem_encephalitis",
      "pharyngeal_cervical_brachial",
      "acute_pandysautonomia",
      "transverse_myelitis",
      "myasthenia_gravis",
      "botulism",
      "tick_paralysis",
      "critical_illness_polyneuropathy"
    ],
    
    defined_workup: [
      "lumbar_puncture",
      "nerve_conduction_studies",
      "emg",
      "mri_spine_with_contrast",
      "mri_brain",
      "antiganglioside_antibodies",
      "pulmonary_function_bedside",
      "arterial_blood_gas",
      "stool_culture_campylobacter",
      "cmv_serology",
      "hiv_testing",
      "lyme_serology"
    ],
    
    defined_treatments: [
      "ivig",
      "plasma_exchange",
      "supportive_care",
      "intubation_mechanical_ventilation",
      "dvt_prophylaxis",
      "pain_management",
      "bowel_regimen",
      "physical_therapy",
      "occupational_therapy"
    ],
    
    defined_dispositions: [
      "icu_admission",
      "step_down_unit",
      "general_neurology_floor",
      "rehabilitation"
    ],
    
    teaching_points: {
      pathogenesis: {
        title: "GBS Pathogenesis and Molecular Mimicry",
        content: `GBS is triggered by immune response cross-reacting with nerve epitopes (molecular mimicry).

ANTECEDENT INFECTIONS (76% of patients report triggering event):
• Campylobacter jejuni: Most common (25-30%), associated with axonal forms
  - Only 70% report diarrhea; can be subclinical infection
  - Strongly associated with AMAN/AMSAN
  - Associated with anti-GM1, anti-GD1a antibodies
  
• Cytomegalovirus: Associated with severe sensorimotor deficits, anti-GM2 antibodies

• Influenza: Both A and B; influenza B may be more severe

• Other: EBV, Mycoplasma, Zika virus, COVID-19, Hepatitis E

PATHOPHYSIOLOGY:
• AIDP: Demyelinating - T cells and macrophages attack myelin
• AMAN/AMSAN: Axonal - antibodies attack nodes of Ranvier directly
• Complement activation is key in axonal forms

VACCINATION:
• Risk extremely low: ~1-2 excess cases per million vaccinated
• Much lower than risk from natural infection
• Influenza vaccine risk well-studied: negligible or small`
      },
      
      clinical_features: {
        title: "Clinical Features and Time Course",
        content: `CLASSIC PRESENTATION:
• Progressive, relatively symmetric weakness
• Ascending pattern (legs before arms) in most
• Hyporeflexia or areflexia in weak limbs
• Sensory symptoms common but exam often mild

TIME COURSE:
• Symptom onset over days to 2 weeks (typical)
• Nadir by 4 weeks in >90% of patients
• If nadir <24 hours: Consider other diagnoses
• If progression >4 weeks: Consider CIDP

FREQUENCY OF FINDINGS:
• Limb weakness: Near universal at nadir
• Facial weakness: >50%
• Bulbar symptoms: ~50%
• Respiratory failure requiring ventilation: 10-30%
• Autonomic dysfunction: 38-70%
• Pain (back, limbs): 66%
• Paresthesias: >80%

AUTONOMIC DYSFUNCTION (Can be life-threatening!):
• Ileus (42%)
• Hypertension (39%)
• Hypotension (37%)
• Fever (29%)
• Tachycardia/bradycardia (27%)
• Urinary retention (24%)
• Associated with higher mortality (6% vs 0%)`
      },
      
      variant_forms: {
        title: "GBS Variant Forms",
        content: `GEOGRAPHIC VARIATION: Axonal forms more common in Asia; AIDP dominates in West

ACUTE INFLAMMATORY DEMYELINATING POLYNEUROPATHY (AIDP):
• Most common form in US/Europe (85-90%)
• Demyelinating pattern on NCS
• Classic ascending weakness with areflexia

ACUTE MOTOR AXONAL NEUROPATHY (AMAN):
• Common in Asia, associated with C. jejuni
• Pure motor involvement - sensory spared
• May have PRESERVED reflexes
• Anti-GM1, anti-GD1a antibodies
• Can have reversible conduction failure with rapid recovery

ACUTE MOTOR SENSORY AXONAL NEUROPATHY (AMSAN):
• Severe form with sensory AND motor axonal damage
• Often incomplete recovery
• Same antibodies as AMAN

MILLER FISHER SYNDROME (MFS):
• Triad: Ophthalmoplegia + Ataxia + Areflexia
• Anti-GQ1b antibodies in 85-90%
• Usually does NOT have limb weakness
• ~25% develop some limb weakness
• May have dilated, fixed pupils

BICKERSTAFF BRAINSTEM ENCEPHALITIS (BBE):
• Encephalopathy + ophthalmoplegia + ataxia
• Anti-GQ1b positive
• Responds to IVIG/PLEX
• MRI may show brainstem abnormalities

PHARYNGEAL-CERVICAL-BRACHIAL (PCB):
• Oropharyngeal, neck, shoulder weakness
• Legs often spared
• Overlaps with MFS
• Anti-GT1a antibodies (cross-react with GQ1b)`
      },
      
      diagnostic_criteria: {
        title: "Diagnostic Criteria and Workup",
        content: `REQUIRED FEATURES (NINDS Criteria):
• Progressive weakness of arms and/or legs
• Areflexia or hyporeflexia in weak limbs
• Progression for ≤4 weeks

SUPPORTIVE FEATURES:
• Relatively symmetric weakness
• Mild sensory symptoms or signs
• Cranial nerve involvement (especially facial)
• Autonomic dysfunction
• Pain
• Preceding infection (1-4 weeks prior)
• No fever at symptom onset

CSF FINDINGS:
• Albuminocytologic dissociation (high protein, normal cells)
• Protein elevated in ~84% after day 4
• May be NORMAL in first week (50-66% have it week 1)
• WBC typically <5 cells/mm³
• WBC 5-50: Still consistent with GBS (15% of patients)
• WBC >50: Look for other causes (HIV, Lyme, CMV, carcinomatous)

ELECTRODIAGNOSTIC STUDIES:
• May be normal early - repeat in 1-2 weeks if nondiagnostic
• Peak abnormalities at 3-4 weeks
• Demyelinating: Prolonged F-waves (earliest), prolonged distal latencies, 
  conduction block, temporal dispersion, slow velocities
• Axonal: Low CMAP amplitudes, preserved velocities
• Sural sparing: Abnormal median sensory, normal sural - suggests GBS over 
  length-dependent neuropathy`
      },
      
      respiratory_monitoring: {
        title: "Respiratory Monitoring - Critical!",
        content: `10-30% of GBS patients require mechanical ventilation!

BEDSIDE PULMONARY FUNCTION:
• FVC (Forced Vital Capacity): Most important measure
• NIF (Negative Inspiratory Force): Also called MIP

"20-30-40 RULE" for intubation:
• FVC <20 mL/kg
• NIF worse than -30 cm H2O (less negative)
• FVC decline >30% from baseline

SINGLE BREATH COUNT:
• Count to highest number in one breath
• <20 suggests FVC <1.5L
• Quick bedside assessment

WARNING SIGNS FOR RESPIRATORY FAILURE:
• Rapid progression of weakness
• Bulbar dysfunction (dysphagia, weak cough)
• Autonomic instability
• Orthopnea
• Use of accessory muscles
• Paradoxical breathing (abdomen moves inward with inspiration)
• Difficulty speaking full sentences

MONITORING FREQUENCY:
• Measure FVC/NIF every 4-6 hours initially
• More frequent if rapidly declining
• ICU admission for close monitoring if any concern

IMPORTANT: ABG and O2 sat are LATE findings!
Don't wait for hypoxia/hypercapnia - intubate based on mechanics.`
      },
      
      treatment: {
        title: "Treatment of GBS",
        content: `DISEASE-MODIFYING THERAPY:
Two proven options with equivalent efficacy:

1. IVIG (Intravenous Immunoglobulin):
   • Total dose: 2 g/kg over 2-5 days
   • Usually 0.4 g/kg daily x 5 days
   • Easier to administer than PLEX
   • Side effects: Headache, aseptic meningitis, renal failure (rare), 
     thrombosis, anaphylaxis (IgA deficiency)

2. Plasma Exchange (PLEX):
   • 5 exchanges over 1-2 weeks
   • Requires large-bore venous access
   • May be preferred if IVIG contraindicated
   • Complications: Hypotension, citrate toxicity, line infections

IMPORTANT:
• Combining IVIG + PLEX is NOT better than either alone
• Glucocorticoids are NOT effective
• Treat within 2 weeks of symptom onset for best results
• Can still benefit patients up to 4 weeks from onset

SUPPORTIVE CARE:
• DVT prophylaxis (high risk due to immobility)
• Pain management (can be severe)
• Bowel regimen (autonomic dysfunction causes ileus)
• Early PT/OT
• Nutritional support
• Monitor for SIADH

ICU MONITORING FOR:
• Respiratory failure risk
• Autonomic instability (arrhythmias, BP swings)
• Bulbar dysfunction with aspiration risk`
      },
      
      differential_diagnosis: {
        title: "GBS Differential Diagnosis",
        content: `FEATURES THAT SHOULD PROMPT ALTERNATIVE DIAGNOSIS:

• Nadir <24 hours: Vascular, toxin, or spinal cord cause
• Nadir >4 weeks: CIDP
• Prominent sensory level: Spinal cord pathology
• Early/severe bowel/bladder: Spinal cord pathology
• Marked asymmetry: Mononeuritis multiplex, polio
• CSF pleocytosis >50: HIV, Lyme, CMV, carcinomatous meningitis
• Fever at onset: Infectious cause

KEY DIFFERENTIAL DIAGNOSES:

SPINAL CORD:
• Transverse myelitis: Sensory level, early bladder dysfunction
• Cord compression: Back pain, sensory level, bowel/bladder
• Spinal cord infarction: Hyperacute onset, sensory level

NEUROMUSCULAR JUNCTION:
• Myasthenia gravis: Fatigable weakness, normal reflexes, ptosis
• Botulism: Descending weakness, pupil involvement, constipation
• Lambert-Eaton: Proximal weakness, autonomic symptoms, improves with use

OTHER NEUROPATHIES:
• Tick paralysis: Ascending weakness, look for tick!
• Critical illness polyneuropathy: ICU setting
• Diphtheria: Palatal weakness early, travel history
• Porphyria: Abdominal pain, psychiatric symptoms
• Arsenic/heavy metal: GI symptoms, check levels

MUSCLE:
• Inflammatory myopathy: Proximal weakness, elevated CK, normal reflexes
• Critical illness myopathy: ICU setting, CK elevated`
      },
      
      prognosis: {
        title: "GBS Prognosis",
        content: `OVERALL OUTCOMES:
• Most patients recover substantially
• 80% walk independently at 6 months
• Full recovery in many, but often takes months to years
• 3-10% mortality (respiratory failure, autonomic dysfunction)
• 20% have significant residual disability

POOR PROGNOSTIC FACTORS:
• Older age (>60 years)
• Preceding Campylobacter infection
• Rapid progression to nadir
• Need for mechanical ventilation
• Axonal pattern on NCS
• Low CMAP amplitudes
• Severe disability at nadir

RECOVERY PATTERN:
• Improvement typically starts 2-4 weeks after plateau
• Proximal muscles recover before distal
• Fatigue may persist for years
• Pain may persist

RECURRENCE:
• 2-5% of patients have recurrent GBS
• If >3 recurrences or progression >8 weeks: Consider CIDP

CIDP CONSIDERATION:
• If progression continues >8 weeks
• If treatment-related fluctuations occur ≥3 times
• Different treatment approach (chronic immunotherapy)`
      }
    },
    
    clinical_reasoning_prompts: [
      {
        trigger: "ascending_weakness_areflexia",
        question: "What is the classic presentation being described, and what is the most important immediate assessment?",
        teaching: "Ascending weakness with areflexia is the classic GBS presentation. The most critical immediate assessment is respiratory function (FVC, NIF) - 10-30% of patients require mechanical ventilation. Monitor every 4-6 hours initially."
      },
      {
        trigger: "preceding_diarrhea",
        question: "What organism is most commonly associated with GBS following gastroenteritis, and what variant is it linked to?",
        teaching: "Campylobacter jejuni is the most common antecedent infection (25-30% of cases), strongly associated with axonal variants (AMAN/AMSAN) and anti-GM1/GD1a antibodies. Notably, only 70% of infected patients report diarrhea."
      },
      {
        trigger: "ophthalmoplegia_ataxia",
        question: "What GBS variant presents with ophthalmoplegia and ataxia, and what antibody is associated?",
        teaching: "Miller Fisher Syndrome presents with the triad of ophthalmoplegia, ataxia, and areflexia. Anti-GQ1b antibodies are positive in 85-90% of cases. If encephalopathy is also present, consider Bickerstaff brainstem encephalitis."
      },
      {
        trigger: "normal_csf_early",
        question: "If CSF protein is normal in a patient with suspected GBS, does this rule out the diagnosis?",
        teaching: "No! CSF protein may be normal in 34-50% of patients during the first week. Albuminocytologic dissociation increases to 84% after day 4. If clinical suspicion is high, proceed with treatment and repeat LP later if needed."
      },
      {
        trigger: "preserved_reflexes",
        question: "Can GBS occur with preserved or even increased reflexes?",
        teaching: "Yes! While hyporeflexia is classic, reflexes may be preserved in axonal variants (AMAN) and Bickerstaff brainstem encephalitis. Preserved reflexes are more common in patients with preceding diarrhea and in Asian populations."
      },
      {
        trigger: "csf_pleocytosis",
        question: "What should be considered when CSF shows significant pleocytosis in suspected GBS?",
        teaching: "While mild pleocytosis (5-50 cells) occurs in 15% of GBS, WBC >50 should prompt evaluation for HIV, Lyme disease, CMV, or carcinomatous meningitis. GBS in HIV patients characteristically has pleocytosis."
      },
      {
        trigger: "rapid_nadir",
        question: "If a patient reaches maximum weakness within 24 hours, is GBS still the likely diagnosis?",
        teaching: "Nadir within 24 hours is atypical for GBS and should prompt consideration of vascular (spinal cord infarction), toxic, or other etiologies. GBS typically progresses over days to 2 weeks, with >90% reaching nadir by 4 weeks."
      },
      {
        trigger: "autonomic_instability",
        question: "What is the clinical significance of autonomic dysfunction in GBS?",
        teaching: "Autonomic dysfunction occurs in 38-70% of GBS patients and is associated with increased mortality (6% vs 0%). It can cause life-threatening arrhythmias, blood pressure swings, and ileus. These patients need ICU-level monitoring."
      }
    ]
  }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NEURO_EMERGENCIES_TEMPLATES;
}
