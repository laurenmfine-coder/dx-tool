/**
 * ReasonDx Dizziness & Vertigo Evaluation Templates
 * Based on UpToDate clinical evidence
 * 
 * TEACHING FOCUS: 
 * - Distinguishing dizziness categories (vertigo, presyncope, disequilibrium, nonspecific)
 * - Central vs peripheral vertigo differentiation
 * - HINTS exam for acute vestibular syndrome
 * - BPPV diagnosis and treatment
 * - Time-based approach to diagnosis
 */

const defined = (x) => x !== undefined && x !== null;

const DIZZINESS_VERTIGO_TEMPLATES = {
  
  // ===========================================
  // DIZZINESS EVALUATION TEMPLATE
  // ===========================================
  
  dizziness_evaluation: {
    id: "dizziness_evaluation",
    title: "Approach to the Dizzy Patient",
    description: "Comprehensive evaluation distinguishing vestibular, presyncope, disequilibrium, and nonspecific dizziness",
    
    defined_findings: {
      // Symptom quality
      sensation_spinning: { label: "Spinning sensation", type: "boolean" },
      sensation_tilting: { label: "Tilting/swaying sensation", type: "boolean" },
      sensation_lightheaded: { label: "Lightheadedness", type: "boolean" },
      sensation_near_faint: { label: "Near-faint/about to black out", type: "boolean" },
      sensation_imbalance: { label: "Imbalance/unsteadiness", type: "boolean" },
      sensation_vague: { label: "Vague/nonspecific dizziness", type: "boolean" },
      illusion_self_motion: { label: "Feels like self is moving", type: "boolean" },
      illusion_environment_moving: { label: "Feels like environment is moving", type: "boolean" },
      
      // Duration and timing
      duration_seconds: { label: "Episodes last seconds", type: "boolean" },
      duration_minutes: { label: "Episodes last minutes", type: "boolean" },
      duration_hours: { label: "Episodes last hours", type: "boolean" },
      duration_days: { label: "Episodes last days", type: "boolean" },
      duration_constant: { label: "Symptoms constant/continuous", type: "boolean" },
      single_episode: { label: "Single episode (first time)", type: "boolean" },
      recurrent_episodes: { label: "Recurrent episodes", type: "boolean" },
      onset_sudden: { label: "Sudden onset", type: "boolean" },
      current_episode_duration_hours: { label: "Current episode duration (hours)", type: "number" },
      
      // Provoking/aggravating factors
      worse_with_head_movement: { label: "Worse with head movement", type: "boolean" },
      triggered_by_position_change: { label: "Triggered by position change", type: "boolean" },
      triggered_lying_down: { label: "Triggered by lying down", type: "boolean" },
      triggered_rolling_over: { label: "Triggered by rolling over in bed", type: "boolean" },
      triggered_looking_up: { label: "Triggered by looking up", type: "boolean" },
      triggered_standing: { label: "Triggered by standing", type: "boolean" },
      triggered_loud_sounds: { label: "Triggered by loud sounds (Tullio)", type: "boolean" },
      triggered_coughing_valsalva: { label: "Triggered by coughing/Valsalva", type: "boolean" },
      occurs_spontaneously: { label: "Occurs spontaneously", type: "boolean" },
      worse_in_dark: { label: "Worse in dark/low light", type: "boolean" },
      
      // Associated symptoms
      nausea: { label: "Nausea", type: "boolean" },
      vomiting: { label: "Vomiting", type: "boolean" },
      hearing_loss: { label: "Hearing loss", type: "boolean" },
      hearing_loss_unilateral: { label: "Unilateral hearing loss", type: "boolean" },
      tinnitus: { label: "Tinnitus", type: "boolean" },
      ear_fullness: { label: "Aural fullness", type: "boolean" },
      headache: { label: "Headache", type: "boolean" },
      headache_migraine_features: { label: "Headache with migraine features", type: "boolean" },
      photophobia: { label: "Photophobia", type: "boolean" },
      phonophobia: { label: "Phonophobia", type: "boolean" },
      diplopia: { label: "Diplopia", type: "boolean" },
      dysarthria: { label: "Dysarthria", type: "boolean" },
      dysphagia: { label: "Dysphagia", type: "boolean" },
      facial_numbness: { label: "Facial numbness", type: "boolean" },
      limb_weakness: { label: "Limb weakness", type: "boolean" },
      limb_numbness: { label: "Limb numbness", type: "boolean" },
      ataxia: { label: "Ataxia/incoordination", type: "boolean" },
      oscillopsia: { label: "Oscillopsia (jumping vision with movement)", type: "boolean" },
      palpitations: { label: "Palpitations", type: "boolean" },
      diaphoresis: { label: "Diaphoresis", type: "boolean" },
      pallor: { label: "Pallor noted by others", type: "boolean" },
      
      // Risk factors and history
      prior_similar_episodes: { label: "Prior similar episodes", type: "boolean" },
      history_migraine: { label: "History of migraine", type: "boolean" },
      history_meniere: { label: "Known Meniere disease", type: "boolean" },
      history_bppv: { label: "History of BPPV", type: "boolean" },
      recent_viral_illness: { label: "Recent viral illness", type: "boolean" },
      recent_head_trauma: { label: "Recent head trauma", type: "boolean" },
      history_stroke_tia: { label: "History of stroke/TIA", type: "boolean" },
      history_atrial_fibrillation: { label: "History of atrial fibrillation", type: "boolean" },
      history_heart_disease: { label: "History of heart disease", type: "boolean" },
      hypertension: { label: "Hypertension", type: "boolean" },
      diabetes: { label: "Diabetes", type: "boolean" },
      smoking: { label: "Smoking", type: "boolean" },
      aminoglycoside_exposure: { label: "Aminoglycoside exposure", type: "boolean" },
      psychiatric_history: { label: "Anxiety/depression history", type: "boolean" },
      age_over_60: { label: "Age >60 years", type: "boolean" },
      
      // Medications
      new_medication: { label: "Recently started new medication", type: "boolean" },
      on_anticonvulsants: { label: "On anticonvulsants", type: "boolean" },
      on_antidepressants: { label: "On antidepressants", type: "boolean" },
      on_antihypertensives: { label: "On antihypertensives", type: "boolean" },
      polypharmacy: { label: "5+ medications", type: "boolean" },
      
      // Physical exam - vital signs
      orthostatic_hypotension: { label: "Orthostatic hypotension", type: "boolean" },
      bp_drop_systolic: { label: "Systolic BP drop on standing (mmHg)", type: "number" },
      irregular_heart_rhythm: { label: "Irregular heart rhythm", type: "boolean" },
      
      // Physical exam - nystagmus
      nystagmus_present: { label: "Nystagmus present", type: "boolean" },
      nystagmus_spontaneous: { label: "Spontaneous nystagmus", type: "boolean" },
      nystagmus_horizontal: { label: "Horizontal nystagmus", type: "boolean" },
      nystagmus_vertical: { label: "Vertical nystagmus", type: "boolean" },
      nystagmus_torsional: { label: "Torsional nystagmus", type: "boolean" },
      nystagmus_direction_fixed: { label: "Nystagmus direction fixed (unidirectional)", type: "boolean" },
      nystagmus_direction_changing: { label: "Nystagmus direction changes with gaze", type: "boolean" },
      nystagmus_suppressed_fixation: { label: "Nystagmus suppressed with visual fixation", type: "boolean" },
      
      // Physical exam - HINTS components
      head_impulse_test_abnormal: { label: "Head impulse test abnormal (corrective saccade)", type: "boolean" },
      head_impulse_test_normal: { label: "Head impulse test normal", type: "boolean" },
      skew_deviation_present: { label: "Skew deviation present", type: "boolean" },
      
      // Physical exam - Dix-Hallpike
      dix_hallpike_positive: { label: "Dix-Hallpike positive", type: "boolean" },
      dix_hallpike_side: { label: "Dix-Hallpike positive side", type: "string" },
      dix_hallpike_latency: { label: "Nystagmus has latency (few seconds delay)", type: "boolean" },
      dix_hallpike_transient: { label: "Nystagmus transient (<30 sec)", type: "boolean" },
      dix_hallpike_fatigable: { label: "Nystagmus fatigable (decreases with repetition)", type: "boolean" },
      dix_hallpike_upbeat_torsional: { label: "Nystagmus upbeat and torsional", type: "boolean" },
      
      // Physical exam - gait and balance
      gait_normal: { label: "Normal gait", type: "boolean" },
      gait_unsteady: { label: "Unsteady gait", type: "boolean" },
      unable_to_walk: { label: "Unable to walk without support", type: "boolean" },
      romberg_positive: { label: "Romberg positive", type: "boolean" },
      falls_toward_one_side: { label: "Falls/leans toward one side", type: "boolean" },
      
      // Physical exam - hearing
      hearing_decreased: { label: "Decreased hearing on exam", type: "boolean" },
      weber_lateralizes: { label: "Weber test lateralizes", type: "boolean" },
      rinne_abnormal: { label: "Rinne test abnormal", type: "boolean" },
      
      // Physical exam - neurologic
      cranial_nerve_abnormality: { label: "Cranial nerve abnormality", type: "boolean" },
      horner_syndrome: { label: "Horner syndrome", type: "boolean" },
      cerebellar_signs: { label: "Cerebellar signs (dysmetria, etc.)", type: "boolean" },
      motor_weakness: { label: "Motor weakness on exam", type: "boolean" },
      sensory_abnormality: { label: "Sensory abnormality on exam", type: "boolean" }
    },
    
    defined_conditions: [
      // Vestibular - peripheral
      "bppv",
      "vestibular_neuritis",
      "labyrinthitis",
      "meniere_disease",
      "vestibular_migraine",
      "acoustic_neuroma",
      "perilymphatic_fistula",
      "superior_canal_dehiscence",
      
      // Vestibular - central
      "cerebellar_stroke",
      "brainstem_stroke",
      "multiple_sclerosis",
      "vertebrobasilar_tia",
      
      // Presyncope causes
      "orthostatic_hypotension",
      "cardiac_arrhythmia",
      "vasovagal_presyncope",
      
      // Disequilibrium causes
      "peripheral_neuropathy",
      "parkinsonism",
      "cerebellar_degeneration",
      "bilateral_vestibular_loss",
      
      // Other
      "medication_induced",
      "anxiety_panic",
      "persistent_postural_perceptual_dizziness",
      "cervicogenic_dizziness"
    ],
    
    defined_workup: [
      "orthostatic_vitals",
      "ecg",
      "dix_hallpike_maneuver",
      "hints_exam",
      "audiometry",
      "mri_brain_iac",
      "ct_head",
      "cta_head_neck",
      "holter_monitor",
      "vestibular_function_testing",
      "glucose_check"
    ],
    
    defined_treatments: [
      "epley_maneuver",
      "vestibular_rehabilitation",
      "meclizine",
      "dimenhydrinate",
      "ondansetron",
      "betahistine",
      "diuretics_low_salt",
      "migraine_prophylaxis",
      "medication_adjustment",
      "reassurance_education"
    ],
    
    teaching_points: {
      dizziness_categories: {
        title: "Four Categories of Dizziness",
        content: `The first step is categorizing the patient's dizziness:

1. VERTIGO (Vestibular)
   • Illusion of movement (spinning, tilting, swaying)
   • May describe self or environment moving
   • Key feature: WORSE WITH HEAD MOVEMENT
   • Associated: nausea, nystagmus

2. PRESYNCOPE
   • Near-faint, about to black out, lightheaded
   • Associated: pallor, diaphoresis, visual dimming
   • Key feature: Occurs when UPRIGHT, relieved lying down
   • Think cardiac and orthostatic causes

3. DISEQUILIBRIUM
   • Imbalance, unsteadiness primarily when WALKING
   • "Off balance" or "unsteady on feet"
   • Key feature: Occurs with AMBULATION
   • Think neurologic: neuropathy, parkinsonism, cerebellar

4. NONSPECIFIC DIZZINESS
   • Vague, hard to describe
   • "Woozy," "spaced out," "foggy"
   • Often psychiatric, medication-related, or metabolic
   • May be mild versions of above categories

IMPORTANT: Patients often use multiple descriptors (average 2.6 per patient) and may change their description. Don't rely solely on symptom quality - use timing, triggers, and exam findings.`
      },
      
      time_based_approach: {
        title: "Time-Based Diagnostic Approach",
        content: `Duration is one of the BEST clues to etiology:

SECONDS TO <1 MINUTE:
• BPPV (most common!) - positional triggers
• Vestibular paroxysmia - very brief, recurrent

MINUTES TO HOURS:
• Vestibular migraine
• Vertebrobasilar TIA (minutes)
• Meniere disease (hours, with hearing symptoms)
• Panic attack

HOURS TO DAYS:
• Vestibular neuritis - single prolonged episode
• Labyrinthitis - same + hearing loss
• Cerebellar/brainstem stroke
• Multiple sclerosis

IMPORTANT RULE:
Vertigo is NEVER constant for months!
Even with permanent vestibular damage, the CNS adapts within weeks.

Constant dizziness lasting months is usually:
• Psychiatric (anxiety, PPPD)
• Medication-induced
• Multiple contributing factors (especially elderly)`
      },
      
      central_vs_peripheral: {
        title: "Central vs Peripheral Vertigo",
        content: `Distinguishing peripheral (benign) from central (dangerous) vertigo is CRITICAL.

PERIPHERAL VERTIGO:
• Nystagmus: Horizontal or horizontal-torsional
• Nystagmus: Unidirectional (doesn't change with gaze)
• Nystagmus: Suppressed by visual fixation
• Severe vertigo with prominent nausea/vomiting
• Hearing loss/tinnitus common
• Head impulse test: ABNORMAL (corrective saccade)
• Gait: Unsteady but can walk
• No other neurologic signs

CENTRAL VERTIGO:
• Nystagmus: Any direction (vertical = central!)
• Nystagmus: Direction-changing with gaze
• Nystagmus: NOT suppressed by fixation
• Vertigo may be less severe than expected for nystagmus
• Hearing usually normal
• Head impulse test: NORMAL (this is concerning!)
• Gait: Often unable to walk without falling
• Other neurologic signs (dysarthria, diplopia, weakness, numbness)

CRITICAL TEACHING POINT:
A NORMAL head impulse test in acute vertigo is a RED FLAG - suggests central cause!

"HINTS EXAM" in acute vestibular syndrome:
If ANY of these 3 findings present → suspect CENTRAL cause:
1. Normal Head Impulse test
2. Direction-changing Nystagmus
3. Skew deviation (Test of Skew)

HINTS is MORE sensitive than early MRI for posterior fossa stroke!`
      },
      
      bppv_diagnosis: {
        title: "BPPV Diagnosis and Dix-Hallpike",
        content: `BPPV is the most common cause of vertigo (~50% of peripheral vestibulopathy)

CLASSIC PRESENTATION:
• Brief episodes (<1 minute, usually 20-30 seconds)
• Triggered by specific head movements
  - Rolling over in bed
  - Looking up
  - Bending over
• No hearing loss or tinnitus
• Recurrent over weeks to months

DIX-HALLPIKE MANEUVER:
1. Patient sits on exam table
2. Turn head 45° to one side
3. Rapidly lower patient to supine with head hanging 20° below table
4. Hold for 30 seconds, observe for nystagmus
5. Return to sitting, repeat to other side

POSITIVE DIX-HALLPIKE (Posterior Canal BPPV):
• Latency: Nystagmus starts after 1-5 second delay
• Duration: <30 seconds (transient)
• Direction: Upbeat AND torsional (top of eyes toward affected ear)
• Fatigable: Decreases with repetition
• Vertiginous sensation matches patient's symptoms

RED FLAGS (Consider Central Lesion):
• No latency (immediate onset)
• Persistent (doesn't stop after 30 seconds)
• Pure vertical nystagmus
• Not fatigable
• No associated vertigo

SENSITIVITY: ~80% for posterior canal BPPV
If negative but history strongly suggests BPPV, consider:
• Horizontal canal BPPV (use supine roll test)
• "Subjective BPPV" - can still try treatment`
      },
      
      hints_exam: {
        title: "HINTS Exam for Acute Vestibular Syndrome",
        content: `The HINTS exam is for patients with ACUTE, SUSTAINED vertigo (lasting hours to days)

WHEN TO USE:
• Continuous vertigo (not episodic)
• Nystagmus present at rest
• Trying to distinguish vestibular neuritis from cerebellar stroke

THE THREE COMPONENTS:

1. HEAD IMPULSE TEST (HI)
   • Patient fixates on your nose
   • Rapidly turn head 10-15° to one side
   • NORMAL: Eyes stay on target
   • ABNORMAL: Eyes move with head, then corrective saccade back
   
   In acute vertigo:
   • Abnormal HIT = PERIPHERAL (reassuring)
   • Normal HIT = CENTRAL (concerning!)

2. NYSTAGMUS DIRECTION (N)
   • Observe nystagmus in primary, left, and right gaze
   • PERIPHERAL: Same direction in all positions (unidirectional)
   • CENTRAL: Changes direction with gaze (direction-changing)

3. TEST OF SKEW (TS)
   • Cover-uncover test
   • Look for vertical refixation movement
   • PERIPHERAL: No skew deviation
   • CENTRAL: Vertical realignment with cover-uncover = skew

INTERPRETATION:
"InFARCT" Rule for CENTRAL vertigo:
• Impulse Normal
• Fast-phase Alternating
• Refixation on Cover Test

If ANY of these 3 findings present → High suspicion for stroke!

SENSITIVITY: HINTS more sensitive than early MRI-DWI for posterior fossa stroke
(MRI can be false negative in first 24-48 hours)`
      },
      
      vestibular_neuritis: {
        title: "Vestibular Neuritis Recognition",
        content: `Vestibular neuritis (acute unilateral vestibulopathy) is a common cause of acute sustained vertigo.

CLASSIC PRESENTATION:
• Sudden onset severe vertigo
• Sustained (hours to days, worst in first 24-48h)
• Severe nausea and vomiting
• Unsteady gait but CAN walk
• No hearing loss (distinguishes from labyrinthitis)
• Preceding viral illness in ~50% (but often absent!)

EXAM FINDINGS (Peripheral Pattern):
• Spontaneous horizontal-torsional nystagmus
• Fast phase beats AWAY from affected side
• Nystagmus suppressed with fixation
• Head impulse test ABNORMAL (toward affected side)
• Falls/leans toward affected side
• NO other neurologic findings

LABYRINTHITIS:
• Same as vestibular neuritis PLUS hearing loss
• Unilateral sensorineural hearing loss on affected side

NATURAL COURSE:
• Severe symptoms: 1-2 days
• Gradual improvement over days to weeks
• Central compensation occurs
• May have residual imbalance for weeks to months
• 15% later develop BPPV

TREATMENT:
• Antiemetics/vestibular suppressants: ONLY first 24-48 hours
• Then STOP these - they impair central compensation
• Early vestibular rehabilitation
• Glucocorticoids: NOT routinely recommended (evidence doesn't support)

WHEN TO IMAGE:
• Vascular risk factors
• Unable to walk
• Other neurologic signs
• HINTS exam suggests central cause
• No improvement after 48 hours`
      },
      
      meniere_disease: {
        title: "Meniere Disease",
        content: `Meniere disease causes recurrent episodes of vertigo with auditory symptoms.

DIAGNOSTIC CRITERIA:
1. Two or more spontaneous episodes of vertigo
2. Each episode lasting 20 minutes to 12 hours
3. Documented low-to-medium frequency sensorineural hearing loss
4. Fluctuating aural symptoms (hearing, tinnitus, fullness)

THE CLASSIC TRIAD:
1. Episodic vertigo (hours, not seconds or days)
2. Fluctuating hearing loss (low-frequency early)
3. Tinnitus

PLUS: Aural fullness (pressure sensation in ear)

EPISODE PATTERN:
• Attacks cluster over weeks, then remit
• Variable frequency (days to years between episodes)
• Hearing loss initially fluctuates, then becomes permanent
• "Burned out" Meniere: Hearing loss remains, vertigo stops

PATHOPHYSIOLOGY:
• Endolymphatic hydrops (distension of endolymph compartment)
• Rupture of membranes → sudden symptom onset

RED FLAGS (Not Meniere):
• Episodes <20 minutes (consider BPPV) or >12 hours
• No hearing symptoms ever
• Symptoms only with position change
• Other neurologic symptoms

MANAGEMENT:
• Dietary: Low salt (<2g/day), limit caffeine/alcohol
• Diuretics (limited evidence)
• Betahistine (more commonly used outside US)
• Intratympanic steroids for refractory cases
• Intratympanic gentamicin (ablative) for severe cases
• Vestibular rehabilitation

BPPV complicates Meniere in ~15% of patients`
      },
      
      vestibular_migraine: {
        title: "Vestibular Migraine",
        content: `Vestibular migraine is a common cause of recurrent vertigo, especially in patients with migraine history.

DIAGNOSTIC CRITERIA:
1. At least 5 episodes of vestibular symptoms (moderate-severe)
2. Current or past history of migraine
3. At least 50% of episodes have ≥1 migraine feature:
   - Headache (unilateral, pulsating, moderate-severe)
   - Photophobia and phonophobia
   - Visual aura
4. Not better explained by another diagnosis

KEY FEATURES:
• Episodes last minutes to hours (variable - 5 min to 72 hours)
• May NOT have headache during vertigo episode
• Headache may precede or follow vertigo
• Often has migrainous features during attack
• Motion sensitivity common between attacks
• May have visual aura

DISTINGUISHING FROM MENIERE:
• Vestibular migraine: Hearing symptoms less prominent, headache/photophobia
• Meniere: Prominent hearing loss, tinnitus, ear fullness

OVERLAP:
• Some patients meet criteria for both
• May coexist or be related conditions

TREATMENT:
• Acute: Triptans, antiemetics, vestibular suppressants
• Prophylaxis: Same as migraine (topiramate, amitriptyline, beta-blockers, etc.)
• Lifestyle: Sleep hygiene, stress management, trigger avoidance
• Vestibular rehabilitation if chronic symptoms

COMMON TRIGGERS:
• Sleep deprivation
• Stress
• Hormonal changes
• Certain foods
• Visual stimuli (screens, patterns)`
      },
      
      presyncope_evaluation: {
        title: "Presyncope Evaluation",
        content: `Presyncope is the prodrome of fainting - important to distinguish from vertigo.

SYMPTOMS:
• Lightheadedness, "about to faint"
• Visual dimming/graying
• Diaphoresis, warmth
• Pallor (observed by others)
• Palpitations may accompany

KEY DISTINGUISHING FEATURE:
• Occurs when UPRIGHT (standing or sitting)
• Relieved by lying down
• NOT triggered by head position (like BPPV)
• NOT associated with spinning sensation

COMMON CAUSES:

ORTHOSTATIC HYPOTENSION:
• BP drop ≥20/10 mmHg on standing
• Causes: Dehydration, medications (antihypertensives, diuretics),
  autonomic dysfunction, aging

CARDIAC ARRHYTHMIA:
• May occur in any position (including supine!)
• Associated palpitations
• History of heart disease
• ECG abnormalities

VASOVAGAL:
• Triggered by prolonged standing, heat, emotion
• Prodrome: Nausea, diaphoresis, warmth
• Usually in younger patients
• Situational triggers (blood, pain, etc.)

EVALUATION:
• Orthostatic vital signs (supine → standing at 1, 3 minutes)
• ECG
• Consider Holter monitor if concerning for arrhythmia
• Echocardiogram if structural heart disease suspected

RED FLAGS:
• Syncope with exertion
• Associated chest pain
• Family history of sudden cardiac death
• Known heart disease
• ECG abnormalities`
      },
      
      elderly_dizziness: {
        title: "Dizziness in Older Adults",
        content: `Dizziness in elderly patients is often MULTIFACTORIAL.

PREVALENCE: 19-38% of older adults
RISK: Falls, functional disability, institutionalization

COMMON CONTRIBUTING FACTORS:
1. Vestibular disorders
2. Cerebrovascular disease
3. Orthostatic hypotension
4. Peripheral neuropathy (sensory impairment)
5. Visual impairment
6. Medications (often multiple)
7. Cervical spondylosis
8. Deconditioning
9. Anxiety/depression

THE "7 CHARACTERISTICS" ASSOCIATED WITH DIZZINESS IN ELDERLY:
1. Anxiety trait
2. Depressive symptoms
3. Impaired balance
4. Past myocardial infarction
5. Postural hypotension
6. ≥5 medications
7. Impaired hearing

APPROACH:
• Don't expect single diagnosis
• Systematically evaluate each potential contributor
• Medication review is ESSENTIAL
• Visual assessment
• Hearing assessment
• Gait/balance evaluation
• Orthostatic vitals
• Consider vestibular testing

MEDICATION CULPRITS:
• Antihypertensives
• Diuretics
• Psychotropics (antidepressants, benzodiazepines)
• Anticonvulsants
• Anticholinergics
• Opioids

MANAGEMENT:
• Address most remediable factors first
• Medication reconciliation
• Physical therapy/vestibular rehab
• Fall prevention strategies
• Treat contributing conditions`
      },
      
      treatment_bppv: {
        title: "BPPV Treatment - Canalith Repositioning",
        content: `BPPV is highly treatable with particle repositioning maneuvers!

EPLEY MANEUVER (for Posterior Canal BPPV):
1. Patient sitting, turn head 45° toward affected ear
2. Rapidly lie patient back, head hanging 20° below table
3. Wait 30 seconds (or until nystagmus/vertigo stops)
4. Turn head 90° to opposite side (now facing away from affected side)
5. Wait 30 seconds
6. Roll patient onto shoulder, head facing down at 45°
7. Wait 30 seconds
8. Bring patient to sitting position

EFFICACY:
• Single treatment effective in ~85% of patients
• May need 2-3 treatments for some patients
• Success predicted by observing nystagmus direction change during maneuver

ALTERNATIVE: SEMONT MANEUVER
• Similar efficacy to Epley
• May be slightly more difficult for patients

SELF-TREATMENT:
• Modified Epley or Semont at home
• Brandt-Daroff exercises (less effective but simpler)
• Teach patients for recurrences

POST-TREATMENT:
• Postural restrictions NOT routinely necessary
• Transient imbalance common after successful treatment
• May convert to horizontal canal BPPV (treat with different maneuver)

HORIZONTAL CANAL BPPV:
• Use "BBQ roll" (Lempert) maneuver
• Or Gufoni maneuver
• Identify affected side by direction of more intense nystagmus

RECURRENCE:
• 30-50% recur within 5 years
• Same treatment approach
• Consider vitamin D supplementation if deficient

REFRACTORY BPPV:
• Very rare
• Consider surgical canal plugging
• Rule out central lesion if not responding`
      },
      
      medications_for_vertigo: {
        title: "Vestibular Suppressant Medications",
        content: `Symptomatic treatment for acute vertigo - use BRIEFLY!

FIRST-LINE OPTIONS:

ANTIHISTAMINES:
• Meclizine 25-50mg PO q6-8h
• Dimenhydrinate 50mg PO/IV q4-6h
• Preferred over benzodiazepines (less sedating)

ANTICHOLINERGICS:
• Scopolamine patch (motion sickness)

BENZODIAZEPINES:
• Lorazepam 0.5-1mg, diazepam 2-5mg
• More sedating, use cautiously
• May be helpful if prominent anxiety

ANTIEMETICS:
• Ondansetron 4-8mg
• Prochlorperazine 10mg
• Promethazine 12.5-25mg

CRITICAL PRINCIPLE:
LIMIT USE TO 24-48 HOURS in acute vestibular injury!

WHY?
• Vestibular suppressants impair CENTRAL COMPENSATION
• Central compensation is how the brain adapts to vestibular injury
• Prolonged use delays recovery

EXCEPTION: Brief episodes (BPPV, vestibular migraine) 
can use as needed for attacks

BETAHISTINE:
• Used more in Europe than US
• May help Meniere disease
• 16-24mg TID

VESTIBULAR REHABILITATION:
• Most effective long-term treatment for unilateral vestibular loss
• Exercises promote central compensation
• Should be started AFTER stopping vestibular suppressants`
      }
    },
    
    clinical_reasoning_prompts: [
      {
        trigger: "brief_positional_episodes",
        question: "Brief episodes of vertigo triggered by position changes - what is the most likely diagnosis and how do you confirm it?",
        teaching: "This pattern is classic for BPPV. Confirm with Dix-Hallpike maneuver. Key features: latency (1-5 sec delay), transient (<30 sec), upbeat-torsional nystagmus, fatigable with repetition. Treat with Epley maneuver - 85% success with single treatment."
      },
      {
        trigger: "acute_sustained_vertigo",
        question: "Acute onset sustained vertigo lasting hours to days - what must be distinguished and how?",
        teaching: "Must distinguish vestibular neuritis (peripheral, benign) from cerebellar/brainstem stroke (central, dangerous). Use HINTS exam: Normal Head Impulse test OR Direction-changing Nystagmus OR Skew deviation → suspect stroke! HINTS is more sensitive than early MRI."
      },
      {
        trigger: "normal_hit",
        question: "Why is a NORMAL head impulse test concerning in acute vertigo?",
        teaching: "A normal HIT means the vestibulo-ocular reflex is intact, so the lesion is NOT in the peripheral vestibular system. In acute sustained vertigo, this suggests a CENTRAL cause (cerebellar or brainstem stroke). An ABNORMAL HIT (corrective saccade) is actually reassuring - indicates peripheral vestibulopathy."
      },
      {
        trigger: "hearing_loss_vertigo",
        question: "Vertigo with associated hearing loss - what conditions should be considered?",
        teaching: "Hearing loss localizes to peripheral vestibular system. Consider: Labyrinthitis (acute, with vestibular neuritis symptoms), Meniere disease (episodic, with fullness and tinnitus), Acoustic neuroma (gradual, unilateral), Perilymphatic fistula (trauma or Valsalva-induced)."
      },
      {
        trigger: "direction_changing_nystagmus",
        question: "What is the significance of direction-changing nystagmus?",
        teaching: "Nystagmus that changes direction with gaze (right-beating in right gaze, left-beating in left gaze) is called gaze-evoked nystagmus and is a central sign. Peripheral nystagmus is UNIDIRECTIONAL - the fast phase beats the same direction regardless of gaze position."
      },
      {
        trigger: "vertical_nystagmus",
        question: "What does pure vertical nystagmus indicate?",
        teaching: "Pure vertical nystagmus (upbeat or downbeat without torsional component) is a CENTRAL sign. Peripheral vestibular lesions cause horizontal or horizontal-torsional nystagmus, never pure vertical. Downbeat nystagmus suggests cervicomedullary junction pathology."
      },
      {
        trigger: "recurrent_hours_headache",
        question: "Recurrent vertigo episodes lasting hours with headache features - what should be considered?",
        teaching: "Think vestibular migraine! Key: history of migraine, episodes with photophobia/phonophobia, headache before/during/after vertigo (not always present). Headache may be absent in many attacks. Often missed diagnosis - very treatable with migraine prophylaxis."
      },
      {
        trigger: "elderly_multifactorial",
        question: "A 75-year-old with vague chronic dizziness, 8 medications, and unsteady gait - what is the approach?",
        teaching: "Dizziness in elderly is often MULTIFACTORIAL. Systematically evaluate: orthostatic hypotension, medication effects, vestibular function, vision, hearing, neuropathy, gait/balance. Address most remediable factors. Medication reconciliation is essential - polypharmacy is a major contributor."
      },
      {
        trigger: "vestibular_suppressants_duration",
        question: "A patient with vestibular neuritis is still taking meclizine after 2 weeks - is this appropriate?",
        teaching: "NO! Vestibular suppressants should be limited to 24-48 hours in acute vestibular injury. Prolonged use impairs central compensation and delays recovery. After acute phase, START vestibular rehabilitation exercises - this promotes adaptation, not suppression."
      },
      {
        trigger: "presyncope_vs_vertigo",
        question: "How do you distinguish presyncope from vertigo?",
        teaching: "Presyncope: Lightheaded, near-faint, pallor, diaphoresis; occurs when UPRIGHT, relieved lying down; not triggered by head position. Vertigo: Spinning/tilting sensation, worse with HEAD MOVEMENT (not just position), nausea, may occur in any position. Orthostatic vitals help identify presyncope."
      }
    ]
  }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DIZZINESS_VERTIGO_TEMPLATES;
}
