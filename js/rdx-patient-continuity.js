/*
 * rdx-
        {
          sequence: 2,
          caseId: 'pe-v2',
          setting: 'Emergency Department',
          date: '5 weeks post-DVT',
          provider: 'Dr. K. Thompson, Emergency Medicine / PERT',
          summary: 'Submassive PE with RV dysfunction. Root cause: apixaban underuse due to cost. PERT activated. UFH started. Catheter-directed thrombolysis performed. ICU admission. Survived. Social work enrolled patient in Medicaid; transitioned to warfarin.',
          vitals: { BP: '94/58', HR: '122', SpO2: '89%' }
        },
        {
          sequence: 3,
          caseId: 'pe-v3',
          setting: 'Hematology Clinic — 3 months post-PE',
          date: '3 months post-PE',
          provider: 'Dr. A. Goldstein, Hematology',
          summary: 'Hypercoagulability workup: triple-positive antiphospholipid syndrome (LA+, aCL IgG+, aβ2GPI IgG+). Lifelong warfarin (INR 2–3) — DOACs contraindicated per TRAPS/RAPS trials. Rheumatology referral for possible SLE. Pregnancy planning counseled.',
          vitals: { INR: '2.4', BP: '118/72' }
        },
        {
          sequence: 2,
          caseId: 'dka-v2',
          setting: 'Pediatric ED → PICU',
          date: '2 months after diagnosis',
          provider: 'Dr. S. Rivera, Pediatric Critical Care',
          summary: 'DKA complicated by cerebral edema during treatment — sudden GCS drop to 11, Cushing triad, papilledema. Mannitol given STAT. PICU admission. Survived without permanent neurological deficit. Hospitalized 5 days.',
          vitals: { BP: '142/88', HR: '54', GCS: '11' }
        },
        {
          sequence: 3,
          caseId: 'dka-v3',
          setting: 'Pediatric Endocrinology Clinic',
          date: '4 months after diagnosis',
          provider: 'Dr. B. Kowalski, Pediatric Endocrinology',
          summary: 'Third DKA in 4 months. Root cause identified: CGM insurance denial and insulin rationing due to cost. HbA1c 12.4%. CGM appeal filed, patient assistance program enrolled, sick day rules education, social work referral. Insulin pump referral placed.',
          vitals: { Glucose: '318', HbA1c: '12.4%' }
        },patient-continuity.js — Patient Continuity & Cross-Setting Encounter System
 * ReasonDx · Lauren Fine, MD, FAAAAI
 *
 * Provides prior encounter history for patients who appear across multiple clinical settings.
 * Public API is consumed by clinic-board.html, virtual-emr.html, and emr-overview.js.
 *
 * Usage:
 *   PatientContinuity.hasHistory(caseId)           // true if patient has prior encounters
 *   PatientContinuity.renderPriorNotes(caseId)     // returns formatted HTML of prior chart notes
 *   PatientContinuity.getEncounterChain(caseId)    // array of prior encounter objects
 *   PatientContinuity.getRelatedCases(caseId)      // array of related case IDs in the chain
 *   PatientContinuity.getChainForCase(caseId)      // full chain object for a case
 */

