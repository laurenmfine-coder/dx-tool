/**
 * ReasonDx Neuromuscular Disease Templates
 * Covers: Myasthenia Gravis
 * Based on UpToDate clinical evidence
 * 
 * TEACHING FOCUS: Neuromuscular junction disorders
 * - Fatigable weakness pattern recognition
 * - Crisis prevention and management
 * - Treatment approach and drug avoidance
 */

const defined = (x) => x !== undefined && x !== null;

const NEUROMUSCULAR_TEMPLATES = {
  
  // ===========================================
  // MYASTHENIA GRAVIS TEMPLATE
  // ===========================================
  
  myasthenia_gravis: {
    id: "myasthenia_gravis",
    title: "Myasthenia Gravis Evaluation",
    description: "Autoimmune neuromuscular junction disorder workup and management",
    
    defined_findings: {
      // Presenting symptoms
      ptosis: { label: "Ptosis", type: "boolean" },
      ptosis_unilateral: { label: "Unilateral ptosis", type: "boolean" },
      ptosis_bilateral: { label: "Bilateral ptosis", type: "boolean" },
      ptosis_fatigable: { label: "Ptosis worsens with sustained upgaze", type: "boolean" },
      diplopia: { label: "Diplopia", type: "boolean" },
      diplopia_variable: { label: "Diplopia variable/intermittent", type: "boolean" },
      
      // Bulbar symptoms
      dysarthria: { label: "Dysarthria", type: "boolean" },
      dysarthria_nasal: { label: "Nasal speech quality", type: "boolean" },
      dysphagia: { label: "Dysphagia", type: "boolean" },
      chewing_fatigue: { label: "Jaw fatigue with chewing", type: "boolean" },
      facial_weakness: { label: "Facial weakness", type: "boolean" },
      weak_smile: { label: "Weak smile/snarl", type: "boolean" },
      
      // Limb symptoms
      limb_weakness: { label: "Limb weakness", type: "boolean" },
      proximal_weakness: { label: "Proximal > distal weakness", type: "boolean" },
      arm_weakness: { label: "Arm weakness", type: "boolean" },
      leg_weakness: { label: "Leg weakness", type: "boolean" },
      neck_weakness: { label: "Neck flexor weakness", type: "boolean" },
      dropped_head: { label: "Dropped head syndrome", type: "boolean" },
      
      // Respiratory
      dyspnea: { label: "Dyspnea", type: "boolean" },
      dyspnea_exertional: { label: "Exertional dyspnea", type: "boolean" },
      orthopnea: { label: "Orthopnea", type: "boolean" },
      weak_cough: { label: "Weak cough", type: "boolean" },
      
      // Fatigability pattern
      symptoms_worse_evening: { label: "Symptoms worse in evening", type: "boolean" },
      symptoms_improve_rest: { label: "Symptoms improve with rest", type: "boolean" },
      symptoms_worsen_activity: { label: "Symptoms worsen with activity", type: "boolean" },
      symptoms_fluctuate: { label: "Symptoms fluctuate day to day", type: "boolean" },
      
      // Exam findings
      curtain_sign: { label: "Curtain sign (orbicularis oculi weakness)", type: "boolean" },
      peek_sign: { label: "Peek sign", type: "boolean" },
      ice_pack_test_positive: { label: "Ice pack test positive", type: "boolean" },
      cogan_lid_twitch: { label: "Cogan's lid twitch sign", type: "boolean" },
      sustained_upgaze_fatigue: { label: "Fatigues with sustained upgaze", type: "boolean" },
      counting_fatigue: { label: "Voice fatigues with counting", type: "boolean" },
      
      // Reflexes and sensation
      reflexes_normal: { label: "Normal reflexes", type: "boolean" },
      sensation_normal: { label: "Sensation normal", type: "boolean" },
      no_muscle_atrophy: { label: "No significant muscle atrophy", type: "boolean" },
      
      // Labs and testing
      achr_antibody_positive: { label: "AChR antibody positive", type: "boolean" },
      achr_binding: { label: "AChR binding antibody positive", type: "boolean" },
      achr_blocking: { label: "AChR blocking antibody positive", type: "boolean" },
      achr_modulating: { label: "AChR modulating antibody positive", type: "boolean" },
      musk_antibody_positive: { label: "MuSK antibody positive", type: "boolean" },
      lrp4_antibody_positive: { label: "LRP4 antibody positive", type: "boolean" },
      seronegative: { label: "Seronegative (all antibodies negative)", type: "boolean" },
      
      // Electrodiagnostics
      rnst_decrement: { label: "RNS shows decrement >10%", type: "boolean" },
      sfemg_abnormal: { label: "Single-fiber EMG abnormal", type: "boolean" },
      
      // Imaging
      ct_chest_thymoma: { label: "CT chest shows thymoma", type: "boolean" },
      ct_chest_thymic_hyperplasia: { label: "CT shows thymic hyperplasia", type: "boolean" },
      ct_chest_normal: { label: "CT chest normal", type: "boolean" },
      
      // Current treatment
      on_pyridostigmine: { label: "Currently on pyridostigmine", type: "boolean" },
      pyridostigmine_dose: { label: "Pyridostigmine dose", type: "string" },
      on_prednisone: { label: "On prednisone/glucocorticoids", type: "boolean" },
      prednisone_dose: { label: "Prednisone dose (mg/day)", type: "number" },
      on_azathioprine: { label: "On azathioprine", type: "boolean" },
      on_mycophenolate: { label: "On mycophenolate", type: "boolean" },
      on_other_immunotherapy: { label: "On other immunotherapy", type: "string" },
      prior_thymectomy: { label: "Prior thymectomy", type: "boolean" },
      
      // Crisis indicators
      fvc_liters: { label: "FVC (liters)", type: "number" },
      fvc_percent_predicted: { label: "FVC % predicted", type: "number" },
      nif_cm_h2o: { label: "NIF (cm H2O)", type: "number" },
      aspiration_present: { label: "Evidence of aspiration", type: "boolean" },
      unable_to_clear_secretions: { label: "Unable to clear secretions", type: "boolean" },
      
      // Exacerbation triggers
      recent_infection: { label: "Recent infection", type: "boolean" },
      recent_surgery: { label: "Recent surgery", type: "boolean" },
      new_medication: { label: "Recently started new medication", type: "boolean" },
      medication_name: { label: "New medication name", type: "string" },
      pregnancy_or_postpartum: { label: "Pregnancy or postpartum", type: "boolean" },
      immunotherapy_tapered: { label: "Immunotherapy recently tapered", type: "boolean" },
      
      // Classification
      mgfa_class: { label: "MGFA classification", type: "string" },
      ocular_only: { label: "Ocular MG only (no generalized symptoms)", type: "boolean" },
      generalized_mg: { label: "Generalized MG", type: "boolean" },
      
      // Age and demographics
      age_at_onset: { label: "Age at MG onset", type: "number" },
      disease_duration_years: { label: "Disease duration (years)", type: "number" }
    },
    
    defined_conditions: [
      "myasthenia_gravis_achr_positive",
      "myasthenia_gravis_musk_positive",
      "myasthenia_gravis_seronegative",
      "ocular_myasthenia",
      "generalized_myasthenia",
      "myasthenic_crisis",
      "cholinergic_crisis",
      "thymoma_associated_mg",
      "lambert_eaton_syndrome",
      "congenital_myasthenic_syndrome"
    ],
    
    defined_workup: [
      "achr_antibody_panel",
      "musk_antibody",
      "lrp4_antibody",
      "repetitive_nerve_stimulation",
      "single_fiber_emg",
      "ct_chest_with_contrast",
      "mri_chest",
      "pulmonary_function_tests",
      "bedside_fvc_nif",
      "thyroid_function_tests",
      "ice_pack_test",
      "edrophonium_test"
    ],
    
    defined_treatments: [
      "pyridostigmine",
      "prednisone",
      "azathioprine",
      "mycophenolate_mofetil",
      "ivig",
      "plasma_exchange",
      "rituximab",
      "eculizumab",
      "efgartigimod",
      "thymectomy",
      "intubation",
      "medication_avoidance_counseling"
    ],
    
    defined_dispositions: [
      "icu_admission",
      "step_down_unit",
      "general_neurology_floor",
      "outpatient_management",
      "surgical_consultation"
    ],
    
    teaching_points: {
      overview: {
        title: "Myasthenia Gravis Overview",
        content: `Myasthenia gravis (MG) is an autoimmune disorder targeting the neuromuscular junction.

KEY FEATURES:
• Fluctuating, fatigable weakness
• Ocular and bulbar muscles most commonly affected
• Weakness worsens with activity, improves with rest
• Worse in evening, better in morning

ANTIBODY SUBTYPES:
• AChR antibodies: 85% of generalized MG, 50% of ocular MG
• MuSK antibodies: 5-8% (distinct clinical phenotype)
• LRP4 antibodies: 1-3%
• Seronegative: 6-12%

EPIDEMIOLOGY:
• Bimodal age distribution
• Younger peak: Women in 20s-30s
• Older peak: Men in 60s-70s
• Female:Male ratio 3:2 in younger patients, 1:1 in older`
      },
      
      clinical_features: {
        title: "Clinical Features Pattern",
        content: `HALLMARK: Fatigable weakness that worsens with activity

OCULAR SYMPTOMS (most common initial presentation):
• Ptosis: May be unilateral initially, often becomes bilateral
• Diplopia: Variable, often horizontal or oblique
• Key: Pupillary function is NORMAL (pupils spare)

BULBAR SYMPTOMS:
• Dysarthria: Nasal quality, worsens with speaking
• Dysphagia: Risk of aspiration
• Fatigable chewing: "Jaw fatigue" with meals
• Facial weakness: "Myasthenic snarl"

LIMB WEAKNESS:
• Proximal > distal
• Arms often affected before legs
• Neck flexor weakness common ("dropped head")
• Finger extensors may be selectively weak

RESPIRATORY:
• Dyspnea, especially exertional
• Orthopnea (diaphragm weakness)
• Weak cough
• Can progress to crisis

DIURNAL VARIATION:
• Typically worse in evening
• Better after sleep/rest
• Symptoms fluctuate day to day

WHAT'S PRESERVED:
• Reflexes normal
• Sensation normal
• No atrophy (early disease)`
      },
      
      musk_mg: {
        title: "MuSK-Positive MG - Distinct Phenotype",
        content: `MuSK-positive MG has important clinical differences!

CLINICAL FEATURES:
• More severe bulbar and respiratory involvement
• Prominent facial and tongue weakness/atrophy
• Oculobulbar pattern common
• May have "dropped head" syndrome
• Muscle atrophy more common than AChR-MG

TREATMENT DIFFERENCES:
• POOR response to pyridostigmine (often worsens symptoms!)
• May worsen with cholinesterase inhibitors
• Thymectomy NOT beneficial
• Better response to rituximab
• PLEX may work better than IVIG

IMPORTANT: If suspected MuSK-MG, start with low pyridostigmine doses and monitor closely for worsening.`
      },
      
      diagnosis: {
        title: "Diagnostic Approach",
        content: `CLINICAL DIAGNOSIS supported by:

1. ANTIBODY TESTING:
   • AChR binding antibody: First-line test
   • If negative: Check blocking, modulating antibodies
   • If still negative: Check MuSK antibodies
   • If still negative: Consider LRP4 or seronegative MG
   
2. ELECTRODIAGNOSTICS:
   • Repetitive Nerve Stimulation (RNS):
     - Look for >10% decrement at 2-3 Hz
     - Sensitivity: 75% generalized, 30-50% ocular
     - Test clinically weak muscles
   
   • Single-Fiber EMG (SFEMG):
     - Most sensitive test (95-99%)
     - Shows increased jitter, blocking
     - Use when RNS negative but high suspicion

3. BEDSIDE TESTS:
   • Ice pack test: Ptosis improves with cooling
     - Apply ice to closed eyelid for 2 minutes
     - Positive: ≥2mm improvement in ptosis
     - Sensitivity ~80% for ocular MG
   
   • Edrophonium (Tensilon) test:
     - Rarely used now due to cardiac risks
     - Requires atropine at bedside

4. CHEST IMAGING:
   • CT chest with contrast for ALL patients
   • Look for thymoma (10-15% of MG patients)
   • Thymic hyperplasia common in young-onset AChR+ MG

5. ADDITIONAL:
   • TSH (thyroid disease associated)
   • Consider paraneoplastic panel if atypical`
      },
      
      pyridostigmine: {
        title: "Pyridostigmine Treatment",
        content: `FIRST-LINE SYMPTOMATIC THERAPY

MECHANISM:
• Acetylcholinesterase inhibitor
• Increases ACh availability at neuromuscular junction
• Does NOT modify disease course

DOSING:
• Start: 30mg TID with meals
• Titrate: Increase by 30mg every 2-3 days
• Typical effective dose: 60-90mg every 4-6 hours
• Maximum: 120mg every 3-4 hours (rarely needed)
• Total daily max: ~960mg

PEDIATRIC: 0.5-1 mg/kg every 4-6 hours, max 7 mg/kg/day

ONSET: 15-30 minutes, peak 2 hours, duration 3-4 hours

CHOLINERGIC SIDE EFFECTS (muscarinic):
• GI: Cramping, diarrhea, nausea (most common/limiting)
• Increased secretions: Salivation, lacrimation, bronchorrhea
• Bradycardia
• Sweating

MANAGEMENT OF SIDE EFFECTS:
• Take with food
• Glycopyrrolate 1mg with each dose
• Propantheline 15mg
• Loperamide for diarrhea

IMPORTANT NOTES:
• Response variable - some patients excellent, others minimal
• Diplopia often responds poorly
• MuSK-MG patients often do NOT respond well
• Not sufficient for most generalized MG - need immunotherapy

CHOLINERGIC CRISIS:
• Rare with doses ≤120mg q3h
• Weakness from excessive ACh
• Distinguished by cholinergic symptoms
• If doses in typical range, assume myasthenic worsening, not cholinergic crisis`
      },
      
      immunotherapy: {
        title: "Chronic Immunotherapy",
        content: `MOST PATIENTS WITH GENERALIZED MG NEED IMMUNOTHERAPY

GLUCOCORTICOIDS:
• First-line immunotherapy
• High-dose: Prednisone 1-1.5 mg/kg/day (max 60-80mg)
• CAUTION: Can cause TRANSIENT WORSENING in first 2 weeks
• If severe disease, may start in hospital or with IVIG/PLEX cover
• Once stable: Slow taper over months

STEROID-SPARING AGENTS:
• Azathioprine:
  - First-line steroid-sparing
  - Onset: 6-12 months for effect
  - Check TPMT before starting
  - Dose: Start 50mg daily, increase to 2-3 mg/kg/day

• Mycophenolate Mofetil:
  - 1000-1500mg BID
  - Onset: 6-12 months
  - Evidence mixed but commonly used

• Cyclosporine, Tacrolimus: Second-line options

NEWER BIOLOGIC THERAPIES:
• Rituximab: Anti-CD20, especially effective in MuSK-MG
• Eculizumab: Complement inhibitor, for refractory AChR+ MG
• Efgartigimod: FcRn inhibitor, reduces IgG
• Ravulizumab: Longer-acting complement inhibitor

TREATMENT GOALS:
• Minimal manifestations or remission
• Minimal medication side effects
• "Pharmacologic remission" = minimal symptoms on therapy`
      },
      
      crisis: {
        title: "Myasthenic Crisis",
        content: `DEFINITION: Severe weakness requiring intubation or NIV

INCIDENCE: 10-20% of MG patients experience crisis

TRIGGERS:
• Infection (most common) - especially respiratory
• Surgery/anesthesia
• Medication changes (stopping immunotherapy, contraindicated drugs)
• Pregnancy/postpartum
• Aspiration pneumonia
• Thyroid dysfunction

RESPIRATORY MONITORING:
"20-30-40 Rule" for intubation:
• FVC <20 mL/kg
• NIF worse than -30 cm H2O
• FVC decline >30% from baseline

Monitor FVC/NIF every 2-4 hours if concerning

WARNING SIGNS:
• Rapidly worsening weakness
• Severe dysphagia with aspiration risk
• Accessory muscle use
• Paradoxical breathing
• Inability to count to 20 in one breath
• Single breath count <15-20

TREATMENT OF CRISIS:
1. Airway protection - intubate early if declining
2. ICU admission
3. Identify and treat trigger (infection, etc.)
4. IVIG 2g/kg over 2-5 days OR
   Plasma exchange 5 exchanges over 1-2 weeks
5. Consider initiating/increasing chronic immunotherapy

DON'T WAIT for ABG changes - they are LATE findings!
Intubate based on clinical trajectory and PFTs.

CHOLINERGIC VS MYASTHENIC CRISIS:
• Cholinergic: Rare if doses ≤960mg/day pyridostigmine
• Look for muscarinic symptoms (secretions, GI, small pupils)
• If in doubt, treat as myasthenic - much more common`
      },
      
      drugs_to_avoid: {
        title: "Drugs That Exacerbate MG",
        content: `CRITICAL KNOWLEDGE - These drugs can worsen MG or trigger crisis!

ANTIBIOTICS:
• Aminoglycosides: AVOID - significant NMJ blockade
• Fluoroquinolones: Caution - multiple case reports
• Macrolides: Caution - especially azithromycin
• Telithromycin: CONTRAINDICATED - severe exacerbations reported

CARDIOVASCULAR:
• Beta-blockers: ALL can worsen MG
• Calcium channel blockers: Caution
• Procainamide, quinidine: Avoid

NEUROMUSCULAR BLOCKING AGENTS:
• Prolonged effect - titrate carefully if needed
• Succinylcholine: Resistant, may need higher doses
• Non-depolarizing agents: Extremely sensitive

OTHER:
• Magnesium sulfate: Contraindicated - blocks ACh release
• D-Penicillamine: Can INDUCE MG
• Immune checkpoint inhibitors: Can trigger autoimmune MG
• Statins: Occasional reports of worsening (not contraindicated)
• Lithium: Case reports of exacerbation
• Phenytoin, gabapentin: Caution

GENERAL PRINCIPLE:
• Consider ANY new medication as potential cause of worsening
• Watch closely after starting new drugs
• Respiratory depressants (opioids, benzos) require caution`
      },
      
      thymectomy: {
        title: "Thymectomy in MG",
        content: `THYMECTOMY HAS TWO INDICATIONS:

1. THYMOMA (10-15% of MG patients):
   • Surgery indicated for resectable tumors
   • May need neoadjuvant chemo/XRT for advanced disease
   • Thymoma can recur - long-term follow-up needed

2. NON-THYMOMATOUS MG:
   Based on MGTX trial (2016):

   RECOMMENDED:
   • Generalized MG (not ocular only)
   • AChR antibody positive
   • Age ≤50 years (strongest evidence)
   • Age 51-65: May benefit, individualized decision

   NOT RECOMMENDED:
   • MuSK-positive MG (no benefit shown)
   • Ocular MG (insufficient evidence)
   • Age >65 (limited data)
   • LRP4-positive: Uncertain, likely no benefit

BENEFITS (per MGTX trial):
• Improved clinical status at 3 years
• Lower prednisone requirements
• Benefits accrue over several years post-op

TIMING:
• Usually elective after medical optimization
• Optimize MG control preoperatively
• May need IVIG/PLEX before surgery
• Avoid if in crisis

SURGICAL APPROACH:
• Extended transsternal vs minimally invasive
• Complete thymus removal important
• Experienced surgeon essential`
      },
      
      special_populations: {
        title: "Special Populations",
        content: `PREGNANCY:
• MG has variable effect on pregnancy course
• First trimester and postpartum: Highest exacerbation risk
• Medications: Pyridostigmine safe; prednisone acceptable; 
  azathioprine relatively safe; mycophenolate CONTRAINDICATED
• IVIG preferred for exacerbations
• Neonatal MG: 10-20% of babies, transient

OCULAR MG:
• May remain ocular or progress to generalized
• ~50% progress to generalized within 2 years
• AChR antibody positive: Higher progression risk
• Consider low-dose prednisone if symptomatic
• Thymectomy role unclear

ELDERLY PATIENTS:
• Higher proportion of thymoma
• More MuSK-negative
• Higher comorbidity burden
• More sensitive to immunosuppression side effects
• Consider age-appropriate glucocorticoid dosing

CHILDREN:
• Similar treatment principles
• Glucocorticoids: Concern for growth effects
• Thymectomy: Peripubertal/postpubertal candidates
• Higher spontaneous remission in prepubertal
• MuSK+ children: No thymectomy benefit

REFRACTORY MG (~10% of patients):
• Persistent symptoms despite standard therapy
• Options: Rituximab, complement inhibitors, maintenance IVIG/PLEX
• Multidisciplinary approach essential`
      },
      
      vaccination: {
        title: "Vaccination in MG",
        content: `VACCINATION IS IMPORTANT - respiratory infections trigger crisis!

RECOMMENDED:
• Annual influenza vaccine (inactivated)
• Pneumococcal vaccine
• COVID-19 vaccine
• Routine immunizations

SAFE TO GIVE:
• Inactivated vaccines are safe
• No evidence vaccines trigger MG flares
• Benefits outweigh theoretical risks

AVOID:
• Live-attenuated vaccines if on significant immunosuppression:
  - High-dose prednisone (>20mg/day)
  - Mycophenolate, azathioprine, rituximab, etc.
• Live-attenuated intranasal flu vaccine
• Live zoster vaccine (Zostavax) - use Shingrix (recombinant) instead

TIMING:
• Can vaccinate during stable disease
• May have reduced response if on immunosuppression
• Some biologics (eculizumab, ravulizumab): Meningococcal vaccine required

SPECIFIC NOTES:
• COVID-19 mRNA vaccines: Generally safe in MG
• Vaccination associated with LOWER COVID-19 hospitalization/death in MG
• Don't delay vaccination due to MG diagnosis`
      }
    },
    
    clinical_reasoning_prompts: [
      {
        trigger: "fatigable_weakness",
        question: "What pattern of weakness is characteristic of myasthenia gravis?",
        teaching: "MG causes fatigable weakness that worsens with activity and improves with rest. Symptoms typically worse in evening, better in morning. This diurnal variation reflects acetylcholine receptor availability after rest."
      },
      {
        trigger: "ocular_symptoms",
        question: "When a patient presents with ptosis and diplopia, what finding helps distinguish MG from other causes?",
        teaching: "In MG, pupils are NORMAL. Fatigability is key - ptosis worsens with sustained upgaze, diplopia varies. Ice pack test (improvement in ptosis after 2 min of cooling) is ~80% sensitive for ocular MG."
      },
      {
        trigger: "bulbar_weakness",
        question: "What are the risks of significant bulbar weakness in MG?",
        teaching: "Bulbar weakness (dysphagia, dysarthria, weak cough) indicates risk for aspiration and may herald respiratory crisis. These patients need close monitoring, possibly hospitalization. Dysphagia + respiratory symptoms = high risk."
      },
      {
        trigger: "mg_worsening",
        question: "A patient with known MG has worsening weakness. What should be considered?",
        teaching: "Consider: 1) Infection (most common trigger), 2) New medication (check contraindicated drugs list), 3) Tapered immunotherapy, 4) Pregnancy/postpartum, 5) Thyroid dysfunction. Check FVC/NIF for crisis indicators."
      },
      {
        trigger: "musk_positive",
        question: "How does MuSK-positive MG differ from AChR-positive MG?",
        teaching: "MuSK-MG often has: severe bulbar involvement, facial/tongue atrophy, POOR response to pyridostigmine (may worsen!), NO benefit from thymectomy, and better response to rituximab. Treatment approach differs significantly."
      },
      {
        trigger: "respiratory_symptoms",
        question: "How do you monitor for impending myasthenic crisis?",
        teaching: "Monitor FVC and NIF every 2-4 hours. '20-30-40 rule' for intubation: FVC <20 mL/kg, NIF worse than -30 cm H2O, FVC decline >30%. Single breath count <15-20 is concerning. Don't wait for ABG changes - they're late findings!"
      },
      {
        trigger: "new_medication",
        question: "The patient was recently started on ciprofloxacin. Could this be contributing to MG worsening?",
        teaching: "YES! Fluoroquinolones can exacerbate MG and should be used with caution. Other drugs to avoid: aminoglycosides, macrolides, beta-blockers, magnesium, neuromuscular blockers. ANY new medication should be considered as potential cause."
      },
      {
        trigger: "thymoma",
        question: "What is the significance of finding a thymoma in a patient with MG?",
        teaching: "Thymomas occur in 10-15% of MG patients. They require surgical resection if feasible. Unlike non-thymomatous MG where thymectomy is elective, thymoma removal is indicated regardless of MG severity. Long-term surveillance needed as they can recur."
      },
      {
        trigger: "crisis_treatment",
        question: "What is the treatment approach for myasthenic crisis?",
        teaching: "1) Airway first - intubate early if declining, 2) ICU admission, 3) Identify trigger (infection common), 4) IVIG (2g/kg over 2-5 days) OR plasma exchange (5 exchanges over 1-2 weeks). Both equally effective. Don't combine - no added benefit."
      },
      {
        trigger: "treatment_initiation",
        question: "When starting high-dose prednisone for MG, what must be considered?",
        teaching: "Prednisone can cause TRANSIENT WORSENING in the first 2 weeks, potentially precipitating crisis. For severe MG, consider: starting in hospital, giving IVIG/PLEX coverage, or using gradual dose escalation. Once stable, slow taper over months."
      }
    ]
  }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NEUROMUSCULAR_TEMPLATES;
}
