/**
 * rdx-case-results.js — Case-Specific Lab & Imaging Results
 * ReasonDx · Lauren Fine, MD, FAAAAI
 *
 * Each key = case ID. Values override the generic fallbacks in virtual-emr.html.
 * Loaded at runtime; CASE_SPECIFIC_LAB_RESULTS and CASE_SPECIFIC_IMG_RESULTS
 * are patched with the active case's data after loadCaseData() resolves.
 *
 * Result data is clinically accurate for the named diagnosis.
 * Values are intentionally realistic with appropriate flags.
 */

window.RDX_CASE_RESULTS = {

  // ── STEMI ──────────────────────────────────────────────────────────────────
  "stemi-v1": {
    labResults: {
      troponin: {group:"TROPONIN I (HIGH-SENSITIVITY)", results:[
        {test:"hs-Troponin I (0h)",  value:"4,820", unit:"ng/L", range:"<52", flag:"H"},
        {test:"hs-Troponin I (3h)",  value:"12,400",unit:"ng/L", range:"<52", flag:"H"},
        {test:"Comment",            value:"Rising pattern — consistent with acute MI",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"11.8", unit:"x10³/µL", range:"4.5-11.0", flag:"H"},
        {test:"Hemoglobin", value:"14.2", unit:"g/dL",    range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"42.0", unit:"%",        range:"40-52",    flag:""},
        {test:"Platelets",  value:"218",  unit:"x10³/µL", range:"150-400",  flag:""},
        {test:"Neutrophils",value:"78",   unit:"%",        range:"40-70",    flag:"H"},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"138", unit:"mEq/L", range:"136-145", flag:""},
        {test:"Potassium",  value:"4.2", unit:"mEq/L", range:"3.5-5.0", flag:""},
        {test:"Chloride",   value:"101", unit:"mEq/L", range:"98-106",  flag:""},
        {test:"CO2",        value:"24",  unit:"mEq/L", range:"23-29",   flag:""},
        {test:"BUN",        value:"18",  unit:"mg/dL", range:"7-20",    flag:""},
        {test:"Creatinine", value:"1.1", unit:"mg/dL", range:"0.7-1.3", flag:""},
        {test:"Glucose",    value:"168", unit:"mg/dL", range:"70-100",  flag:"H"},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",  value:"12.4",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR", value:"1.1", unit:"",       range:"0.9-1.1",  flag:""},
      ]},
      lipid: {group:"LIPID PANEL", results:[
        {test:"Total Cholesterol", value:"248",unit:"mg/dL",range:"<200",    flag:"H"},
        {test:"LDL (calc)",        value:"162",unit:"mg/dL",range:"<100",    flag:"H"},
        {test:"HDL",               value:"38", unit:"mg/dL",range:">40 (M)", flag:"L"},
        {test:"Triglycerides",     value:"240",unit:"mg/dL",range:"<150",    flag:"H"},
      ]},
    },
    imgResults: {
      ekg: {findings:"ST elevation 3-4mm leads II, III, aVF with reciprocal ST depression in I, aVL. Rate 94 bpm. Normal axis. Q waves developing in III. No prior for comparison.",
            impression:"1. Acute inferior STEMI.\n2. Reciprocal changes in lateral leads.\n3. Activate cath lab immediately."},
      cxr: {findings:"Heart: upper normal size. Mediastinum: normal. Lungs: mild perihilar haziness bilaterally, early pulmonary vascular congestion. No frank edema. No effusion.",
            impression:"1. Mild pulmonary vascular congestion — early left heart failure.\n2. No acute pneumonia or pneumothorax."},
      echo: {findings:"LV: Inferior and inferolateral wall hypokinesis, EF estimated 40-45%. RV: mildly dilated, borderline function. Valves: MR 2+. No pericardial effusion.",
             impression:"1. Acute inferior wall LVSD — EF 40-45%.\n2. Regional wall motion abnormality consistent with acute inferior MI.\n3. Moderate mitral regurgitation."},
    }
  },

  // ── PULMONARY EMBOLISM ─────────────────────────────────────────────────────
  "pe-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"10.2",unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"13.8",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"41.2",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"287", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"3.9",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"Chloride",   value:"104",unit:"mEq/L",range:"98-106", flag:""},
        {test:"CO2",        value:"21", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"14", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.8",unit:"mg/dL",range:"0.6-1.2",flag:""},
      ]},
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I", value:"0.08",unit:"ng/mL",range:"<0.04",flag:"H"},
        {test:"Comment",    value:"Mild elevation — RV strain pattern, not primary ACS",unit:"",range:"",flag:""},
      ]},
      bnp: {group:"BNP", results:[
        {test:"NT-proBNP",value:"820",unit:"pg/mL",range:"<125",flag:"H"},
        {test:"Comment",  value:"Elevated — RV dysfunction from PE burden",unit:"",range:"",flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",  value:"12.1",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR", value:"1.0", unit:"",       range:"0.9-1.1",  flag:""},
        {test:"PTT", value:"28",  unit:"seconds",range:"25-35",    flag:""},
        {test:"D-dimer",value:"4.8",unit:"µg/mL FEU",range:"<0.5",flag:"H"},
      ]},
    },
    imgResults: {
      ekg: {findings:"Sinus tachycardia 108 bpm. S1Q3T3 pattern. T-wave inversions V1-V4. Right bundle branch block (new vs prior unknown). No ST elevation.",
            impression:"1. Sinus tachycardia.\n2. S1Q3T3 pattern — right heart strain.\n3. New RBBB — concerning for significant PE. Recommend CTA-PE urgently."},
      cxr: {findings:"Heart: Normal size. Lungs: Hampton's hump density right lower lobe. Westermark sign right upper lobe (oligemia). No pneumothorax. No pleural effusion.",
            impression:"1. Hampton's hump RLL — peripheral wedge opacity suggestive of pulmonary infarction.\n2. Westermark sign — regional oligemia.\n3. Findings highly suspicious for PE. Recommend CTA-PE."},
      cta_pe: {findings:"Bilateral pulmonary emboli with saddle embolus at main pulmonary artery bifurcation extending into bilateral main pulmonary arteries. Right heart strain: RV/LV ratio 1.4. Pulmonary infarcts right lower lobe.",
               impression:"1. Massive saddle pulmonary embolus.\n2. Right heart strain — RV/LV ratio 1.4 (normal <0.9).\n3. Pulmonary infarction right lower lobe.\n4. Recommend urgent multidisciplinary PERT consultation."},
    }
  },

  // ── DKA ───────────────────────────────────────────────────────────────────
  "dka-v1": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"129",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"5.8",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"Chloride",   value:"94", unit:"mEq/L",range:"98-106", flag:"L"},
        {test:"CO2",        value:"8",  unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"28", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"1.6",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",    value:"642",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Anion Gap",  value:"27", unit:"mEq/L",range:"8-12",   flag:"H"},
        {test:"Comment",    value:"Corrected Na: 134. Osmolality est. 325. High AG metabolic acidosis.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"18.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"16.2",unit:"g/dL",   range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"48.2",unit:"%",       range:"40-52",    flag:""},
        {test:"Platelets",  value:"320", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Neutrophils",value:"88",  unit:"%",       range:"40-70",    flag:"H"},
        {test:"Comment",    value:"Leukocytosis common in DKA even without infection",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"Glucose",  value:"3+",    unit:"",range:"Negative",flag:"H"},
        {test:"Ketones",  value:"Large", unit:"",range:"Negative",flag:"H"},
        {test:"pH",       value:"5.0",   unit:"",range:"4.5-8.0", flag:""},
        {test:"Protein",  value:"Trace", unit:"",range:"Negative",flag:""},
        {test:"WBC",      value:"2-5",   unit:"/hpf",range:"0-5", flag:""},
        {test:"RBC",      value:"0-2",   unit:"/hpf",range:"0-3", flag:""},
      ]},
      hba1c: {group:"HEMOGLOBIN A1c", results:[
        {test:"HbA1c",           value:"11.2",unit:"%",   range:"<5.7 normal",flag:"H"},
        {test:"Est. Avg Glucose",value:"278", unit:"mg/dL",range:"--",         flag:""},
        {test:"Comment",         value:"Severely uncontrolled diabetes. Consistent with DKA precipitant.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Heart: Normal size. Lungs: Clear bilaterally. No infiltrate. No pneumonia. Trachea midline.",
            impression:"1. No acute cardiopulmonary process.\n2. No pneumonia as DKA precipitant on CXR."},
      ekg: {findings:"Sinus tachycardia 112 bpm. Peaked T-waves in precordial leads V2-V5. QTc 480ms (prolonged). No significant ST changes. Normal axis.",
            impression:"1. Sinus tachycardia.\n2. Peaked T-waves — hyperkalemia pattern. Confirm K+ 5.8.\n3. Prolonged QTc — monitor during rehydration.\n4. Cardiology awareness if K does not normalize."},
    }
  },

  // ── STROKE ────────────────────────────────────────────────────────────────
  "stroke-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"8.4", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"14.6",unit:"g/dL",   range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"43.8",unit:"%",       range:"40-52",    flag:""},
        {test:"Platelets",  value:"198", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"4.0",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"25", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"16", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"1.0",unit:"mg/dL",range:"0.7-1.3",flag:""},
        {test:"Glucose",    value:"142",unit:"mg/dL",range:"70-100", flag:"H"},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",      value:"12.0",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR",     value:"1.0", unit:"",       range:"0.9-1.1",  flag:""},
        {test:"PTT",     value:"27",  unit:"seconds",range:"25-35",    flag:""},
        {test:"Comment", value:"Coags normal — no anticoagulation contraindication on coag basis alone",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"Hyperdense MCA sign right M2 segment. No hemorrhage. Early loss of gray-white differentiation right MCA territory. No midline shift. ASPECTS 8.",
               impression:"1. Hyperdense right M2 segment — thrombus.\n2. Early ischemic changes right MCA territory — ASPECTS 8.\n3. No hemorrhage.\n4. STAT CTA head/neck and neurology activation. tPA/thrombectomy candidacy evaluation."},
      mribrain: {findings:"DWI: Restricted diffusion right MCA territory involving right caudate, putamen, and posterior internal capsule. ADC: dark signal confirming acute infarct. No hemorrhage on GRE. DWI infarct core ~18 mL. Penumbra-to-core ratio suggests viable tissue.",
                 impression:"1. Acute right MCA territory infarct — ischemic stroke.\n2. DWI core ~18 mL. Substantial penumbra present.\n3. Mechanical thrombectomy strongly indicated — transfer to comprehensive stroke center."},
    }
  },

  // ── PNEUMONIA ─────────────────────────────────────────────────────────────
  "pneumonia": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"16.8",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"12.4",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"37.2",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"380", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Neutrophils",value:"86",  unit:"%",       range:"40-70",    flag:"H"},
        {test:"Bands",      value:"8",   unit:"%",       range:"0-6",      flag:"H"},
        {test:"Comment",    value:"Left shift with bands — bacterial process",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"132",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"3.8",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"22", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"24", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"1.3",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",    value:"118",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Comment",    value:"Hyponatremia + elevated BUN/Cr — dehydration and SIADH pattern in pneumonia",unit:"",range:"",flag:""},
      ]},
      crp: {group:"INFLAMMATORY MARKERS", results:[
        {test:"CRP",           value:"148",unit:"mg/L", range:"<10",   flag:"H"},
        {test:"Procalcitonin", value:"4.8",unit:"ng/mL",range:"<0.25",flag:"H"},
        {test:"Comment",       value:"Procalcitonin >2 strongly suggests bacterial etiology",unit:"",range:"",flag:""},
      ]},
      bloodculture: {group:"BLOOD CULTURES", results:[
        {test:"Blood Culture x2 — Preliminary",value:"No growth at 24 hrs",unit:"",range:"",flag:""},
        {test:"Final result",                  value:"Pending 48-72 hrs",  unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Right lower lobe airspace opacity with air bronchograms. Blunting of right costophrenic angle suggesting small pleural effusion. Heart normal size. Left lung clear.",
            impression:"1. Right lower lobe pneumonia.\n2. Small right parapneumonic pleural effusion.\n3. Recommend repeat CXR after 6 weeks to confirm resolution."},
    }
  },

  // ── SEPTIC SHOCK ──────────────────────────────────────────────────────────
  "septic-shock-urosepsis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"22.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"11.8",unit:"g/dL",   range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit", value:"35.4",unit:"%",       range:"36-46",    flag:"L"},
        {test:"Platelets",  value:"94",  unit:"x10³/µL",range:"150-400",  flag:"L"},
        {test:"Neutrophils",value:"92",  unit:"%",       range:"40-70",    flag:"H"},
        {test:"Bands",      value:"14",  unit:"%",       range:"0-6",      flag:"H"},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"134",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"5.2",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"CO2",        value:"14", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"44", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"3.2",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",    value:"162",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Lactate",    value:"4.8",unit:"mmol/L",range:"0.5-2.2",flag:"H"},
        {test:"Comment",    value:"Lactate >4 — septic shock. Begin 30 mL/kg IVF bolus. Cultures before abx.",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"Appearance", value:"Cloudy",unit:"",range:"Clear",    flag:""},
        {test:"WBC",        value:">50",  unit:"/hpf",range:"0-5",  flag:"H"},
        {test:"RBC",        value:"10-20",unit:"/hpf",range:"0-3",  flag:"H"},
        {test:"Bacteria",   value:"Many", unit:"",range:"None",      flag:"H"},
        {test:"Nitrite",    value:"Positive",unit:"",range:"Negative",flag:"H"},
        {test:"LE",         value:"3+",  unit:"",range:"Negative",   flag:"H"},
        {test:"Glucose",    value:"2+",  unit:"",range:"Negative",   flag:"H"},
        {test:"Comment",    value:"Pyuria and bacteriuria consistent with UTI/urosepsis source",unit:"",range:"",flag:""},
      ]},
      uculture: {group:"URINE CULTURE — PRELIMINARY", results:[
        {test:"24h Preliminary",value:"Heavy growth gram-negative rods",unit:"",range:"",flag:"H"},
        {test:"Likely organism", value:"E. coli — sensitivities pending",unit:"",range:"",flag:""},
        {test:"Final",           value:"Pending 48-72 hrs",             unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Heart: Normal size. Lungs: Clear bilaterally. No pneumonia. No effusion. No pneumothorax. No pulmonary edema.",
            impression:"1. No pulmonary source of sepsis on CXR.\n2. Supports urinary source."},
      us_renal: {findings:"Right kidney 11.4 cm. Mild hydronephrosis right collecting system. Cortex echogenicity preserved. Left kidney 10.8 cm, normal. No renal calculi visualized. No perinephric fluid.",
                 impression:"1. Mild right hydronephrosis — possible obstructive component to urosepsis.\n2. Recommend CT abdomen/pelvis if obstruction suspected clinically."},
    }
  },

  // ── MENINGITIS ────────────────────────────────────────────────────────────
  "meningitis-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"24.6",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"13.2",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Platelets",  value:"142", unit:"x10³/µL",range:"150-400",  flag:"L"},
        {test:"Neutrophils",value:"94",  unit:"%",       range:"40-70",    flag:"H"},
        {test:"Bands",      value:"10",  unit:"%",       range:"0-6",      flag:"H"},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"126",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"3.6",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"20", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"18", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"1.0",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",    value:"78", unit:"mg/dL",range:"70-100", flag:""},
        {test:"Comment",    value:"Hyponatremia — SIADH in context of CNS infection",unit:"",range:"",flag:""},
      ]},
      crp: {group:"INFLAMMATORY MARKERS", results:[
        {test:"CRP",           value:"242",unit:"mg/L", range:"<10",   flag:"H"},
        {test:"Procalcitonin", value:"18.4",unit:"ng/mL",range:"<0.25",flag:"H"},
      ]},
      bloodculture: {group:"BLOOD CULTURES", results:[
        {test:"Blood Culture x2",value:"Gram-positive diplococci on Gram stain — preliminary",unit:"",range:"",flag:"H"},
        {test:"Comment",         value:"S. pneumoniae suspected — ceftriaxone + dexamethasone immediately",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No hemorrhage. No significant mass effect. No midline shift. Basal cisterns patent. Ventricles normal size. Sulcal effacement suggesting diffuse cerebral edema. No abscess.",
               impression:"1. Diffuse cerebral edema — meningitis pattern.\n2. No contraindication to LP on this CT.\n3. Proceed immediately to lumbar puncture — do not delay antibiotics."},
    }
  },

  // ── CHF ───────────────────────────────────────────────────────────────────
  "chf-v1": {
    labResults: {
      bnp: {group:"BNP / NT-proBNP", results:[
        {test:"NT-proBNP",value:"8,420",unit:"pg/mL",range:"<125",flag:"H"},
        {test:"Comment",  value:"Markedly elevated — severe decompensation. >5000 pg/mL = very high mortality risk.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"130",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"5.4",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"CO2",        value:"20", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"48", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"2.1",unit:"mg/dL",range:"0.7-1.3",flag:"H"},
        {test:"Glucose",    value:"128",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Comment",    value:"Cardiorenal syndrome — rising Cr during CHF decompensation. Do not withhold diuresis.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"9.4", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"10.2",unit:"g/dL",   range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit", value:"30.6",unit:"%",       range:"36-46",    flag:"L"},
        {test:"Platelets",  value:"210", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Comment",    value:"Anemia of chronic disease — common in HFrEF. Check iron studies.",unit:"",range:"",flag:""},
      ]},
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I", value:"0.06",unit:"ng/mL",range:"<0.04",flag:"H"},
        {test:"Comment",    value:"Mild chronic elevation — demand ischemia in CHF. Trend to rule out ACS.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Cardiomegaly (CTR 0.62). Bilateral interstitial opacities and Kerley B lines. Upper lobe vascular redistribution. Bilateral pleural effusions — right greater than left. Perihilar bat-wing infiltrates.",
            impression:"1. Moderate cardiomegaly.\n2. Bilateral pulmonary edema — moderate-severe.\n3. Bilateral pleural effusions.\n4. Decompensated heart failure."},
      echo: {findings:"LV: Severely dilated, EF 20-25%. Global hypokinesis. LVEDV 280 mL. RV: Mildly dilated, TAPSE 14mm (reduced). Valves: MR 3+, TR 2+. IVC dilated 2.4 cm, <50% collapse — elevated RA pressure. Bilateral small-moderate effusions.",
             impression:"1. Severely reduced LV systolic function, EF 20-25%.\n2. Dilated cardiomyopathy pattern.\n3. Significant functional MR and TR.\n4. Elevated filling pressures.\n5. Recommend cardiology, HF team, and consider advanced therapies consult."},
    }
  },

  // ── APPENDICITIS ──────────────────────────────────────────────────────────
  "appendicitis-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"17.2",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"14.8",unit:"g/dL",   range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"44.4",unit:"%",       range:"40-52",    flag:""},
        {test:"Platelets",  value:"284", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Neutrophils",value:"89",  unit:"%",       range:"40-70",    flag:"H"},
        {test:"Bands",      value:"6",   unit:"%",       range:"0-6",      flag:""},
        {test:"Comment",    value:"Leukocytosis with neutrophilia — Alvarado score adds 2 points",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"137",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"3.7",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"24", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"12", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.9",unit:"mg/dL",range:"0.7-1.3",flag:""},
        {test:"Glucose",    value:"102",unit:"mg/dL",range:"70-100", flag:"H"},
      ]},
      crp: {group:"CRP", results:[
        {test:"CRP", value:"84",unit:"mg/L",range:"<10",flag:"H"},
        {test:"Comment",value:"CRP >50 increases likelihood of perforated appendicitis",unit:"",range:"",flag:""},
      ]},
      hcg: {group:"PREGNANCY TEST", results:[
        {test:"Serum hCG",value:"Negative",unit:"",range:"<5 mIU/mL",flag:""},
        {test:"Comment",  value:"No ectopic pregnancy — appendicitis remains primary dx",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ctabdomen: {findings:"Appendix 11mm in diameter with periappendiceal fat stranding. Small amount of free fluid in RLQ. No perforation identified. No appendicolith. Normal bowel.",
                  impression:"1. Acute non-perforated appendicitis.\n2. No appendicolith. No free air.\n3. General surgery consultation and OR planning indicated."},
    }
  },

  // ── HYPERKALEMIA ──────────────────────────────────────────────────────────
  "hyperkalemia-cardiac": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"138",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"7.2",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"Chloride",   value:"108",unit:"mEq/L",range:"98-106", flag:"H"},
        {test:"CO2",        value:"14", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"82", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"8.4",unit:"mg/dL",range:"0.7-1.3",flag:"H"},
        {test:"Glucose",    value:"104",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Anion Gap",  value:"16", unit:"mEq/L",range:"8-12",   flag:"H"},
        {test:"Comment",    value:"Severe hyperkalemia with ESRD. K 7.2 — EKG immediately. Calcium gluconate STAT.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"9.8", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"8.6", unit:"g/dL",   range:"13.5-17.5",flag:"L"},
        {test:"Hematocrit", value:"25.8",unit:"%",       range:"40-52",    flag:"L"},
        {test:"Platelets",  value:"186", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Comment",    value:"Normocytic anemia — CKD-related EPO deficiency",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ekg: {findings:"Wide complex rhythm 88 bpm. Peaked narrow T-waves V1-V6 (tenting). PR prolongation 240ms. QRS widening 140ms. Sine wave pattern evolving. Borderline P-wave flattening.",
            impression:"1. Hyperkalemia pattern — peaked T-waves, QRS widening, sine wave.\n2. Life-threatening — calcium gluconate IV STAT.\n3. Begin insulin/D50, sodium bicarbonate, kayexalate or patiromer.\n4. Nephrology consult — dialysis likely required."},
    }
  },

  // ── ACUTE CHOLECYSTITIS ───────────────────────────────────────────────────
  "acute-cholecystitis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"14.6",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"13.4",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"40.2",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"224", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Neutrophils",value:"82",  unit:"%",       range:"40-70",    flag:"H"},
      ]},
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL", results:[
        {test:"Total Bilirubin",value:"2.8",unit:"mg/dL",range:"0.1-1.2",flag:"H"},
        {test:"Direct Bilirubin",value:"1.6",unit:"mg/dL",range:"0-0.3",  flag:"H"},
        {test:"Alk Phos",        value:"188",unit:"U/L",  range:"44-147", flag:"H"},
        {test:"ALT",             value:"84", unit:"U/L",  range:"7-56",   flag:"H"},
        {test:"AST",             value:"72", unit:"U/L",  range:"10-40",  flag:"H"},
        {test:"Lipase",          value:"28", unit:"U/L",  range:"<160",   flag:""},
        {test:"BUN",             value:"14", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine",      value:"0.9",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Comment",         value:"Mild transaminitis and bilirubinemia — cholestasis pattern. Lipase normal — not pancreatitis.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      us_abdomen: {findings:"Gallbladder: Distended 5.8 cm width. Multiple gallstones largest 1.2 cm. Sonographic Murphy sign positive. Gallbladder wall thickened 6mm (normal <4mm). Pericholecystic fluid. CBD 4mm (normal). No intrahepatic biliary dilation. Liver normal.",
                   impression:"1. Acute cholecystitis — thickened wall, pericholecystic fluid, positive sonographic Murphy sign.\n2. Cholelithiasis.\n3. No choledocholithiasis on ultrasound.\n4. General surgery consultation."},
    }
  },

  // ── PERICARDITIS ──────────────────────────────────────────────────────────
  "pericarditis-v1": {
    labResults: {
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I", value:"0.12",unit:"ng/mL",range:"<0.04",flag:"H"},
        {test:"Comment",    value:"Mildly elevated — myopericarditis pattern. Not the sharp rise of ACS. Trend Q6h.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"12.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"14.2",unit:"g/dL",   range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"42.8",unit:"%",       range:"40-52",    flag:""},
        {test:"Platelets",  value:"318", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      crp: {group:"INFLAMMATORY MARKERS", results:[
        {test:"CRP", value:"64",unit:"mg/L",range:"<10",flag:"H"},
        {test:"ESR", value:"82",unit:"mm/hr",range:"0-20",flag:"H"},
        {test:"Comment",value:"CRP >3x ULN at presentation = higher recurrence risk. Colchicine reduces recurrence.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"4.1",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"25", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"14", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.9",unit:"mg/dL",range:"0.7-1.3",flag:""},
      ]},
    },
    imgResults: {
      ekg: {findings:"Diffuse ST elevation in multiple leads (I, II, aVF, V3-V6) — saddle-shaped. PR depression in II, V4-V6. Reciprocal PR elevation aVR. No reciprocal ST depression (distinguishes from STEMI). HR 88.",
            impression:"1. Diffuse saddle-shaped ST elevation — classic pericarditis pattern.\n2. PR depression in inferior/lateral leads.\n3. No focal reciprocal ST depression — not STEMI.\n4. Echo to rule out effusion."},
      echo: {findings:"LV: Normal size, normal systolic function EF 60%. RV: Normal. Pericardium: Small-moderate pericardial effusion, max 8mm posterior. No tamponade physiology — no RV collapse, IVC normal.",
             impression:"1. Normal LV systolic function.\n2. Small-moderate pericardial effusion — no tamponade.\n3. Findings consistent with acute pericarditis.\n4. Treatment: NSAIDs + colchicine. Restrict exertion."},
    }
  },

  // ── DVT ───────────────────────────────────────────────────────────────────
  "deep-vein-thrombosis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"8.8", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"13.6",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"40.8",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"242", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",      value:"12.0",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR",     value:"1.0", unit:"",       range:"0.9-1.1",  flag:""},
        {test:"PTT",     value:"30",  unit:"seconds",range:"25-35",    flag:""},
        {test:"D-dimer", value:"3.2", unit:"µg/mL FEU",range:"<0.5",  flag:"H"},
        {test:"Comment", value:"D-dimer elevated — pre-test probability moderate, confirms need for imaging",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"139",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"4.0",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"25", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"12", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.8",unit:"mg/dL",range:"0.6-1.2",flag:""},
      ]},
    },
    imgResults: {
      doppler_le: {findings:"Deep veins: Non-compressible left femoral vein and popliteal vein. Absent flow on Doppler in left femoral vein. Thrombus extends from left common femoral to popliteal vein. Right lower extremity: Normal deep veins, normal Doppler flow.",
                   impression:"1. Acute proximal left lower extremity DVT — left common femoral to popliteal vein.\n2. Proximal DVT: anticoagulation indicated.\n3. Evaluate for PE — patient has pleuritic chest pain."},
    }
  },

  // ── UPPER GI BLEED ────────────────────────────────────────────────────────
  "upper-gi-bleed": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"11.2",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"7.4", unit:"g/dL",   range:"13.5-17.5",flag:"L"},
        {test:"Hematocrit", value:"22.2",unit:"%",       range:"40-52",    flag:"L"},
        {test:"Platelets",  value:"88",  unit:"x10³/µL",range:"150-400",  flag:"L"},
        {test:"MCV",        value:"102", unit:"fL",      range:"80-100",   flag:"H"},
        {test:"Comment",    value:"Macrocytic anemia + thrombocytopenia — cirrhosis pattern (hypersplenism + alcohol effect on bone marrow)",unit:"",range:"",flag:""},
      ]},
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL", results:[
        {test:"Total Bilirubin",  value:"3.6",unit:"mg/dL",range:"0.1-1.2",flag:"H"},
        {test:"Direct Bilirubin", value:"2.1",unit:"mg/dL",range:"0-0.3",  flag:"H"},
        {test:"Alk Phos",         value:"142",unit:"U/L",  range:"44-147", flag:""},
        {test:"ALT",              value:"52", unit:"U/L",  range:"7-56",   flag:"H"},
        {test:"AST",              value:"88", unit:"U/L",  range:"10-40",  flag:"H"},
        {test:"Albumin",          value:"2.4",unit:"g/dL", range:"3.5-5.5",flag:"L"},
        {test:"BUN",              value:"64", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine",       value:"1.2",unit:"mg/dL",range:"0.7-1.3",flag:""},
        {test:"Comment",          value:"BUN:Cr ratio 53 — markedly elevated, classic for UGIB (blood digested as protein load)",unit:"",range:"",flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",     value:"19.8",unit:"seconds",range:"11.0-13.5",flag:"H"},
        {test:"INR",    value:"1.8", unit:"",       range:"0.9-1.1",  flag:"H"},
        {test:"PTT",    value:"52",  unit:"seconds",range:"25-35",    flag:"H"},
        {test:"Comment",value:"Coagulopathy — end-stage liver disease. Fresh frozen plasma for active bleed.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Heart: Normal size. Lungs: Small bilateral pleural effusions. No pulmonary edema. Mild cardiomegaly. Possible ascites on lower lung fields.",
            impression:"1. Small bilateral pleural effusions — hepatic hydrothorax in cirrhosis.\n2. No acute pulmonary process.\n3. Clinical picture consistent with portal hypertension/cirrhosis."},
    }
  },

  // ── THYROID STORM ─────────────────────────────────────────────────────────
  "thyroid-storm": {
    labResults: {
      tsh: {group:"THYROID FUNCTION", results:[
        {test:"TSH",      value:"<0.01",unit:"mIU/L",range:"0.4-4.0",flag:"L"},
        {test:"Free T4",  value:"6.8",  unit:"ng/dL",range:"0.8-1.8",flag:"H"},
        {test:"Free T3",  value:"14.2", unit:"pg/mL",range:"2.3-4.2",flag:"H"},
        {test:"Comment",  value:"Severely suppressed TSH with markedly elevated FT4 and FT3 — thyroid storm. Burch-Wartofsky score >45.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"16.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"11.8",unit:"g/dL",   range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit", value:"35.4",unit:"%",       range:"36-46",    flag:"L"},
        {test:"Platelets",  value:"184", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"136",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"3.2",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"CO2",        value:"20", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"22", unit:"mg/dL",range:"7-20",   flag:"H"},
        {test:"Creatinine", value:"1.1",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",    value:"162",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Calcium",    value:"11.4",unit:"mg/dL",range:"8.5-10.5",flag:"H"},
      ]},
    },
    imgResults: {
      ekg: {findings:"Sinus tachycardia 138 bpm. No atrial fibrillation. No ST changes. No LVH. QTc 410ms.",
            impression:"1. Sinus tachycardia 138 bpm — consistent with thyroid storm.\n2. No atrial fibrillation currently (convert if AFib develops).\n3. Rate control with propranolol."},
    }
  },

  // ── ALCOHOL WITHDRAWAL ────────────────────────────────────────────────────
  "alcohol-withdrawal": {
    labResults: {
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL", results:[
        {test:"Sodium",     value:"132",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",  value:"2.8",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"Chloride",   value:"96", unit:"mEq/L",range:"98-106", flag:"L"},
        {test:"CO2",        value:"20", unit:"mEq/L",range:"23-29",  flag:"L"},
        {test:"BUN",        value:"8",  unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.7",unit:"mg/dL",range:"0.7-1.3",flag:""},
        {test:"ALT",        value:"94", unit:"U/L",  range:"7-56",   flag:"H"},
        {test:"AST",        value:"186",unit:"U/L",  range:"10-40",  flag:"H"},
        {test:"Total Bilirubin",value:"1.8",unit:"mg/dL",range:"0.1-1.2",flag:"H"},
        {test:"Albumin",    value:"2.8",unit:"g/dL", range:"3.5-5.5",flag:"L"},
        {test:"Magnesium",  value:"1.0",unit:"mg/dL",range:"1.7-2.2",flag:"L"},
        {test:"Phosphorus", value:"1.8",unit:"mg/dL",range:"2.5-4.5",flag:"L"},
        {test:"Comment",    value:"AST:ALT ratio >2 — alcoholic hepatitis pattern. Hypomagnesemia predisposes to seizures.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"12.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"11.2",unit:"g/dL",   range:"13.5-17.5",flag:"L"},
        {test:"Hematocrit", value:"33.6",unit:"%",       range:"40-52",    flag:"L"},
        {test:"MCV",        value:"108", unit:"fL",      range:"80-100",   flag:"H"},
        {test:"Platelets",  value:"78",  unit:"x10³/µL",range:"150-400",  flag:"L"},
        {test:"Comment",    value:"Macrocytosis (B12/folate deficiency) + thrombocytopenia (alcohol marrow suppression + hypersplenism)",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No acute intracranial hemorrhage. No subdural hematoma. Mild cortical atrophy diffuse — age-appropriate for stated age. No mass effect. Ventricles normal.",
               impression:"1. No acute intracranial process.\n2. Mild diffuse cortical atrophy.\n3. CT does not exclude Wernicke's encephalopathy — thiamine empirically before glucose."},
    }
  },

  // ── AORTIC DISSECTION ─────────────────────────────────────────────────────
  "acute-aortic-dissection": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"14.2",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"13.4",unit:"g/dL",   range:"13.5-17.5",flag:""},
        {test:"Hematocrit", value:"40.2",unit:"%",       range:"40-52",    flag:""},
        {test:"Platelets",  value:"198", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"4.4",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"23", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"18", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"1.4",unit:"mg/dL",range:"0.7-1.3",flag:"H"},
        {test:"Comment",    value:"Elevated Cr — renal artery involvement possible. Check bilateral arm BP for differential.",unit:"",range:"",flag:""},
      ]},
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I", value:"0.02",unit:"ng/mL",range:"<0.04",flag:""},
        {test:"Comment",    value:"Negative troponin — not primary ACS. Do not give thrombolytics.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ctchest: {findings:"Type A aortic dissection: Intimal flap in ascending aorta starting at aortic root extending to descending thoracic aorta to level of diaphragm. True lumen compressed. Hemopericardium small. Aortic root diameter 5.2 cm. No pleural effusion.",
                impression:"1. STANFORD TYPE A aortic dissection — surgical emergency.\n2. Hemopericardium — tamponade risk.\n3. Cardiothoracic surgery STAT — OR now.\n4. Do NOT anticoagulate. Blood pressure target SBP 100-120 with esmolol/labetalol."},
      cxr: {findings:"Widened mediastinum (>8cm). Aortic knuckle indistinct. No pleural effusion. Tracheal deviation not seen. No pneumothorax.",
            impression:"1. Widened mediastinum — aortic dissection until proven otherwise.\n2. CTA chest STAT."},
    }
  },

  // ── CELLULITIS ────────────────────────────────────────────────────────────
  "cellulitis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"14.8",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin", value:"13.8",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"41.4",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"288", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Neutrophils",value:"82",  unit:"%",       range:"40-70",    flag:"H"},
      ]},
      crp: {group:"INFLAMMATORY MARKERS", results:[
        {test:"CRP", value:"48",unit:"mg/L",range:"<10",flag:"H"},
        {test:"ESR", value:"44",unit:"mm/hr",range:"0-20",flag:"H"},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"138",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"4.0",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"25", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"14", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.9",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",    value:"182",unit:"mg/dL",range:"70-100", flag:"H"},
        {test:"Comment",    value:"Hyperglycemia — poorly controlled DM. Mark borders of cellulitis for progression tracking.",unit:"",range:"",flag:""},
      ]},
      bloodculture: {group:"BLOOD CULTURES", results:[
        {test:"Blood Culture x2", value:"No growth at 24 hrs — final pending",unit:"",range:"",flag:""},
        {test:"Comment",          value:"Bacteremia uncommon in non-purulent cellulitis — cultures not required per IDSA guidelines unless septic",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      xr_ankle: {findings:"Soft tissue swelling right lower extremity. No subcutaneous emphysema. No foreign body. No periosteal reaction. No osteolytic lesion. No fracture.",
                 impression:"1. Soft tissue swelling — cellulitis.\n2. No gas in soft tissues — not necrotizing fasciitis on X-ray.\n3. If concern for NF persists, CT with contrast is more sensitive."},
    }
  },

  // ── MIGRAINE ──────────────────────────────────────────────────────────────
  "migraine": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"7.2", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"12.8",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"38.4",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"248", unit:"x10³/µL",range:"150-400",  flag:""},
        {test:"Comment",    value:"CBC normal — supports benign headache etiology",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"139",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"3.9",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",        value:"24", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"10", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.7",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",    value:"88", unit:"mg/dL",range:"70-100", flag:""},
        {test:"Comment",    value:"Metabolic panel normal. Mild dehydration possible — encourage PO fluids.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No acute intracranial hemorrhage. No mass, mass effect, or midline shift. Gray-white differentiation preserved. Ventricles normal size. No hyperdensity. Sinuses clear.",
               impression:"1. Normal CT head — no acute pathology.\n2. CT does not rule out SAH in early window — LP if thunderclap onset or first/worst headache.\n3. Clinical features consistent with migraine."},
    }
  },

  // ── NEW-ONSET AFIB ────────────────────────────────────────────────────────
  "new-onset-atrial-fibrillation": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",        value:"9.6", unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin", value:"13.4",unit:"g/dL",   range:"12.0-16.0",flag:""},
        {test:"Hematocrit", value:"40.2",unit:"%",       range:"36-46",    flag:""},
        {test:"Platelets",  value:"224", unit:"x10³/µL",range:"150-400",  flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",     value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",  value:"3.4",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"Magnesium",  value:"1.4",unit:"mg/dL",range:"1.7-2.2",flag:"L"},
        {test:"CO2",        value:"26", unit:"mEq/L",range:"23-29",  flag:""},
        {test:"BUN",        value:"14", unit:"mg/dL",range:"7-20",   flag:""},
        {test:"Creatinine", value:"0.9",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",    value:"98", unit:"mg/dL",range:"70-100", flag:""},
        {test:"Comment",    value:"Hypokalemia + hypomagnesemia — precipitants for AFib. Replete before cardioversion.",unit:"",range:"",flag:""},
      ]},
      tsh: {group:"THYROID", results:[
        {test:"TSH",      value:"<0.01",unit:"mIU/L",range:"0.4-4.0",flag:"L"},
        {test:"Free T4",  value:"2.8",  unit:"ng/dL",range:"0.8-1.8",flag:"H"},
        {test:"Comment",  value:"Hyperthyroidism — common precipitant of new AFib. Check Graves' antibodies.",unit:"",range:"",flag:""},
      ]},
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I",value:"0.01",unit:"ng/mL",range:"<0.04",flag:""},
        {test:"Comment",   value:"Negative — no ACS as precipitant",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ekg: {findings:"Irregularly irregular rhythm. No P-waves. Ventricular rate 148 bpm. No delta waves. No ST-T wave changes. QRS 86ms. QTc 420ms. Left axis.",
            impression:"1. Atrial fibrillation with rapid ventricular response — 148 bpm.\n2. No pre-excitation.\n3. Rate control vs. rhythm control decision needed.\n4. Anticoagulation if >48h or duration unknown (TEE/CHA2DS2-VASc)."},
      cxr: {findings:"Heart: Mildly enlarged. Lungs: Clear bilaterally. No pulmonary edema. No effusion. No pneumothorax.",
            impression:"1. Mild cardiomegaly.\n2. No pulmonary congestion.\n3. No acute pulmonary process."},
      echo: {findings:"LV: Normal size, EF 55%. LA: Mildly dilated (4.4 cm). No thrombus in LAA (limited visualization on TTE). Valves: Mild MR. RV: Normal. No pericardial effusion.",
             impression:"1. Normal LV systolic function.\n2. Mildly dilated left atrium — AFib substrate.\n3. No thrombus visualized on TTE — TEE recommended before cardioversion if duration >48h."},
    }
  }
};

// Inject into each case after loadCaseData resolves (handled in virtual-emr.html)
// This file is loaded as a static script resource — no dynamic execution needed here.