(function(window) {
  'use strict';

  // ── ENCOUNTER CHAINS ──────────────────────────────────────────────────────
  // Each chain is a patient arc across settings. Every case ID in the chain
  // gets access to all PRIOR encounters (encounters with sequence < current).
  // sequence: 1 = earliest, higher = later in the arc.

  var CHAINS = [

    // ── Chain 1: STEMI Arc ────────────────────────────────────────────────
    {
      chainId: 'stemi-arc',
      patientName: 'Marcus Delgado',
      dob: '1968-04-12',
      mrn: '204817',
      cases: ['type2-diabetes-outpatient', 'stemi-v1', 'chf-v1', 'heart-failure-hfpef'],
      encounters: [
        {
          sequence: 1,
          caseId: 'type2-diabetes-outpatient',
          setting: 'Outpatient Clinic',
          date: '6 weeks ago',
          provider: 'Dr. A. Reyes, Internal Medicine',
          summary: 'Annual diabetes follow-up. HbA1c 8.8%. ASCVD 10-yr risk 22%. Statin intensified to atorvastatin 80mg; GLP-1 (semaglutide) initiated. Lisinopril increased to 20mg for microalbuminuria. Patient counseled on dietary changes and weight management. Follow-up in 3 months.',
          vitals: { BP: '138/86', HR: '78', RR: '14', Temp: '98.4°F', Wt: '224 lbs' },
          assessment: 'T2DM poorly controlled (HbA1c 8.8%). High ASCVD risk. Early nephropathy (urine ACR 42). LDL 98, goal <70.',
          plan: 'Started semaglutide 0.5mg SQ weekly. Atorvastatin 40→80mg. Lisinopril 10→20mg. Dietitian referral placed. Repeat HbA1c in 3 months.',
          labs: [
            { name: 'HbA1c', val: '8.8%', flag: 'H' },
            { name: 'LDL', val: '98 mg/dL', flag: 'H' },
            { name: 'eGFR', val: '71 mL/min', flag: '' },
            { name: 'Urine ACR', val: '42 mg/g', flag: 'H' }
          ]
        },
        {
          sequence: 2,
          caseId: 'stemi-v1',
          setting: 'Emergency Department → Cath Lab',
          date: '3 days ago',
          provider: 'Dr. T. Osei, Cardiology / Interventional',
          summary: 'Presented with crushing substernal chest pain ×1hr radiating to left arm. EKG: ST elevations V1-V4. Activated cath lab. Door-to-balloon 68 minutes. LAD 95% occlusion — drug-eluting stent placed. Post-procedure EF 40% on bedside echo. Started dual antiplatelet (aspirin + ticagrelor), beta-blocker, high-intensity statin. Transferred to CCU.',
          vitals: { BP: '102/68', HR: '112', RR: '22', Temp: '98.6°F', Wt: '224 lbs' },
          assessment: 'Anterior STEMI — LAD culprit. EF 40% post-PCI. Killip Class II (rales at bases).',
          plan: 'Aspirin 81mg + ticagrelor 90mg BID (DAPT ×12 months). Metoprolol 25mg BID. Atorvastatin 80mg continued. Lisinopril held — BP 102/68. CCU monitoring. Echo in 48hr.',
          labs: [
            { name: 'Troponin I (peak)', val: '48.2 ng/mL', flag: 'H' },
            { name: 'BNP', val: '620 pg/mL', flag: 'H' },
            { name: 'Cr', val: '1.3 mg/dL', flag: 'H' },
            { name: 'K+', val: '3.9 mEq/L', flag: '' }
          ]
        }
      ]
    },

    // ── Chain 2: Sepsis / Urosepsis Arc ──────────────────────────────────
    {
      chainId: 'sepsis-arc',
      patientName: 'Brenda Petrov',
      dob: '1951-09-03',
      mrn: '318042',
      cases: ['pyelonephritis-urosepsis', 'sepsisseptic-shock', 'septic-shock-urosepsis', 'pyelonephritis-sepsis'],
      encounters: [
        {
          sequence: 1,
          caseId: 'pyelonephritis-urosepsis',
          setting: 'Emergency Department',
          date: '8 days ago',
          provider: 'Dr. R. Okafor, Emergency Medicine',
          summary: 'Presented with 2-day fever, right flank pain, and dysuria. Vitals: T 39.1°C, HR 108, BP 96/62. UA showed >100 WBC, positive nitrites, bacteriuria. Blood cultures ×2 drawn. Started IV ceftriaxone empirically. Admitted to internal medicine for IV antibiotics and monitoring.',
          vitals: { BP: '96/62', HR: '108', RR: '20', Temp: '39.1°C', Wt: '162 lbs' },
          assessment: 'Urosepsis — pyelonephritis with hemodynamic instability. Sepsis-3 criteria met (SOFA +2). E. coli suspected.',
          plan: 'Blood cultures ×2. IV ceftriaxone 2g q24h. IVF 30mL/kg bolus. Urology notified for possible obstruction. Repeat lactate in 2hr.',
          labs: [
            { name: 'WBC', val: '18.4 k/µL', flag: 'H' },
            { name: 'Lactate', val: '3.1 mmol/L', flag: 'H' },
            { name: 'Cr', val: '1.9 mg/dL', flag: 'H' },
            { name: 'UA WBC', val: '>100/hpf', flag: 'H' }
          ]
        },
        {
          sequence: 2,
          caseId: 'sepsisseptic-shock',
          setting: 'Medical ICU',
          date: '7 days ago',
          provider: 'Dr. S. Johansson, Critical Care',
          summary: 'Transferred to MICU after BP dropped to 78/44 despite 2L IVF. Norepinephrine initiated. Blood cultures grew E. coli — pan-sensitive. Ceftriaxone continued. Vasopressin added. Septic shock with SOFA score 10. Intubated for airway protection and work of breathing. Hydrocortisone 200mg/day started (vasopressor-dependent shock).',
          vitals: { BP: '78/44 → 108/68 (on pressors)', HR: '128', RR: 'intubated', Temp: '39.4°C', Wt: '162 lbs' },
          assessment: 'Septic shock — urosepsis, E. coli bacteremia. SOFA 10. Vasopressor-dependent.',
          plan: 'Norepinephrine 0.18 mcg/kg/min. Vasopressin 0.03 units/min added. Hydrocortisone 50mg q6h. Ceftriaxone continued (susceptibilities pending). Lung-protective ventilation. Daily SBT assessment.',
          labs: [
            { name: 'Blood culture', val: 'E. coli — pan-sensitive', flag: 'H' },
            { name: 'Lactate (peak)', val: '6.2 mmol/L', flag: 'H' },
            { name: 'Procalcitonin', val: '48.2 ng/mL', flag: 'H' },
            { name: 'Cr (peak)', val: '3.4 mg/dL', flag: 'H' }
          ]
        }
      ]
    },

    // ── Chain 3: Acute Ischemic Stroke Arc ───────────────────────────────
    {
      chainId: 'stroke-arc',
      patientName: 'Gwendolyn Fischer',
      dob: '1949-02-28',
      mrn: '405629',
      cases: ['stroke-v1', 'stroke-v2', 'stroke-v3', 'acute-ischemic-stroke-tpa', 'hypertensive-emergency'],
      encounters: [
        {
          sequence: 0,
          caseId: 'hypertensive-emergency',
          setting: 'Emergency Department',
          date: '6 months ago',
          provider: 'Dr. C. Nakamura, Emergency Medicine',
          summary: 'Presented with BP 226/138, severe headache, blurred vision. Papilledema on fundoscopy. MRI brain: PRES (posterior reversible encephalopathy syndrome). Started nicardipine drip — MAP reduced 20% in first hour. Admitted to ICU. Transitioned to oral amlodipine + lisinopril. Discharged on antihypertensive regimen with close follow-up.',
          vitals: { BP: '226/138', HR: '96', RR: '18', Temp: '98.6°F', Wt: '178 lbs' },
          assessment: 'Hypertensive emergency — PRES. No ischemic stroke on admission imaging.',
          plan: 'Nicardipine drip. BP target: reduce MAP 20% over 1hr, then gradual correction. Amlodipine 10mg + lisinopril 20mg at discharge. Neurology follow-up 1 week.',
          labs: [
            { name: 'Cr', val: '1.4 mg/dL', flag: 'H' },
            { name: 'BMP', val: 'Na 138, K 3.8, otherwise normal', flag: '' },
            { name: 'UA', val: '2+ protein', flag: 'H' }
          ]
        },
        {
          sequence: 2,
          caseId: 'stroke-v2',
          setting: 'Neuro ICU',
          date: 'Day 0 (6h post-tPA)',
          provider: 'Dr. M. Okafor, Neurocritical Care',
          summary: 'Hemorrhagic transformation (PH2) 6 hours post-tPA. NIHSS worsened from 14 to 22. CT head: parenchymal hematoma, 5mm midline shift. BP controlled with nicardipine. Intubated for airway protection. Neurosurgery evaluated — conservative management. ICU admission.',
          vitals: { BP: '188/104', HR: '94', GCS: '10' }
        },
        {
          sequence: 3,
          caseId: 'stroke-v3',
          setting: 'Acute Inpatient Neurology — Day 5',
          date: 'Day 5',
          provider: 'Dr. L. Weinstein, Neurology',
          summary: 'Post-stroke complications: aspiration pneumonia (treated with ampicillin-sulbactam), new-onset paroxysmal AF (CHA₂DS₂-VASc 5). Anticoagulation deferred — 5 days post PH2 hemorrhagic conversion. Transferred to inpatient stroke rehab. PT/OT/SLP daily. Anticoagulation plan: reassess at 4 weeks.',
          vitals: { BP: '144/88', HR: '82', Temp: '38.6°C' }
        },
        {
          sequence: 2,
          caseId: 'stroke-v1',
          setting: 'Emergency Department → Stroke Unit',
          date: '2 days ago',
          provider: 'Dr. Y. Vargas, Neurology',
          summary: 'EMS brought in with sudden left-sided weakness and slurred speech ×45min. NIHSS 14 on arrival. Non-contrast CT head: no hemorrhage. CT angiography: MCA M2 occlusion right side. tPA administered at 58 minutes from symptom onset (BP 178/100 pre-tPA — labetalol given to achieve <185/110). Thrombectomy not attempted — M2 segment, NIHSS 14, within tPA window. Admitted to stroke unit. BP target <180/105 first 24hr post-tPA.',
          vitals: { BP: '178/100 → 162/94 (post-labetalol)', HR: '84', RR: '16', Temp: '98.8°F', Wt: '178 lbs' },
          assessment: 'Acute ischemic stroke — right MCA M2 territory. tPA administered. NIHSS 14. Known HTN, poorly controlled despite dual therapy.',
          plan: 'tPA 0.9mg/kg (max 90mg). BP <180/105 ×24hr. NPO until swallow screen passed. DVT prophylaxis with sequential compression. Statin started. Cardioembolic workup: Echo + prolonged cardiac monitor. ASA held ×24hr post-tPA.',
          labs: [
            { name: 'INR', val: '1.1', flag: '' },
            { name: 'Platelets', val: '214 k/µL', flag: '' },
            { name: 'Glucose', val: '148 mg/dL', flag: 'H' },
            { name: 'LDL', val: '122 mg/dL', flag: 'H' }
          ]
        }
      ]
    },

    // ── Chain 4: DKA / Pediatric Diabetes Arc ────────────────────────────
    {
      chainId: 'dka-arc',
      patientName: 'Devon Patterson',
      dob: '2008-07-19',
      mrn: '512384',
      cases: ['dka-v1', 'dka-v2', 'dka-v3'],
      encounters: [
        {
          sequence: 1,
          caseId: 'dka-v1',
          setting: 'Pediatric Endocrinology Clinic',
          date: '3 weeks ago',
          provider: 'Dr. B. Kowalski, Pediatric Endocrinology',
          summary: 'New patient visit — referred by PCP for hyperglycemia found incidentally. Fasting glucose 312. HbA1c 11.8%. Anti-GAD antibodies strongly positive. Diagnosed with T1DM. Started on basal-bolus insulin regimen (glargine + lispro). Extensive diabetes education provided to patient and family. CGM prescribed. Follow-up in 2 weeks. Extensive counseling given regarding DKA warning signs — patient and mother verbalized understanding.',
          vitals: { BP: '108/68', HR: '92', RR: '16', Temp: '98.6°F', Wt: '132 lbs' },
          assessment: 'New-onset Type 1 Diabetes Mellitus. HbA1c 11.8%. Anti-GAD positive. No DKA at this time.',
          plan: 'Glargine 16 units QHS. Lispro correction scale + meal coverage. CGM (Dexterity G7) prescribed. Sick day rules reviewed. Return precautions for DKA symptoms given in writing.',
          labs: [
            { name: 'HbA1c', val: '11.8%', flag: 'H' },
            { name: 'Fasting glucose', val: '312 mg/dL', flag: 'H' },
            { name: 'Anti-GAD Ab', val: 'Strongly positive', flag: 'H' },
            { name: 'C-peptide', val: '0.4 ng/mL (low)', flag: 'L' }
          ]
        }
      ]
    },

    // ── Chain 5: PE / DVT Arc ────────────────────────────────────────────
    {
      chainId: 'pe-arc',
      patientName: 'Rachel Owusu',
      dob: '1987-11-14',
      mrn: '623910',
      cases: ['pe-v1', 'pe-v2', 'pe-v3', 'massive-pe-with-rv-failure', 'pulmonary-embolism-syncope'],
      encounters: [
        {
          sequence: 1,
          caseId: 'pe-v1',
          setting: 'Outpatient Clinic',
          date: '5 weeks ago',
          provider: 'Dr. E. Johansson, Internal Medicine',
          summary: 'Visit for OCP renewal (combined estrogen-progestin). Patient also noted left calf swelling and tenderness ×3 days. Wells DVT score 3 (high probability). Duplex ultrasound ordered same day — confirmed left femoral DVT. OCP discontinued. Anticoagulation started with apixaban 10mg BID ×7 days then 5mg BID. Hematology referral placed for hypercoagulability workup (age <35, unprovoked).',
          vitals: { BP: '118/74', HR: '82', RR: '14', Temp: '98.4°F', Wt: '142 lbs' },
          assessment: 'Acute proximal DVT — left femoral vein. OCP as likely provokant. Unprovoked element possible — workup pending.',
          plan: 'Discontinue OCP. Apixaban 10mg BID ×7 days, then 5mg BID ×3 months minimum. Avoid NSAIDs. Hematology referral. Return precautions for PE symptoms given.',
          labs: [
            { name: 'Duplex US left leg', val: 'DVT — left femoral vein, non-occlusive', flag: 'H' },
            { name: 'CBC', val: 'Normal', flag: '' },
            { name: 'CMP', val: 'Normal', flag: '' },
            { name: 'β-hCG', val: 'Negative', flag: '' }
          ]
        }
      ]
    },

    // ── Chain 6: Anaphylaxis Arc ─────────────────────────────────────────
    {
      chainId: 'anaphylaxis-arc',
      patientName: 'Aaliyah Johnson',
      dob: '1995-03-22',
      mrn: '731485',
      cases: ['allergic-rhinitis-immunotherapy'],
      encounters: [
        {
          sequence: 1,
          caseId: 'allergic-rhinitis-immunotherapy',
          setting: 'Emergency Department',
          date: '4 months ago',
          provider: 'Dr. K. Okafor, Emergency Medicine',
          summary: 'Presented with acute onset urticaria, angioedema, and bronchospasm 20 minutes after eating at a restaurant (suspected tree nut exposure). BP 88/54 on arrival. Epinephrine 0.3mg IM administered — excellent response. IV diphenhydramine + methylprednisolone given. Observed ×6 hours — biphasic reaction did not occur. Discharged with EpiPen ×2 and referral to Allergy/Immunology.',
          vitals: { BP: '88/54 → 118/76 (post-epi)', HR: '132 → 92', RR: '26 → 16', Temp: '98.6°F', Wt: '138 lbs' },
          assessment: 'Grade III anaphylaxis — suspected tree nut (walnut/cashew). Hypotension, bronchospasm, urticaria.',
          plan: 'Epinephrine 0.3mg IM ×1 (response excellent). IV diphenhydramine 50mg. Methylprednisolone 125mg IV. Discharged with 2× EpiPen auto-injectors. Strict avoidance of tree nuts and cross-contamination foods. Allergy/Immunology referral for SPT and OFC consideration.',
          labs: [
            { name: 'Serum tryptase', val: '42.8 ng/mL (peak)', flag: 'H' },
            { name: 'ABG', val: 'pH 7.38, pO2 92 on 2L NC', flag: '' }
          ]
        }
      ]
    },

    // ── Chain 7: Bacterial Meningitis Arc ────────────────────────────────
    {
      chainId: 'meningitis-arc',
      patientName: 'Tariq Hassan',
      dob: '2003-06-08',
      mrn: '845203',
      cases: ['meningitis-v1'],
      encounters: [
        {
          sequence: 1,
          caseId: 'meningitis-v1',
          setting: 'University Health Services',
          date: '3 days ago',
          provider: 'NP D. Osei, University Health',
          summary: 'Seen for 6-hour history of headache and neck stiffness. Thought to be tension headache. Ibuprofen 600mg dispensed. Advised to rest and return if worsening. Meningism not recognized — Kernig/Brudzinski not tested. Patient lives in dormitory. No note of petechiae on skin check.',
          vitals: { BP: '122/78', HR: '96', RR: '16', Temp: '38.4°C', Wt: '168 lbs' },
          assessment: 'Headache, presumed tension-type. Low-grade fever attributed to viral URI.',
          plan: 'Ibuprofen 600mg q6h PRN. Hydration. Return if symptoms worsen or fever spikes.',
          labs: []
        }
      ]
    },

    // ── Chain 8: CHF / HFpEF Arc ─────────────────────────────────────────
    {
      chainId: 'hf-arc',
      patientName: 'Shirley Achebe',
      dob: '1947-01-30',
      mrn: '956712',
      cases: ['chf-exacerbation', 'chf-v1', 'heart-failure-hfpef'],
      encounters: [
        {
          sequence: 1,
          caseId: 'chf-exacerbation',
          setting: 'Outpatient Cardiology Clinic',
          date: '10 days ago',
          provider: 'Dr. G. Fontaine, Cardiology',
          summary: 'Routine HFpEF follow-up. Echo EF 58%. BNP 420. Patient reports 2-week weight gain of 6 lbs, worsening dyspnea on exertion. Daily weights not being maintained. Furosemide dose increased from 40mg to 60mg daily. Empagliflozin 10mg initiated (EMPEROR-Preserved data). Sodium restriction counseling reinforced. Follow-up in 2 weeks.',
          vitals: { BP: '148/92', HR: '78 (irregular — AF)', RR: '16', Temp: '98.4°F', Wt: '196 lbs' },
          assessment: 'HFpEF, EF 58%. Mild decompensation — fluid overload. AF on apixaban. Subtherapeutic diuresis.',
          plan: 'Furosemide 40→60mg daily. Empagliflozin 10mg started. Reinforce daily weights. 2g sodium diet. Return precautions for acute dyspnea.',
          labs: [
            { name: 'BNP', val: '420 pg/mL', flag: 'H' },
            { name: 'Cr', val: '1.2 mg/dL', flag: '' },
            { name: 'K+', val: '3.6 mEq/L', flag: '' },
            { name: 'Echo EF', val: '58%', flag: '' }
          ]
        }
      ]
    },

    // ── Chain 9: Pneumonia / CAP Arc ─────────────────────────────────────
    {
      chainId: 'pneumonia-arc',
      patientName: 'Bernard Kowalski',
      dob: '1950-12-05',
      mrn: '1047839',
      cases: ['pneumonia'],
      encounters: [
        {
          sequence: 1,
          caseId: 'pneumonia',
          setting: 'Outpatient Clinic',
          date: '5 days ago',
          provider: 'Dr. W. Oduya, Internal Medicine',
          summary: 'Seen for 3-day URI symptoms. Productive cough, low-grade fever. CXR not obtained. Prescribed azithromycin 250mg ×5 days for presumed atypical pneumonia. No CURB-65 score calculated. No SpO2 checked in office.',
          vitals: { BP: '136/84', HR: '88', RR: '18', Temp: '38.2°C', Wt: '188 lbs' },
          assessment: 'Upper respiratory infection vs early pneumonia. Empiric treatment given.',
          plan: 'Azithromycin 250mg daily ×5 days. Rest, fluids. Return if worsening.',
          labs: []
        }
      ]
    },

    // ── Chain 10: Alcohol Withdrawal / Liver Arc ─────────────────────────
    {
      chainId: 'etoh-arc',
      patientName: 'Colin Nakamura',
      dob: '1970-08-17',
      mrn: '1139204',
      cases: ['alcohol-withdrawal'],
      encounters: [
        {
          sequence: 1,
          caseId: 'alcohol-withdrawal',
          setting: 'Primary Care Clinic',
          date: '2 weeks ago',
          provider: 'Dr. J. Walsh, Family Medicine',
          summary: 'Annual physical. AUDIT-C score 10 — positive screen for severe AUD. Patient discloses daily fifth of vodka ×6 years. Discussed risks of abrupt cessation — seizure and DTs explained in detail. Patient declined inpatient detox referral. Agreed to gradual supervised taper with weekly check-ins. Thiamine 100mg daily prescribed. Naltrexone 50mg daily started. Next appointment scheduled in 1 week. Patient did not return for scheduled appointment.',
          vitals: { BP: '148/94', HR: '94', RR: '16', Temp: '98.6°F', Wt: '174 lbs' },
          assessment: 'Severe alcohol use disorder. High risk for withdrawal seizure/DTs given quantity and duration of use.',
          plan: 'AUDIT-C 10 — counseling provided. Thiamine 100mg daily. Naltrexone 50mg daily. Referral to addiction medicine offered — declined. Weekly office visits for supervised taper monitoring. CAGE questionnaire documented.',
          labs: [
            { name: 'LFTs', val: 'AST 78, ALT 44, Alk Phos 112', flag: 'H' },
            { name: 'GGT', val: '214 U/L', flag: 'H' },
            { name: 'MCV', val: '102 fL (macrocytosis)', flag: 'H' },
            { name: 'Platelets', val: '118 k/µL', flag: 'L' }
          ]
        }
      ]
    }

  ]; // end CHAINS


  // ── PUBLIC API ────────────────────────────────────────────────────────────

  var PatientContinuity = {

    /**
     * Returns true if the given caseId has prior encounter history.
     * "Prior" means there is an encounter in the chain with sequence < current.
     */
    hasHistory: function(caseId) {
      var chain = this.getChainForCase(caseId);
      if (!chain) return false;
      var currentSeq = this._getCurrentSequence(chain, caseId);
      return chain.encounters.some(function(e) {
        return e.sequence < currentSeq;
      });
    },

    /**
     * Returns fully formatted HTML of all prior chart notes for a case.
     * Safe to inject via innerHTML.
     */
    renderPriorNotes: function(caseId) {
      var chain = this.getChainForCase(caseId);
      if (!chain) return '';
      var currentSeq = this._getCurrentSequence(chain, caseId);
      var prior = chain.encounters.filter(function(e) {
        return e.sequence < currentSeq;
      }).sort(function(a, b) { return b.sequence - a.sequence; }); // most recent first
      if (!prior.length) return '';

      var html = '<div class="continuity-banner">' +
        '<div class="continuity-banner-header">' +
          '<span class="continuity-icon">📋</span>' +
          '<div>' +
            '<div class="continuity-title">Prior Encounter History</div>' +
            '<div class="continuity-subtitle">' + this._esc(chain.patientName) +
              ' · MRN ' + this._esc(chain.mrn) +
              ' · ' + prior.length + ' prior encounter' + (prior.length !== 1 ? 's' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

      prior.forEach(function(enc) {
        html += '<div class="prior-encounter-card">' +
          '<div class="pec-header">' +
            '<div class="pec-setting">' + PatientContinuity._esc(enc.setting) + '</div>' +
            '<div class="pec-date">' + PatientContinuity._esc(enc.date) + '</div>' +
          '</div>' +
          '<div class="pec-provider">Provider: ' + PatientContinuity._esc(enc.provider) + '</div>' +

          '<div class="pec-section-label">Summary</div>' +
          '<div class="pec-text">' + PatientContinuity._esc(enc.summary) + '</div>' +

          '<div class="pec-section-label">Vital Signs</div>' +
          '<div class="pec-vitals">';
        Object.entries(enc.vitals).forEach(function(kv) {
          html += '<div class="pec-vital-chip"><span class="pvc-label">' +
            PatientContinuity._esc(kv[0]) + '</span><span class="pvc-val">' +
            PatientContinuity._esc(kv[1]) + '</span></div>';
        });
        html += '</div>';

          if (enc.labs && enc.labs.length) {
            html += '<div class="pec-section-label">Relevant Results</div>' +
              '<div class="pec-labs">';
            enc.labs.forEach(function(lab) {
              html += '<div class="pec-lab-row' + (lab.flag ? ' pec-lab-abnormal' : '') + '">' +
                '<span class="pec-lab-name">' + PatientContinuity._esc(lab.name) + '</span>' +
                '<span class="pec-lab-val">' + PatientContinuity._esc(lab.val) + '</span>' +
                '</div>';
            });
            html += '</div>';
          }

          html += '<div class="pec-section-label">Assessment</div>' +
            '<div class="pec-text">' + PatientContinuity._esc(enc.assessment) + '</div>' +

            '<div class="pec-section-label">Plan</div>' +
            '<div class="pec-text">' + PatientContinuity._esc(enc.plan) + '</div>' +
          '</div>';
      });

      return html;
    },

    /**
     * Returns array of prior encounter objects for a case.
     */
    getEncounterChain: function(caseId) {
      var chain = this.getChainForCase(caseId);
      if (!chain) return [];
      var currentSeq = this._getCurrentSequence(chain, caseId);
      return chain.encounters.filter(function(e) {
        return e.sequence < currentSeq;
      });
    },

    /**
     * Returns all caseIds related to this case (same chain, excluding self).
     */
    getRelatedCases: function(caseId) {
      var chain = this.getChainForCase(caseId);
      if (!chain) return [];
      return chain.cases.filter(function(id) { return id !== caseId; });
    },

    /**
     * Returns the full chain object for a given caseId.
     */
    getChainForCase: function(caseId) {
      for (var i = 0; i < CHAINS.length; i++) {
        if (CHAINS[i].cases.indexOf(caseId) >= 0) return CHAINS[i];
      }
      return null;
    },

    // ── CSS for injected prior-notes HTML ─────────────────────────────────
    // Call once on page load to inject styles.
    injectStyles: function() {
      if (document.getElementById('rdx-continuity-styles')) return;
      var style = document.createElement('style');
      style.id = 'rdx-continuity-styles';
      style.textContent = [
        '.continuity-banner{background:linear-gradient(135deg,#1B4F72,#0D7A67);border-radius:10px;padding:14px 16px;margin-bottom:16px;color:white}',
        '.continuity-banner-header{display:flex;align-items:flex-start;gap:12px}',
        '.continuity-icon{font-size:24px;flex-shrink:0;margin-top:2px}',
        '.continuity-title{font-size:15px;font-weight:700;margin-bottom:2px}',
        '.continuity-subtitle{font-size:12px;opacity:.85}',
        '.prior-encounter-card{border:1px solid #DCE3EB;border-radius:10px;padding:14px;margin-bottom:12px;background:white}',
        '.prior-encounter-card:first-of-type{border-color:#2874A6;border-width:1.5px;background:#f0f7ff}',
        '.pec-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}',
        '.pec-setting{font-size:13px;font-weight:700;color:#1B4F72}',
        '.pec-date{font-size:11px;font-weight:600;color:#64748B;background:#F1F5F9;padding:2px 8px;border-radius:10px;white-space:nowrap}',
        '.pec-provider{font-size:11px;color:#64748B;margin-bottom:10px;font-style:italic}',
        '.pec-section-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#64748B;margin:10px 0 4px;padding-bottom:3px;border-bottom:1px solid #f0f2f5}',
        '.pec-text{font-size:12px;line-height:1.6;color:#1E293B}',
        '.pec-vitals{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:4px}',
        '.pec-vital-chip{background:#f7f9fc;border:1px solid #DCE3EB;border-radius:6px;padding:4px 8px;display:flex;flex-direction:column;align-items:center;min-width:60px}',
        '.pvc-label{font-size:9px;text-transform:uppercase;letter-spacing:.4px;color:#64748B;font-weight:600}',
        '.pvc-val{font-size:12px;font-weight:700;font-family:\'IBM Plex Mono\',monospace;color:#1E293B}',
        '.pec-labs{display:flex;flex-direction:column;gap:3px}',
        '.pec-lab-row{display:flex;justify-content:space-between;font-size:12px;padding:3px 6px;border-radius:4px;background:#f8fafc}',
        '.pec-lab-abnormal{background:#fef2f2;color:#991B1B}',
        '.pec-lab-name{font-weight:500}',
        '.pec-lab-val{font-family:\'IBM Plex Mono\',monospace;font-weight:600}',
        '.continuity-none{padding:20px;text-align:center;color:#94A3B8;font-size:13px;font-style:italic}',
        // Continue button styles
        '.continue-patient-btn{display:inline-flex;align-items:center;gap:6px;background:#0D7A67;color:white;border:none;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;transition:filter .15s}',
        '.continue-patient-btn:hover{filter:brightness(1.12)}',
        '.continuity-badge{display:inline-flex;align-items:center;gap:4px;background:#E8F8F5;color:#0D7A67;border:1px solid #B2DFD8;border-radius:10px;padding:2px 7px;font-size:10px;font-weight:700}'
      ].join('\n');
      document.head.appendChild(style);
    },

    // ── Internal helpers ──────────────────────────────────────────────────
    _getCurrentSequence: function(chain, caseId) {
      for (var i = 0; i < chain.encounters.length; i++) {
        if (chain.encounters[i].caseId === caseId) return chain.encounters[i].sequence;
      }
      // caseId is in chain.cases but has no encounter entry = it is a future node
      // Find the max existing sequence and treat this as sequence max+1
      var maxSeq = 0;
      chain.encounters.forEach(function(e) { if (e.sequence > maxSeq) maxSeq = e.sequence; });
      return maxSeq + 1;
    },

    _esc: function(s) {
      if (!s) return '';
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
  };

  window.PatientContinuity = PatientContinuity;

})(window);
