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


/**
 * RDX_ORDER_RUBRICS — Per-case order selectivity rubrics
 */
window.RDX_ORDER_RUBRICS = {

  "stemi-v1": {
    required: ["troponin","ekg","cbc","bmp","pt_inr"],
    recommended: ["echo","cxr","lipid"],
    avoid: ["mribrain","mrilspine","dexa","mammo","ua"],
    teaching: {
      troponin: "Serial troponins are the cornerstone of ACS diagnosis. First draw on arrival, repeat at 3h. Rising pattern confirms MI.",
      ekg: "EKG within 10 minutes of arrival is the first step — ST elevation in contiguous leads defines STEMI and triggers cath lab activation.",
      echo: "Echo evaluates wall motion abnormalities and EF — important for risk stratification and management.",
      cxr: "CXR assesses for pulmonary edema and cardiomegaly — markers of decompensated LV function.",
      lipid: "Lipid panel guides statin intensity post-MI. Draw on admission (levels accurate within 24h of MI).",
      mribrain: "CT/MRI brain not indicated for STEMI without neurologic symptoms.",
    }
  },

  "pe-v1": {
    required: ["cta_pe","troponin","bnp","pt_inr","cbc"],
    recommended: ["ekg","cxr","bmp","doppler_le"],
    avoid: ["mribrain","hba1c","tsh","dexa"],
    teaching: {
      cta_pe: "CTA-PE is the gold standard for PE diagnosis when Wells score is intermediate-high or D-dimer elevated.",
      troponin: "Elevated troponin in PE indicates RV strain — marker of high-risk PE warranting closer monitoring.",
      bnp: "NT-proBNP >600 pg/mL correlates with RV dysfunction and increased mortality in PE.",
      ekg: "S1Q3T3, new RBBB, and sinus tachycardia are classic PE patterns.",
      doppler_le: "Lower extremity Doppler identifies proximal DVT — confirms VTE diagnosis.",
    }
  },

  "dka-v1": {
    required: ["bmp","cbc","ua","hba1c","bloodculture"],
    recommended: ["cxr","ekg","uculture"],
    avoid: ["mribrain","echo","doppler_le","dexa","mammo","lipid"],
    teaching: {
      bmp: "BMP reveals the anion gap, glucose, potassium, and CO2 — all essential to DKA diagnosis. Calculate anion gap immediately.",
      ua: "UA shows glucosuria and ketonuria — confirms DKA. Also screens for precipitating UTI.",
      hba1c: "HbA1c establishes baseline glycemic control and guides outpatient management post-discharge.",
      ekg: "Hyperkalemia in DKA causes peaked T-waves — EKG essential before insulin (which will drop K rapidly).",
      cxr: "CXR evaluates for pneumonia as DKA precipitant — even without respiratory symptoms.",
      bloodculture: "Blood cultures if temperature >38.5 or WBC >25 — infection is the most common DKA precipitant.",
    }
  },

  "stroke-v1": {
    required: ["cthead","cbc","bmp","pt_inr","troponin"],
    recommended: ["mribrain","ekg","cxr"],
    avoid: ["dexa","mammo","lipid","ua","hba1c"],
    teaching: {
      cthead: "Non-contrast CT head is the first step — rules out hemorrhagic stroke before tPA can be considered.",
      mribrain: "MRI-DWI is more sensitive for acute ischemic stroke than CT, especially in posterior fossa.",
      pt_inr: "Coagulation studies required before tPA — INR >1.7 is a contraindication.",
      ekg: "EKG screens for AFib — the most common cardiac source of cardioembolic stroke.",
      troponin: "Troponin elevation in stroke suggests demand ischemia from catecholamine surge.",
    }
  },

  "pneumonia": {
    required: ["cbc","bmp","cxr","bloodculture","crp"],
    recommended: ["ua"],
    avoid: ["mribrain","echo","dexa","lipid","tsh"],
    teaching: {
      cxr: "CXR confirms pneumonia and identifies the lobe — guides antibiotic duration and identifies effusions.",
      bloodculture: "Blood cultures x2 before antibiotics in moderate-severe CAP (CURB-65 ≥2).",
      crp: "PCT >0.25 ng/mL supports bacterial etiology. CRP guides antibiotic stewardship.",
      cbc: "Leukocytosis with left shift confirms bacterial infection. Elevated bands suggest severe infection.",
    }
  },

  "septic-shock-urosepsis": {
    required: ["bmp","cbc","bloodculture","uculture","ua"],
    recommended: ["cxr","us_renal","pt_inr"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","hba1c"],
    teaching: {
      bloodculture: "Blood cultures x2 before first antibiotic — Surviving Sepsis Campaign mandates within 1 hour.",
      uculture: "Urine culture with sensitivities guides antibiotic de-escalation in urosepsis.",
      bmp: "Lactate determines sepsis severity — lactate >4 = septic shock, mandatory 30 mL/kg IVF bolus.",
      us_renal: "Renal ultrasound evaluates for hydronephrosis — obstructed urosepsis requires urgent drainage.",
    }
  },

  "meningitis-v1": {
    required: ["cbc","bmp","bloodculture","cthead"],
    recommended: ["crp"],
    avoid: ["echo","doppler_le","dexa","mammo","lipid","tsh"],
    teaching: {
      cthead: "CT head before LP if papilledema, focal neuro deficit, or altered mental status.",
      bloodculture: "Blood cultures before antibiotics. DO NOT delay antibiotics waiting for CT or LP.",
      cbc: "WBC >20 with left shift in bacterial meningitis. Thrombocytopenia suggests DIC.",
    }
  },

  "chf-v1": {
    required: ["bnp","bmp","cbc","cxr","echo","troponin","ekg"],
    recommended: ["pt_inr"],
    avoid: ["bloodculture","ua","mribrain","dexa","lipid","tsh"],
    teaching: {
      bnp: "NT-proBNP >900 pg/mL in acute decompensated CHF. Guides diagnosis and diuresis target.",
      echo: "Echo confirms EF, identifies valvular disease, and pericardial effusion.",
      troponin: "Mild troponin elevation common in decompensated CHF — trend to rule out concurrent ACS.",
      ekg: "EKG screens for atrial fibrillation as CHF precipitant and for ischemic changes.",
      cxr: "CXR shows cardiomegaly, pulmonary edema, effusions — severity of decompensation.",
    }
  },

  "appendicitis-v1": {
    required: ["cbc","bmp","ctabdomen","hcg"],
    recommended: ["crp","ua","us_abdomen"],
    avoid: ["echo","mribrain","dexa","lipid","tsh","bloodculture"],
    teaching: {
      ctabdomen: "CT abdomen/pelvis with contrast is the gold standard for appendicitis (sens/spec >94%).",
      hcg: "Beta-hCG must be drawn in any female of reproductive age with RLQ pain — rule out ectopic.",
      us_abdomen: "Ultrasound first-line in children and pregnancy (avoids radiation).",
      cbc: "WBC >10 adds Alvarado points. Left shift suggests perforation.",
    }
  },

  "hyperkalemia-cardiac": {
    required: ["bmp","cbc","ekg"],
    recommended: ["ua","pt_inr"],
    avoid: ["mribrain","cthead","echo","lipid","tsh","dexa"],
    teaching: {
      ekg: "EKG is the most urgent test — peaked T-waves and QRS widening are life-threatening. Calcium gluconate before any other intervention.",
      bmp: "Repeat K in 1 hour after treatment — confirm response to insulin/D50 and monitor for rebound.",
    }
  },

  "acute-cholecystitis": {
    required: ["cbc","cmp","us_abdomen"],
    recommended: ["lipase","ua"],
    avoid: ["mribrain","echo","dexa","bloodculture","tsh"],
    teaching: {
      us_abdomen: "Ultrasound is first-line — wall thickening, pericholecystic fluid, and positive sonographic Murphy sign are diagnostic.",
      cmp: "LFTs — elevated bilirubin and transaminases suggest choledocholithiasis.",
      lipase: "Lipase differentiates cholecystitis from pancreatitis when epigastric pain dominates.",
    }
  },

  "pericarditis-v1": {
    required: ["troponin","ekg","echo","crp","cbc"],
    recommended: ["bmp","tsh"],
    avoid: ["mribrain","ctabdomen","dexa","lipid","bloodculture"],
    teaching: {
      ekg: "Diffuse saddle-shaped ST elevation with PR depression is pathognomonic.",
      echo: "Essential to rule out pericardial effusion and tamponade — even small effusions warrant monitoring.",
      troponin: "Mildly elevated in myopericarditis — should NOT rise sharply. Serial troponins differentiate from STEMI.",
      crp: "CRP >3x ULN predicts recurrence risk — drives colchicine decision.",
    }
  },

  "deep-vein-thrombosis": {
    required: ["doppler_le","cbc","pt_inr","bmp"],
    recommended: ["cta_pe","ekg"],
    avoid: ["mribrain","cthead","dexa","echo","hba1c","lipid"],
    teaching: {
      doppler_le: "Venous duplex ultrasound is the diagnostic standard — non-compressibility confirms thrombosis.",
      cta_pe: "CTA-PE if pleuritic chest pain, dyspnea, or hypoxia — ~25% of proximal DVT have concurrent PE.",
      pt_inr: "Baseline coags before anticoagulation.",
    }
  },

  "upper-gi-bleed": {
    required: ["cbc","cmp","pt_inr","bmp"],
    recommended: ["bloodculture"],
    avoid: ["dexa","lipid","tsh","doppler_le","mribrain"],
    teaching: {
      cbc: "Hemoglobin on arrival — initial Hgb underestimates loss in acute hemorrhage. Repeat at 4-6h.",
      cmp: "BUN:Cr ratio >20 is classic for UGIB — blood digested as protein load elevates BUN.",
      pt_inr: "Coagulopathy from liver disease or warfarin — guide reversal before endoscopy.",
    }
  },

  "thyroid-storm": {
    required: ["tsh","ft4","cbc","bmp","ekg"],
    recommended: ["bloodculture","cxr"],
    avoid: ["mribrain","echo","dexa","lipid","hba1c","ua"],
    teaching: {
      tsh: "TSH <0.01 with markedly elevated FT4/FT3 — biochemical confirmation. Burch-Wartofsky score uses clinical criteria.",
      ekg: "Rate and rhythm monitoring — propranolol for rate control. AFib in ~10-20%.",
      bloodculture: "Infection is the most common precipitant — culture before empiric antibiotics.",
    }
  },

  "alcohol-withdrawal": {
    required: ["cmp","cbc","cthead"],
    recommended: ["bmp","bloodculture"],
    avoid: ["troponin","echo","doppler_le","dexa","lipid","tsh"],
    teaching: {
      cmp: "Magnesium and phosphorus critical — hypomagnesemia lowers seizure threshold. Thiamine before glucose.",
      cthead: "CT head in first seizure, focal neuro findings, or concerning history — subdural hematoma mimics withdrawal.",
      cbc: "Macrocytosis and thrombocytopenia — pattern of chronic alcohol use.",
    }
  },

  "acute-aortic-dissection": {
    required: ["ctchest","cbc","bmp","troponin"],
    recommended: ["pt_inr","ekg","cxr"],
    avoid: ["mribrain","us_abdomen","echo","dexa","hba1c","lipid"],
    teaching: {
      ctchest: "CTA chest is the gold standard — confirms dissection type, extent, complications. DO NOT give tPA before ruling out dissection.",
      troponin: "Negative troponin argues against primary ACS. Dissection involving coronary ostia can cause positive troponin.",
      cxr: "Widened mediastinum 80% sensitive for aortic dissection — prompts immediate CTA.",
    }
  },

  "cellulitis": {
    required: ["cbc","bmp","crp"],
    recommended: ["bloodculture"],
    avoid: ["troponin","echo","dexa","lipid","tsh","ctabdomen"],
    teaching: {
      cbc: "Leukocytosis confirms systemic infection. Mark borders to track progression.",
      bloodculture: "In immunocompromised or septic presentation — bacteremia in ~2-4% of non-purulent cellulitis.",
      crp: "CRP >50 suggests deeper infection — consider CT to rule out necrotizing fasciitis.",
    }
  },

  "migraine": {
    required: ["cthead","bmp","cbc"],
    recommended: [],
    avoid: ["bloodculture","echo","dexa","lipid","tsh","troponin","bnp"],
    teaching: {
      cthead: "CT head in thunderclap onset or worst headache of life — rule out SAH before attributing to migraine.",
      cbc: "CBC screens for anemia or infection as headache trigger.",
    }
  },

  "new-onset-atrial-fibrillation": {
    required: ["ekg","tsh","bmp","cbc","troponin"],
    recommended: ["echo","cxr","ft4"],
    avoid: ["mribrain","dexa","bloodculture","ua","hba1c"],
    teaching: {
      ekg: "12-lead EKG confirms AFib, evaluates rate, checks for pre-excitation (WPW).",
      tsh: "Hyperthyroidism is a common reversible precipitant — mandatory in all new AFib.",
      troponin: "Screens for ACS as AFib precipitant.",
      echo: "Evaluates structural heart disease, LA size, LAA thrombus — required if cardioversion planned.",
      bmp: "Hypokalemia and hypomagnesemia precipitate AFib — replete before cardioversion.",
    }
  },
};


// ── BATCH 2: Next-tier case results ──────────────────────────────────────────
// SAH, NSTEMI, AKI, COPD, Hypertensive Emergency, Sickle Cell Crisis,
// Acute Pancreatitis, New-Onset Seizure

Object.assign(window.RDX_CASE_RESULTS, {

  "sah-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"12.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"13.8",unit:"g/dL",range:"12.0-16.0",flag:""},
        {test:"Platelets",value:"218",unit:"x10³/µL",range:"150-400",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"135",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",value:"3.6",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",value:"22",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"16",unit:"mg/dL",range:"7-20",flag:""},
        {test:"Creatinine",value:"0.8",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",value:"148",unit:"mg/dL",range:"70-100",flag:"H"},
        {test:"Comment",value:"Hyponatremia early — SIADH develops in 30% of SAH. Monitor closely.",unit:"",range:"",flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",value:"12.2",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR",value:"1.0",unit:"",range:"0.9-1.1",flag:""},
        {test:"Comment",value:"Coags normal — no anticoagulation reversal needed. Avoid anticoagulation/antiplatelet.",unit:"",range:"",flag:""},
      ]},
      troponin: {group:"TROPONIN I", results:[
        {test:"Troponin I",value:"0.08",unit:"ng/mL",range:"<0.04",flag:"H"},
        {test:"Comment",value:"Neurogenic troponin elevation in SAH — catecholamine surge, not ACS. Do not anticoagulate.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"Hyperdense blood in basal cisterns, sylvian fissures bilaterally, and interpeduncular cistern. Blood tracking along tentorium. No hydrocephalus. No intraparenchymal hemorrhage. No midline shift.",
               impression:"1. Subarachnoid hemorrhage — classic basal cistern pattern.
2. No acute hydrocephalus on this scan.
3. LP for xanthochromia if clinical suspicion high and CT negative.
4. Urgent neurosurgery/neurology. CTA head for aneurysm."},
      mribrain: {findings:"FLAIR: hyperintense signal in basal cisterns and sylvian fissures consistent with acute SAH. DWI: no acute ischemic changes. No intraparenchymal hemorrhage. MRA (if acquired): pending read.",
                 impression:"1. Acute subarachnoid hemorrhage on FLAIR.
2. No secondary infarction.
3. Formal MRA/CTA for aneurysm source required."},
    }
  },

  "nstemi-v1": {
    labResults: {
      troponin: {group:"TROPONIN I (HIGH-SENSITIVITY)", results:[
        {test:"hs-Troponin I (0h)",value:"680",unit:"ng/L",range:"<52",flag:"H"},
        {test:"hs-Troponin I (3h)",value:"1,840",unit:"ng/L",range:"<52",flag:"H"},
        {test:"Comment",value:"Rising pattern — NSTEMI. No ST elevation. Cath within 24h if no high-risk features; urgent if hemodynamically unstable.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"9.8",unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin",value:"11.4",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"34.2",unit:"%",range:"36-46",flag:"L"},
        {test:"Platelets",value:"194",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Anemia — common in older women presenting with NSTEMI. Demand ischemia possible.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"139",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"4.1",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",value:"24",unit:"mEq/L",range:"23-29",flag:""},
        {test:"BUN",value:"22",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"1.3",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",value:"162",unit:"mg/dL",range:"70-100",flag:"H"},
      ]},
      lipid: {group:"LIPID PANEL", results:[
        {test:"Total Cholesterol",value:"238",unit:"mg/dL",range:"<200",flag:"H"},
        {test:"LDL (calc)",value:"158",unit:"mg/dL",range:"<70 in ACS",flag:"H"},
        {test:"HDL",value:"42",unit:"mg/dL",range:">50 (F)",flag:"L"},
        {test:"Triglycerides",value:"192",unit:"mg/dL",range:"<150",flag:"H"},
        {test:"Comment",value:"High-intensity statin immediately (atorvastatin 80mg). LDL target <70 in ACS.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ekg: {findings:"ST depression 1-1.5mm leads V4-V6, I, aVL. T-wave inversions V4-V6. HR 88, normal axis. No ST elevation. No prior for comparison.",
            impression:"1. ST depression and T-wave inversions lateral leads — NSTEMI pattern.
2. No ST elevation — not STEMI criteria.
3. Serial EKGs q30min. Aspirin + heparin. Cardiology for cath timing."},
      echo: {findings:"LV: mildly reduced EF 45-50%. Anterolateral wall hypokinesis. RV: normal. Valves: mild MR. No effusion.",
             impression:"1. Mildly reduced EF 45-50% with anterolateral wall motion abnormality.
2. Consistent with demand ischemia or NSTEMI territory.
3. Cardiology — catheterization indicated."},
    }
  },

  "aki": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"136",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"5.6",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"CO2",value:"16",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"68",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"4.2",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",value:"118",unit:"mg/dL",range:"70-100",flag:"H"},
        {test:"Anion Gap",value:"18",unit:"mEq/L",range:"8-12",flag:"H"},
        {test:"Comment",value:"BUN:Cr 16 — intrinsic/postrenal AKI likely. FENa needed. Check urine sediment.",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"Color",value:"Brown/tea",unit:"",range:"Yellow",flag:"H"},
        {test:"Protein",value:"2+",unit:"",range:"Negative",flag:"H"},
        {test:"RBC",value:">50",unit:"/hpf",range:"0-3",flag:"H"},
        {test:"WBC",value:"8-12",unit:"/hpf",range:"0-5",flag:"H"},
        {test:"Casts",value:"Muddy brown granular casts",unit:"",range:"None",flag:"H"},
        {test:"Comment",value:"Muddy brown granular casts = ATN. Brown urine + heavy proteinuria = consider myoglobinuria/rhabdo.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"14.2",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"11.0",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"33.0",unit:"%",range:"36-46",flag:"L"},
        {test:"Platelets",value:"168",unit:"x10³/µL",range:"150-400",flag:""},
      ]},
    },
    imgResults: {
      us_renal: {findings:"Right kidney 9.8 cm, increased echogenicity, no hydronephrosis, no calculus. Left kidney 9.6 cm, increased echogenicity, no obstruction. Bladder: small volume, no mass. No perinephric fluid.",
                 impression:"1. Bilateral increased renal echogenicity — consistent with medical renal disease (ATN, GN).
2. No hydronephrosis — postrenal obstruction less likely.
3. Nephrology consult."},
    }
  },

  "copd-v1": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"13.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"16.8",unit:"g/dL",range:"13.5-17.5",flag:"H"},
        {test:"Hematocrit",value:"50.4",unit:"%",range:"40-52",flag:""},
        {test:"Platelets",value:"228",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Polycythemia secondary to chronic hypoxia — compensatory erythropoiesis.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"138",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"3.4",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"CO2",value:"34",unit:"mEq/L",range:"23-29",flag:"H"},
        {test:"BUN",value:"18",unit:"mg/dL",range:"7-20",flag:""},
        {test:"Creatinine",value:"1.1",unit:"mg/dL",range:"0.7-1.3",flag:""},
        {test:"Comment",value:"Elevated CO2 = chronic CO2 retention (compensated respiratory acidosis). Do not over-oxygenate — hypoxic drive.",unit:"",range:"",flag:""},
      ]},
      abg: {group:"ARTERIAL BLOOD GAS", results:[
        {test:"pH",value:"7.32",unit:"",range:"7.35-7.45",flag:"L"},
        {test:"pCO2",value:"68",unit:"mmHg",range:"35-45",flag:"H"},
        {test:"pO2",value:"52",unit:"mmHg",range:"80-100",flag:"L"},
        {test:"HCO3",value:"34",unit:"mEq/L",range:"22-26",flag:"H"},
        {test:"SaO2",value:"84%",unit:"",range:">95%",flag:"L"},
        {test:"Comment",value:"Acute-on-chronic respiratory acidosis. pCO2 baseline likely ~55 from chronic retention. NIPPV if not improving.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Hyperinflation. Flattened hemidiaphragms. Increased AP diameter (barrel chest configuration). Increased lucency bilateral lower lobes. Peribronchial cuffing. No consolidation. No pneumothorax. No effusion.",
            impression:"1. Severe hyperinflation consistent with advanced COPD/emphysema.
2. No acute pneumonia or pneumothorax on this film.
3. Consider CT chest if concern for pneumothorax or infection not seen on plain film."},
    }
  },

  "htn-emergency": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"138",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"3.2",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"CO2",value:"22",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"32",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"2.8",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",value:"124",unit:"mg/dL",range:"70-100",flag:"H"},
        {test:"Comment",value:"Hypertensive nephropathy with AKI. Target SBP reduction 10-25% in first hour — not to normal.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"9.6",unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin",value:"10.8",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"32.4",unit:"%",range:"36-46",flag:"L"},
        {test:"Schistocytes",value:"Present",unit:"",range:"Absent",flag:"H"},
        {test:"Comment",value:"Microangiopathic hemolytic anemia — schistocytes suggest TMA/hypertensive crisis.",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"Protein",value:"3+",unit:"",range:"Negative",flag:"H"},
        {test:"RBC",value:"10-20",unit:"/hpf",range:"0-3",flag:"H"},
        {test:"Casts",value:"RBC casts present",unit:"",range:"None",flag:"H"},
        {test:"Comment",value:"RBC casts = glomerular injury from malignant HTN. Nephrology urgent.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No acute intracranial hemorrhage. No mass effect. Periventricular white matter hypodensities — chronic small vessel ischemic changes. No acute ischemia.",
               impression:"1. No acute intracranial hemorrhage.
2. Chronic hypertensive white matter changes.
3. Hypertensive emergency without ICH — IV labetalol or nicardipine. Target 10-25% BP reduction in 1h."},
      ekg: {findings:"LV hypertrophy by voltage (SV1+RV5 >35mm). ST depression lateral leads. HR 84 regular. No acute ischemic changes. QTc 440ms.",
            impression:"1. LVH pattern — chronic hypertension effect.
2. Lateral ST depression — strain pattern vs ischemia.
3. Serial EKGs if concern for ACS."},
    }
  },

  "sickle-cell-crisis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"16.8",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"6.4",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"19.2",unit:"%",range:"36-46",flag:"L"},
        {test:"MCV",value:"88",unit:"fL",range:"80-100",flag:""},
        {test:"Reticulocytes",value:"8.2",unit:"%",range:"0.5-1.5",flag:"H"},
        {test:"Comment",value:"Baseline Hgb typically 6-9 in SCD. Reticulocytosis confirms compensated hemolysis. Check baseline for comparison.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"137",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"4.4",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",value:"20",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"24",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"1.4",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Bilirubin",value:"4.8",unit:"mg/dL",range:"0.1-1.2",flag:"H"},
        {test:"LDH",value:"580",unit:"U/L",range:"100-220",flag:"H"},
        {test:"Comment",value:"Elevated LDH + bilirubin = hemolysis. Elevated Cr suggests sickle nephropathy vs dehydration. Aggressive IVF.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"No pulmonary infiltrate. No pleural effusion. Cardiomegaly. Bony changes: vertebral endplate depressions (H-vertebrae pattern) consistent with sickle cell bone changes.",
            impression:"1. No acute chest syndrome on this film.
2. Cardiomegaly — chronic anemia.
3. H-vertebrae — classic sickle cell bony changes.
4. Serial CXR if ACS suspected (may lag clinically)."},
    }
  },

  "acute-pancreatitis": {
    labResults: {
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL", results:[
        {test:"Lipase",value:"1,840",unit:"U/L",range:"<160",flag:"H"},
        {test:"Amylase",value:"624",unit:"U/L",range:"<100",flag:"H"},
        {test:"ALT",value:"88",unit:"U/L",range:"7-56",flag:"H"},
        {test:"AST",value:"72",unit:"U/L",range:"10-40",flag:"H"},
        {test:"Total Bilirubin",value:"2.4",unit:"mg/dL",range:"0.1-1.2",flag:"H"},
        {test:"Alk Phos",value:"164",unit:"U/L",range:"44-147",flag:"H"},
        {test:"Albumin",value:"3.2",unit:"g/dL",range:"3.5-5.5",flag:"L"},
        {test:"BUN",value:"28",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"1.6",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Calcium",value:"7.8",unit:"mg/dL",range:"8.5-10.5",flag:"L"},
        {test:"Glucose",value:"218",unit:"mg/dL",range:"70-100",flag:"H"},
        {test:"Comment",value:"Lipase >3x ULN confirms pancreatitis. Elevated LFTs + bili = gallstone etiology. Low Ca = saponification (severity marker). Ranson + BISAP scoring.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"18.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"15.8",unit:"g/dL",range:"13.5-17.5",flag:""},
        {test:"Hematocrit",value:"47.4",unit:"%",range:"40-52",flag:""},
        {test:"Platelets",value:"284",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Hemoconcentration (Hct >44) = SIRS from third-spacing. Aggressive IVF resuscitation required.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ctabdomen: {findings:"Pancreas: diffusely enlarged, peripancreatic fat stranding extensive, fluid tracking into left anterior pararenal space and lesser sac. No pancreatic necrosis (>30% enhancement). Gallbladder: multiple gallstones, no cholecystitis. CBD 7mm (mildly dilated). No free air.",
                  impression:"1. Acute interstitial pancreatitis — no necrosis. CT Severity Index: 4 (moderate).
2. Cholelithiasis — gallstone pancreatitis likely.
3. Mildly dilated CBD — consider ERCP if jaundice worsens.
4. Aggressive IVF. NPO. Analgesia. ERCP within 24h if cholangitis."},
      us_abdomen: {findings:"Gallbladder: multiple stones, largest 1.4 cm. Positive sonographic Murphy sign. Wall 3mm (normal). CBD 7mm. Pancreas partially visualized — head indistinct, echogenicity increased.",
                   impression:"1. Cholelithiasis — multiple stones.
2. Mildly dilated CBD — choledocholithiasis not excluded on US.
3. Pancreatic head edema consistent with pancreatitis.
4. CT abdomen for full severity assessment."},
    }
  },

  "seizure-first": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"128",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",value:"3.8",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",value:"22",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"10",unit:"mg/dL",range:"7-20",flag:""},
        {test:"Creatinine",value:"0.7",unit:"mg/dL",range:"0.6-1.2",flag:""},
        {test:"Glucose",value:"88",unit:"mg/dL",range:"70-100",flag:""},
        {test:"Comment",value:"Hyponatremia Na 128 — electrolyte seizure. Correct at <0.5 mEq/L/hr. Rapid correction = central pontine myelinolysis.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"8.4",unit:"x10³/µL",range:"4.5-11.0",flag:""},
        {test:"Hemoglobin",value:"13.6",unit:"g/dL",range:"12.0-16.0",flag:""},
        {test:"Platelets",value:"224",unit:"x10³/µL",range:"150-400",flag:""},
      ]},
      anticonvulsant: {group:"DRUG LEVELS", results:[
        {test:"Phenytoin level",value:"4.2",unit:"µg/mL",range:"10-20",flag:"L"},
        {test:"Comment",value:"Subtherapeutic phenytoin — non-compliance vs inadequate dosing. Load IV phenytoin if indicated.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No acute intracranial hemorrhage. No mass or mass effect. No acute infarct. Diffuse cortical atrophy mild. White matter changes mild periventricular — chronic microangiopathy. No encephalomalacia.",
               impression:"1. No acute intracranial process.
2. Mild chronic atrophic changes.
3. Electrolyte etiology most likely (Na 128).
4. MRI brain with/without contrast if focal findings or concern for structural etiology."},
    }
  },
});

// ── BATCH 2: Order Rubrics ────────────────────────────────────────────────────
Object.assign(window.RDX_ORDER_RUBRICS, {

  "sah-v1": {
    required: ["cthead","cbc","bmp","pt_inr","troponin"],
    recommended: ["mribrain","ekg"],
    avoid: ["cta_pe","hba1c","lipid","dexa","ua","tsh"],
    teaching: {
      cthead: "Non-contrast CT head is the first test — 98% sensitive for SAH within 12h. If negative and thunderclap onset, LP for xanthochromia.",
      pt_inr: "Coags required — any coagulopathy needs reversal before LP or neurosurgical intervention.",
      troponin: "Neurogenic troponin elevation in SAH — catecholamine surge injures myocardium. Do NOT anticoagulate based on troponin alone.",
      mribrain: "FLAIR MRI detects SAH missed by CT, especially >12h. Required if CT negative and LP inconclusive.",
    }
  },

  "nstemi-v1": {
    required: ["troponin","ekg","cbc","bmp","pt_inr"],
    recommended: ["echo","cxr","lipid"],
    avoid: ["mribrain","cthead","dexa","ua","hba1c"],
    teaching: {
      troponin: "Serial high-sensitivity troponins at 0h and 3h — delta change >20% over 3h confirms Type 1 MI. Rising pattern = NSTEMI.",
      ekg: "EKG every 30 minutes — ST depression can evolve to elevation (converting NSTEMI to STEMI requiring cath lab activation).",
      lipid: "Draw on admission — accurate within 24h of ACS. High-intensity statin (atorva 80mg) immediately regardless of LDL.",
      echo: "Urgent echo if hemodynamically unstable or new murmur — mechanical complication of MI.",
    }
  },

  "aki": {
    required: ["bmp","cbc","ua","us_renal"],
    recommended: ["pt_inr","uculture"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","ctabdomen"],
    teaching: {
      bmp: "Creatinine, BUN, potassium, and acid-base are essential. BUN:Cr ratio guides prerenal vs intrinsic. Anion gap for acidosis.",
      ua: "Urinalysis with microscopy is the single most important test in AKI — muddy brown casts = ATN, RBC casts = GN, WBC casts = pyelonephritis.",
      us_renal: "Renal ultrasound rules out obstruction — bilateral hydronephrosis is a reversible emergency.",
    }
  },

  "copd-v1": {
    required: ["cbc","bmp","cxr"],
    recommended: ["bloodculture","crp"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","hba1c","ctabdomen"],
    teaching: {
      cxr: "CXR rules out pneumothorax and pneumonia as exacerbation triggers. Hyperinflation confirms COPD but doesn't change acute management.",
      bmp: "CO2 and bicarb assess severity and chronicity. Elevated HCO3 = chronic CO2 retention. ABG if SpO2 <88% or altered mental status.",
      cbc: "Polycythemia suggests chronic hypoxia. Leukocytosis with left shift suggests infectious exacerbation.",
    }
  },

  "htn-emergency": {
    required: ["bmp","cbc","cthead","ua","ekg"],
    recommended: ["cxr","troponin"],
    avoid: ["mribrain","echo","dexa","lipid","hba1c"],
    teaching: {
      cthead: "CT head rules out ICH or acute stroke — determines whether BP can be lowered aggressively or needs careful management.",
      ua: "RBC casts = malignant HTN with glomerular injury. Protein = hypertensive nephropathy. Critical for end-organ assessment.",
      cbc: "Schistocytes on peripheral smear = TMA/MAHA from malignant HTN — nephrology urgent.",
      ekg: "LVH pattern confirms chronic hypertension. New ischemic changes = hypertensive emergency + ACS.",
    }
  },

  "sickle-cell-crisis": {
    required: ["cbc","bmp","cxr"],
    recommended: ["bloodculture","ua"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","ctabdomen"],
    teaching: {
      cbc: "Compare to patient's baseline — Hgb drop >2 from baseline suggests aplastic crisis (parvovirus B19) or splenic sequestration.",
      cxr: "Serial CXR essential — acute chest syndrome can appear 24-72h after vaso-occlusive crisis. New infiltrate = ACS = leading cause of death.",
      bmp: "LDH and bilirubin track hemolysis severity. Creatinine elevation common from sickle nephropathy and dehydration.",
    }
  },

  "acute-pancreatitis": {
    required: ["cmp","cbc","us_abdomen"],
    recommended: ["ctabdomen","lipid"],
    avoid: ["mribrain","echo","dexa","tsh","bloodculture","troponin"],
    teaching: {
      cmp: "Lipase >3x ULN confirms diagnosis. LFTs + bilirubin distinguish gallstone from alcoholic etiology. Low calcium = saponification, severity marker.",
      us_abdomen: "Ultrasound identifies gallstones as etiology in ~40% of pancreatitis. Required in all cases to guide ERCP decision.",
      ctabdomen: "CT not needed initially for diagnosis. Indicated at 48-72h if not improving to grade necrosis and guide management.",
    }
  },

  "seizure-first": {
    required: ["bmp","cbc","cthead"],
    recommended: ["anticonvulsant","ua","bloodculture"],
    avoid: ["echo","dexa","lipid","doppler_le","bnp"],
    teaching: {
      bmp: "Electrolytes are the most common correctable cause — hyponatremia, hypoglycemia, hypocalcemia. Check immediately before empiric antiepileptics.",
      cthead: "CT head in all first seizures — rules out structural cause, hemorrhage, tumor, or abscess.",
      anticonvulsant: "Drug levels if patient on known antiepileptic — subtherapeutic levels are the most common cause of breakthrough seizures.",
    }
  },
});


// ── BATCH 3: Surgical emergencies + critical care + subspecialty ──────────────
Object.assign(window.RDX_CASE_RESULTS, {

  "rhabdomyolysis": {
    labResults: {
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL + CK", results:[
        {test:"CK (Creatine Kinase)",value:"48,200",unit:"U/L",range:"22-198",flag:"H"},
        {test:"Creatinine",value:"3.6",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"BUN",value:"52",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Potassium",value:"6.2",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"Phosphorus",value:"5.8",unit:"mg/dL",range:"2.5-4.5",flag:"H"},
        {test:"Calcium",value:"7.2",unit:"mg/dL",range:"8.5-10.5",flag:"L"},
        {test:"Uric Acid",value:"9.4",unit:"mg/dL",range:"2.4-6.0",flag:"H"},
        {test:"LDH",value:"2,840",unit:"U/L",range:"100-220",flag:"H"},
        {test:"Comment",value:"CK >10,000 = severe rhabdomyolysis. Hyperkalemia + AKI = high mortality risk. Aggressive IVF 1-1.5L/hr.",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"Color",value:"Cola/mahogany brown",unit:"",range:"Yellow",flag:"H"},
        {test:"Dipstick blood",value:"3+",unit:"",range:"Negative",flag:"H"},
        {test:"RBC on microscopy",value:"0-2",unit:"/hpf",range:"0-3",flag:""},
        {test:"Comment",value:"Dipstick positive blood with few RBCs = myoglobinuria (not hematuria). Myoglobin not detected on standard dipstick but cross-reacts with heme.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"18.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"14.8",unit:"g/dL",range:"13.5-17.5",flag:""},
        {test:"Hematocrit",value:"44.4",unit:"%",range:"40-52",flag:""},
        {test:"Platelets",value:"162",unit:"x10³/µL",range:"150-400",flag:""},
      ]},
    },
    imgResults: {
      ekg: {findings:"Tall peaked T-waves in precordial leads. QRS duration 108ms (mild widening). PR interval 210ms. HR 96. No significant ST changes. Sinus rhythm.",
            impression:"1. Hyperkalemia EKG pattern — peaked T-waves and mild QRS widening.
2. K 6.2 — calcium gluconate IV indicated if K >6.5 or EKG changes worsen.
3. Continuous cardiac monitoring. Trend K q2h during IVF."},
    }
  },

  "ards": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"24.8",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"10.4",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"31.2",unit:"%",range:"36-46",flag:"L"},
        {test:"Platelets",value:"62",unit:"x10³/µL",range:"150-400",flag:"L"},
        {test:"Comment",value:"Thrombocytopenia + anemia in ARDS context — DIC or sepsis-associated.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"142",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"4.8",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"CO2",value:"18",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"46",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"2.4",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Lactate",value:"5.2",unit:"mmol/L",range:"0.5-2.2",flag:"H"},
        {test:"Comment",value:"Lactate 5.2 with metabolic acidosis — multi-organ dysfunction (ARDS + AKI). Low tidal volume strategy essential.",unit:"",range:"",flag:""},
      ]},
      abg: {group:"ARTERIAL BLOOD GAS (on FiO2 0.8)", results:[
        {test:"pH",value:"7.24",unit:"",range:"7.35-7.45",flag:"L"},
        {test:"pCO2",value:"42",unit:"mmHg",range:"35-45",flag:""},
        {test:"pO2",value:"58",unit:"mmHg",range:"80-100",flag:"L"},
        {test:"HCO3",value:"17",unit:"mEq/L",range:"22-26",flag:"L"},
        {test:"FiO2",value:"0.80",unit:"",range:"",flag:""},
        {test:"P/F Ratio",value:"73",unit:"",range:">300 normal",flag:"H"},
        {test:"Comment",value:"P/F 73 on FiO2 0.80 = severe ARDS (P/F <100). Low tidal volume 6 mL/kg IBW. PEEP per ARDSnet. Prone positioning if P/F <150.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cxr: {findings:"Bilateral diffuse airspace opacities — ground-glass and consolidative, involving >75% of both lung fields. Air bronchograms. No cardiomegaly. No pleural effusion. Endotracheal tube at carina — repositioned.",
            impression:"1. Bilateral diffuse pulmonary infiltrates — ARDS pattern.
2. ETT tip at carina — pull back 3-4cm.
3. Berlin criteria: bilateral opacities, P/F <100, non-cardiogenic.
4. ARDSnet protocol: Vt 6 mL/kg IBW, PEEP ≥10."},
    }
  },

  "infective-endocarditis": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"16.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"9.8",unit:"g/dL",range:"13.5-17.5",flag:"L"},
        {test:"Hematocrit",value:"29.4",unit:"%",range:"40-52",flag:"L"},
        {test:"Platelets",value:"94",unit:"x10³/µL",range:"150-400",flag:"L"},
        {test:"Comment",value:"Normocytic anemia of chronic infection + thrombocytopenia — immune complex deposition or DIC.",unit:"",range:"",flag:""},
      ]},
      cmp: {group:"COMPREHENSIVE METABOLIC PANEL", results:[
        {test:"BUN",value:"38",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"2.2",unit:"mg/dL",range:"0.7-1.3",flag:"H"},
        {test:"ESR",value:"88",unit:"mm/hr",range:"0-20",flag:"H"},
        {test:"CRP",value:"182",unit:"mg/L",range:"<10",flag:"H"},
        {test:"Comment",value:"Elevated ESR/CRP + renal dysfunction — embolic nephritis (Osler's triad) or immune complex GN. Urine for RBC casts.",unit:"",range:"",flag:""},
      ]},
      bloodculture: {group:"BLOOD CULTURES — PRELIMINARY", results:[
        {test:"BC Set 1 (aerobic)",value:"Gram-positive cocci in clusters",unit:"",range:"",flag:"H"},
        {test:"BC Set 1 (anaerobic)",value:"No growth at 24h",unit:"",range:"",flag:""},
        {test:"BC Set 2 (aerobic)",value:"Gram-positive cocci in clusters",unit:"",range:"",flag:"H"},
        {test:"Suspected organism",value:"S. aureus — MSSA vs MRSA sensitivities pending",unit:"",range:"",flag:""},
        {test:"Comment",value:"S. aureus bacteremia = endocarditis until proven otherwise. Obtain minimum 3 sets, obtain TEE.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      echo: {findings:"Aortic valve: vegetations on non-coronary cusp measuring 1.8cm. Severe aortic regurgitation. LV: mildly dilated, EF 45%. RV: normal. No perivalvular abscess on TTE (TEE required for better sensitivity). No pericardial effusion.",
             impression:"1. Large aortic valve vegetation (1.8cm) — active endocarditis.
2. Severe AR — volume overload on LV.
3. EF 45% — early valve failure.
4. TEE urgently: rule out perivalvular abscess, better vegetation characterization.
5. Cardiothoracic surgery consultation — surgical criteria may be met."},
    }
  },

  "hemorrhagic-stroke": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"14.2",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"14.0",unit:"g/dL",range:"13.5-17.5",flag:""},
        {test:"Hematocrit",value:"42.0",unit:"%",range:"40-52",flag:""},
        {test:"Platelets",value:"188",unit:"x10³/µL",range:"150-400",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"140",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"3.8",unit:"mEq/L",range:"3.5-5.0",flag:""},
        {test:"Glucose",value:"188",unit:"mg/dL",range:"70-100",flag:"H"},
        {test:"Comment",value:"Hyperglycemia in ICH worsens outcomes. Target BG 140-180. Avoid hypoglycemia.",unit:"",range:"",flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",value:"21.4",unit:"seconds",range:"11.0-13.5",flag:"H"},
        {test:"INR",value:"2.4",unit:"",range:"0.9-1.1",flag:"H"},
        {test:"Comment",value:"Supratherapeutic anticoagulation (warfarin/INR 2.4) — reverse immediately with 4-factor PCC + Vitamin K.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"Hyperdense 4.2 x 3.8 x 3.5 cm hemorrhage left basal ganglia with surrounding edema. 8mm leftward midline shift. No subarachnoid extension. Ventricles: mild hydrocephalus right temporal horn. No herniation.",
               impression:"1. Acute intraparenchymal hemorrhage left basal ganglia — 4.2cm.
2. Midline shift 8mm — neurosurgery emergent.
3. Early hydrocephalus — ICP monitoring.
4. Coagulopathy (INR 2.4) — reverse immediately.
5. Avoid SBP >160. Nicardipine infusion."},
    }
  },

  "bowel-obstruction": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"16.8",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"15.4",unit:"g/dL",range:"13.5-17.5",flag:""},
        {test:"Hematocrit",value:"46.2",unit:"%",range:"40-52",flag:""},
        {test:"Platelets",value:"268",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Hemoconcentration (high Hct) from dehydration. Leukocytosis suggests ischemia or closed-loop obstruction.",unit:"",range:"",flag:""},
      ]},
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"133",unit:"mEq/L",range:"136-145",flag:"L"},
        {test:"Potassium",value:"2.8",unit:"mEq/L",range:"3.5-5.0",flag:"L"},
        {test:"CO2",value:"38",unit:"mEq/L",range:"23-29",flag:"H"},
        {test:"BUN",value:"42",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"1.8",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Lactate",value:"3.2",unit:"mmol/L",range:"0.5-2.2",flag:"H"},
        {test:"Comment",value:"Hypokalemic metabolic alkalosis from vomiting. Elevated lactate — mesenteric ischemia or strangulation must be excluded.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      ctabdomen: {findings:"Multiple dilated small bowel loops to 5.8cm diameter. Transition point right lower quadrant — adhesion band. No free air. Mesenteric fat stranding at transition point. Distal bowel decompressed. No free fluid. Stool in colon — partial vs complete obstruction.",
                  impression:"1. Small bowel obstruction at RLQ transition point — adhesion etiology.
2. Fat stranding at transition — ischemia cannot be excluded.
3. General surgery consultation urgently.
4. NG tube decompression, aggressive IVF.
5. Operative if strangulation signs or failure to resolve within 24-48h."},
    }
  },

  "ectopic-pregnancy": {
    labResults: {
      hcg: {group:"SERUM hCG", results:[
        {test:"Quantitative hCG",value:"3,840",unit:"mIU/mL",range:"",flag:""},
        {test:"Comment",value:"hCG 3,840 mIU/mL above discriminatory zone (~1,500-2,000). Normal IUP should be visible on TV-US at this level. No IUP = ectopic until proven otherwise.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"12.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"8.6",unit:"g/dL",range:"12.0-16.0",flag:"L"},
        {test:"Hematocrit",value:"25.8",unit:"%",range:"36-46",flag:"L"},
        {test:"Platelets",value:"288",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Significant anemia with hemodynamic instability — hemoperitoneum from ruptured ectopic.",unit:"",range:"",flag:""},
      ]},
      pt_inr: {group:"COAGULATION", results:[
        {test:"PT",value:"12.8",unit:"seconds",range:"11.0-13.5",flag:""},
        {test:"INR",value:"1.1",unit:"",range:"0.9-1.1",flag:""},
        {test:"Comment",value:"Coags normal — pre-operative clearance. Type and screen urgently.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      us_abdomen: {findings:"Uterus: no intrauterine gestational sac identified. Endometrium 14mm thickened — decidual reaction. Right adnexa: heterogeneous 3.2 x 2.8cm mass with ring of fire vascular flow on Doppler. Free fluid pelvis and Morrison's pouch — moderate hemoperitoneum.",
                   impression:"1. No intrauterine pregnancy.
2. Right adnexal mass with ring-of-fire sign — ectopic pregnancy.
3. Moderate hemoperitoneum — ruptured ectopic until proven otherwise.
4. EMERGENT OBGYN/surgery. Type and cross-match. OR now."},
    }
  },

  "status-epilepticus": {
    labResults: {
      bmp: {group:"BASIC METABOLIC PANEL", results:[
        {test:"Sodium",value:"138",unit:"mEq/L",range:"136-145",flag:""},
        {test:"Potassium",value:"5.4",unit:"mEq/L",range:"3.5-5.0",flag:"H"},
        {test:"CO2",value:"14",unit:"mEq/L",range:"23-29",flag:"L"},
        {test:"BUN",value:"22",unit:"mg/dL",range:"7-20",flag:"H"},
        {test:"Creatinine",value:"2.1",unit:"mg/dL",range:"0.6-1.2",flag:"H"},
        {test:"Glucose",value:"64",unit:"mg/dL",range:"70-100",flag:"L"},
        {test:"Lactate",value:"8.4",unit:"mmol/L",range:"0.5-2.2",flag:"H"},
        {test:"Comment",value:"Hypoglycemia — treat immediately (D50W) before any other intervention. Lactate 8.4 = extreme metabolic stress from prolonged seizure.",unit:"",range:"",flag:""},
      ]},
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"22.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"13.2",unit:"g/dL",range:"12.0-16.0",flag:""},
        {test:"Platelets",value:"188",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Leukocytosis from prolonged seizure / stress response — does not confirm CNS infection without other signs.",unit:"",range:"",flag:""},
      ]},
      anticonvulsant: {group:"DRUG LEVELS", results:[
        {test:"Phenytoin level",value:"2.1",unit:"µg/mL",range:"10-20",flag:"L"},
        {test:"Comment",value:"Critically subtherapeutic — IV fosphenytoin load or levetiracetam IV immediately after benzodiazepine.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      cthead: {findings:"No acute intracranial hemorrhage. No mass effect or midline shift. No acute infarct. No focal lesion. Diffuse cortical edema mild — post-ictal. Ventricles normal.",
               impression:"1. No acute structural cause for status epilepticus on CT.
2. Subtherapeutic phenytoin is likely precipitant.
3. MRI with contrast after stabilization to rule out encephalitis or subtle cortical lesion."},
    }
  },

  "testicular-torsion": {
    labResults: {
      cbc: {group:"CBC WITH DIFFERENTIAL", results:[
        {test:"WBC",value:"12.4",unit:"x10³/µL",range:"4.5-11.0",flag:"H"},
        {test:"Hemoglobin",value:"15.2",unit:"g/dL",range:"13.5-17.5",flag:""},
        {test:"Platelets",value:"244",unit:"x10³/µL",range:"150-400",flag:""},
        {test:"Comment",value:"Mild leukocytosis — reactive to ischemia/pain, not infection. Do NOT delay scrotal Doppler for CBC result.",unit:"",range:"",flag:""},
      ]},
      ua: {group:"URINALYSIS", results:[
        {test:"WBC",value:"0-2",unit:"/hpf",range:"0-5",flag:""},
        {test:"RBC",value:"0-2",unit:"/hpf",range:"0-3",flag:""},
        {test:"Nitrite",value:"Negative",unit:"",range:"Negative",flag:""},
        {test:"Comment",value:"Normal UA — does not support epididymitis/orchitis. Testicular torsion more likely. Doppler US urgently.",unit:"",range:"",flag:""},
      ]},
    },
    imgResults: {
      doppler_le: {findings:"",impression:""},
      us_abdomen: {findings:"Left testis: 4.2 x 3.1 x 2.8cm. No blood flow on color Doppler. Heterogeneous echotexture — ischemia. Epididymis: enlarged, no flow. Right testis: normal size, normal Doppler flow bilaterally. No hydrocele. Torted cord sign (whirlpool sign) at left internal ring.",
                   impression:"1. Absent Doppler flow left testis — testicular torsion.
2. Whirlpool sign confirms torsion at cord level.
3. EMERGENT urology. OR within 6h of onset for >90% salvage rate.
4. Manual detorsion attempt while awaiting OR."},
    }
  },
});

// ── BATCH 3: Order Rubrics ────────────────────────────────────────────────────
Object.assign(window.RDX_ORDER_RUBRICS, {

  "rhabdomyolysis": {
    required: ["bmp","cbc","ua","ekg"],
    recommended: ["uculture"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","ctabdomen"],
    teaching: {
      bmp: "CK is the key diagnostic test — must order separately or with CMP. CK >10,000 = severe. Follow q6h to track peak and resolution.",
      ua: "Dipstick blood with few RBCs = myoglobinuria (pathognomonic). Cola-brown urine is the clinical clue.",
      ekg: "Hyperkalemia from rhabdomyolysis is rapid and severe — EKG immediately for peaked T-waves, QRS widening.",
    }
  },

  "ards": {
    required: ["cbc","bmp","cxr","bloodculture"],
    recommended: ["pt_inr","crp"],
    avoid: ["dexa","lipid","tsh","hba1c","doppler_le"],
    teaching: {
      cxr: "Bilateral infiltrates on CXR are required for Berlin ARDS definition. CT is more sensitive but not needed for diagnosis.",
      bmp: "ABG (via BMP or standalone) defines P/F ratio — the severity criterion. Lactate tracks organ failure.",
      bloodculture: "Identify and treat the precipitating infection — sepsis is the most common ARDS cause.",
    }
  },

  "infective-endocarditis": {
    required: ["bloodculture","cbc","cmp","echo"],
    recommended: ["pt_inr","ekg","cthead"],
    avoid: ["dexa","lipid","tsh","hba1c","doppler_le","ua"],
    teaching: {
      bloodculture: "Minimum 3 sets from different sites before antibiotics — positive in >90% of IE. Never give antibiotics before cultures.",
      echo: "TTE first, TEE within 24h for all S. aureus bacteremia or if TTE non-diagnostic. Vegetation size, perivalvular abscess, valve function.",
      cmp: "Renal function tracks embolic nephritis (immune complex GN). Elevated creatinine = worse prognosis.",
    }
  },

  "hemorrhagic-stroke": {
    required: ["cthead","cbc","pt_inr","bmp"],
    recommended: ["ekg"],
    avoid: ["mribrain","cta_pe","dexa","lipid","tsh","hba1c"],
    teaching: {
      cthead: "Non-contrast CT head is the FIRST test — hyperdense blood identified immediately. MRI more sensitive for small bleeds but takes longer.",
      pt_inr: "Anticoagulation reversal is time-critical — INR >1.5 → 4-factor PCC + vitamin K. Do not wait for lab results if anticoagulated.",
    }
  },

  "bowel-obstruction": {
    required: ["cbc","bmp","ctabdomen"],
    recommended: ["pt_inr"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","bloodculture"],
    teaching: {
      ctabdomen: "CT abdomen/pelvis with contrast identifies transition point, grade, and strangulation signs (fat stranding, pneumatosis). Plain films miss 20-40% of SBOs.",
      bmp: "Lactate identifies ischemia/strangulation — level >2 = surgical urgency. Hypokalemia from vomiting requires aggressive replacement.",
    }
  },

  "ectopic-pregnancy": {
    required: ["hcg","cbc","pt_inr","us_abdomen"],
    recommended: ["bmp"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","ctabdomen","bloodculture"],
    teaching: {
      hcg: "Quantitative hCG above discriminatory zone (>1,500-2,000 mIU/mL) with no IUP on TV-US = ectopic until proven otherwise.",
      us_abdomen: "Transvaginal ultrasound (TV-US) is mandatory in any reproductive-age woman with abdominal pain and positive hCG — must rule out ectopic.",
      cbc: "Type and screen simultaneously — ruptured ectopic requires immediate OR and blood products.",
    }
  },

  "status-epilepticus": {
    required: ["bmp","cbc","cthead","anticonvulsant"],
    recommended: ["bloodculture","ua"],
    avoid: ["echo","dexa","lipid","doppler_le","bnp"],
    teaching: {
      bmp: "Glucose FIRST — hypoglycemia causes seizures and is immediately reversible. Check point-of-care immediately.",
      anticonvulsant: "Subtherapeutic drug levels are the most common cause of status epilepticus in known epileptics.",
      cthead: "CT head after stabilization — rule out structural cause, hemorrhage, abscess. Do not delay treatment for CT.",
    }
  },

  "testicular-torsion": {
    required: ["us_abdomen","cbc","ua"],
    recommended: [],
    avoid: ["mribrain","echo","dexa","lipid","tsh","ctabdomen","bloodculture"],
    teaching: {
      us_abdomen: "Scrotal Doppler ultrasound (ordered as US abdomen/pelvis or scrotal US) is the gold standard — absent flow confirms torsion. Do NOT delay for labs.",
      ua: "Normal UA argues against epididymitis/orchitis. Presence of WBCs would suggest infectious etiology.",
    }
  },
});

// Inject into each case after loadCaseData resolves (handled in virtual-emr.html)
// This file is loaded as a static script resource — no dynamic execution needed here.

/**
 * RDX_ORDER_RUBRICS — Per-case order selectivity rubrics
 *
 * Each case defines:
 *   required:    tests students MUST order (scored)
 *   recommended: tests that are appropriate but not mandatory
 *   avoid:       tests inappropriate for this presentation
 *   teaching:    per-test teaching points for feedback
 *
 * Used by rdx-emr-enhancements.js to score order selectivity
 * and provide feedback after students submit their workup.
 */
window.RDX_ORDER_RUBRICS = {

  "stemi-v1": {
    required: ["troponin","ekg","cbc","bmp","pt_inr"],
    recommended: ["echo","cxr","lipid"],
    avoid: ["mribrain","mrilspine","dexa","mammo","ua"],
    teaching: {
      troponin: "Serial troponins are the cornerstone of ACS diagnosis. First draw on arrival, repeat at 3h. Rising pattern confirms MI.",
      ekg: "EKG within 10 minutes of arrival is the first step — ST elevation in contiguous leads defines STEMI and triggers cath lab activation.",
      echo: "Echo evaluates wall motion abnormalities and EF — important for risk stratification and management.",
      cxr: "CXR assesses for pulmonary edema and cardiomegaly — markers of decompensated LV function.",
      lipid: "Lipid panel guides statin intensity post-MI. Draw on admission (levels accurate within 24h of MI).",
      mribrain: "CT/MRI brain not indicated for STEMI without neurologic symptoms.",
    }
  },

  "pe-v1": {
    required: ["cta_pe","troponin","bnp","pt_inr","cbc"],
    recommended: ["ekg","cxr","bmp","doppler_le"],
    avoid: ["mribrain","hba1c","tsh","dexa"],
    teaching: {
      cta_pe: "CTA-PE is the gold standard for PE diagnosis when Wells score is intermediate-high or D-dimer elevated. Bilateral emboli require risk stratification.",
      troponin: "Elevated troponin in PE indicates RV strain and myocyte injury — marker of high-risk PE warranting closer monitoring.",
      bnp: "NT-proBNP >600 pg/mL correlates with RV dysfunction and increased mortality risk in PE.",
      ekg: "S1Q3T3, new RBBB, and sinus tachycardia are classic PE patterns — not sensitive but support the diagnosis.",
      doppler_le: "Lower extremity Doppler identifies proximal DVT — confirms VTE diagnosis and may change anticoagulation duration.",
    }
  },

  "dka-v1": {
    required: ["bmp","cbc","ua","hba1c","bloodculture"],
    recommended: ["cxr","ekg","uculture"],
    avoid: ["mribrain","echo","doppler_le","dexa","mammo","lipid"],
    teaching: {
      bmp: "BMP reveals the anion gap, glucose, potassium, and CO2 — all essential to DKA diagnosis and management. Calculate anion gap immediately.",
      ua: "UA shows glucosuria and ketonuria — confirms DKA. Also screens for precipitating UTI.",
      hba1c: "HbA1c establishes baseline glycemic control and guides outpatient management post-discharge.",
      ekg: "Hyperkalemia in DKA causes peaked T-waves — EKG is essential before insulin (which will drop K rapidly).",
      cxr: "CXR evaluates for pneumonia as DKA precipitant — even without respiratory symptoms.",
      bloodculture: "Blood cultures if temperature >38.5 or WBC >25 — infection is the most common DKA precipitant.",
    }
  },

  "stroke-v1": {
    required: ["cthead","cbc","bmp","pt_inr","troponin"],
    recommended: ["mribrain","ekg","cxr"],
    avoid: ["dexa","mammo","lipid","ua","hba1c"],
    teaching: {
      cthead: "Non-contrast CT head is the first step — rules out hemorrhagic stroke before tPA can be considered. Done within minutes of arrival.",
      mribrain: "MRI-DWI is more sensitive for acute ischemic stroke than CT, especially in posterior fossa — but CT is faster in the acute window.",
      pt_inr: "Coagulation studies required before tPA — INR >1.7 is a contraindication.",
      ekg: "EKG screens for AFib — the most common cardiac source of cardioembolic stroke.",
      troponin: "Troponin elevation in stroke suggests demand ischemia from catecholamine surge — also screens for ACS as precipitant.",
    }
  },

  "pneumonia": {
    required: ["cbc","bmp","cxr","bloodculture","crp"],
    recommended: ["ua","procalcitonin"],
    avoid: ["mribrain","echo","dexa","lipid","tsh"],
    teaching: {
      cxr: "CXR confirms pneumonia and identifies the lobe — guides antibiotic duration and identifies effusions requiring drainage.",
      bloodculture: "Blood cultures x2 before antibiotics in moderate-severe CAP (CURB-65 ≥2). Positive in ~10% — guides targeted therapy.",
      procalcitonin: "PCT >0.25 ng/mL supports bacterial etiology. PCT-guided therapy reduces antibiotic overuse.",
      cbc: "Leukocytosis with left shift confirms bacterial infection. Elevated bands suggest more severe infection.",
    }
  },

  "septic-shock-urosepsis": {
    required: ["bmp","cbc","bloodculture","uculture","ua"],
    recommended: ["cxr","us_renal","pt_inr"],
    avoid: ["mribrain","echo","dexa","lipid","tsh","hba1c"],
    teaching: {
      bloodculture: "Blood cultures x2 before first antibiotic — Surviving Sepsis Campaign mandates within 1 hour. Positive in ~30% of urosepsis.",
      uculture: "Urine culture with sensitivities guides antibiotic de-escalation in urosepsis.",
      bmp: "Lactate in BMP panel (or standalone) determines sepsis severity — lactate >4 = septic shock, mandatory 30 mL/kg IVF bolus.",
      us_renal: "Renal ultrasound evaluates for hydronephrosis — obstructed urosepsis requires urgent urology consult for drainage.",
    }
  },

  "meningitis-v1": {
    required: ["cbc","bmp","bloodculture","cthead"],
    recommended: ["crp"],
    avoid: ["echo","doppler_le","dexa","mammo","lipid","tsh"],
    teaching: {
      cthead: "CT head before LP if papilledema, focal neuro deficit, immunocompromised, or altered mental status — rules out mass lesion to prevent herniation.",
      bloodculture: "Blood cultures before antibiotics if LP will be delayed. DO NOT delay antibiotics waiting for CT or LP in suspected bacterial meningitis.",
      cbc: "WBC >20 with left shift in bacterial meningitis. Thrombocytopenia suggests DIC from sepsis.",
    }
  },

  "chf-v1": {
    required: ["bnp","bmp","cbc","cxr","echo","troponin","ekg"],
    recommended: ["pt_inr"],
    avoid: ["bloodculture","ua","mribrain","dexa","lipid","tsh"],
    teaching: {
      bnp: "NT-proBNP >900 pg/mL in acute decompensated CHF. Levels guide diagnosis, severity, and guide diuresis target.",
      echo: "Echo confirms EF, identifies diastolic vs systolic dysfunction, valvular disease, and effusion.",
      troponin: "Mild troponin elevation common in decompensated CHF (demand ischemia) — trend to rule out concurrent ACS.",
      ekg: "EKG screens for atrial fibrillation as CHF precipitant and for ischemic changes.",
      cxr: "CXR shows cardiomegaly, pulmonary edema, effusions — severity correlates with degree of decompensation.",
    }
  },

  "appendicitis-v1": {
    required: ["cbc","bmp","ctabdomen","hcg"],
    recommended: ["crp","ua","us_abdomen"],
    avoid: ["echo","mribrain","dexa","lipid","tsh","bloodculture"],
    teaching: {
      ctabdomen: "CT abdomen/pelvis with contrast is the gold standard for appendicitis diagnosis (sens/spec >94%). Identifies perforation and alternative diagnoses.",
      hcg: "Beta-hCG must be drawn in any female of reproductive age with RLQ pain — ectopic pregnancy is life-threatening and mimics appendicitis.",
      us_abdomen: "Ultrasound is first-line in children and pregnant women (avoids radiation) — non-diagnostic in 30% of adults.",
      cbc: "WBC >10 adds 2 Alvarado points. Left shift suggests perforation.",
    }
  },

  "hyperkalemia-cardiac": {
    required: ["bmp","cbc","ekg"],
    recommended: ["ua","pt_inr"],
    avoid: ["mribrain","cthead","echo","lipid","tsh","dexa"],
    teaching: {
      ekg: "EKG is the most urgent test in hyperkalemia — peaked T-waves, QRS widening, sine wave pattern are life-threatening. Calcium gluconate before any other intervention if K >6.5.",
      bmp: "Full BMP with repeat K in 1 hour after treatment — confirm response to insulin/D50 and monitor for rebound.",
    }
  },

  "acute-cholecystitis": {
    required: ["cbc","cmp","us_abdomen"],
    recommended: ["lipase","ua"],
    avoid: ["mribrain","echo","dexa","bloodculture","tsh"],
    teaching: {
      us_abdomen: "Ultrasound is first-line for cholecystitis — gallbladder wall thickening, pericholecystic fluid, and positive sonographic Murphy sign are diagnostic.",
      cmp: "Liver function tests — elevated bilirubin and transaminases suggest choledocholithiasis or Mirizzi syndrome.",
      lipase: "Lipase differentiates cholecystitis from pancreatitis — critical if epigastric pain dominates.",
    }
  },

  "pericarditis-v1": {
    required: ["troponin","ekg","echo","crp","cbc"],
    recommended: ["bmp","tsh"],
    avoid: ["mribrain","ctabdomen","dexa","lipid","bloodculture"],
    teaching: {
      ekg: "Diffuse saddle-shaped ST elevation with PR depression is pathognomonic — look in multiple leads. Absence of reciprocal changes distinguishes from STEMI.",
      echo: "Echo essential to rule out pericardial effusion and tamponade — even small effusions warrant monitoring.",
      troponin: "Mildly elevated in myopericarditis — should NOT rise sharply like STEMI. Serial troponins differentiate.",
      crp: "CRP >3x ULN predicts recurrence risk — drives colchicine decision and duration.",
    }
  },

  "deep-vein-thrombosis": {
    required: ["doppler_le","cbc","pt_inr","bmp"],
    recommended: ["cta_pe","ekg"],
    avoid: ["mribrain","cthead","dexa","echo","hba1c","lipid"],
    teaching: {
      doppler_le: "Venous duplex ultrasound is the diagnostic standard for DVT — non-compressibility and absence of flow confirm thrombosis.",
      cta_pe: "CTA-PE if pleuritic chest pain, dyspnea, or hypoxia — ~25% of proximal DVT have concurrent PE.",
      pt_inr: "Baseline coags before anticoagulation — guides choice between heparin bridging and direct oral anticoagulants.",
    }
  },

  "upper-gi-bleed": {
    required: ["cbc","cmp","pt_inr","bmp"],
    recommended: ["bloodculture"],
    avoid: ["dexa","lipid","tsh","doppler_le","mribrain"],
    teaching: {
      cbc: "Hemoglobin on arrival — but initial Hgb underestimates blood loss in acute hemorrhage due to hemoconcentration. Repeat at 4-6h.",
      cmp: "BUN:Cr ratio >20 is classic for UGIB — blood digested as protein load elevates BUN selectively.",
      pt_inr: "Coagulopathy from liver disease or warfarin — guide reversal strategy before endoscopy.",
    }
  },

  "thyroid-storm": {
    required: ["tsh","ft4","cbc","bmp","ekg"],
    recommended: ["bloodculture","cxr"],
    avoid: ["mribrain","echo","dexa","lipid","hba1c","ua"],
    teaching: {
      tsh: "TSH <0.01 with markedly elevated FT4/FT3 — biochemical confirmation of thyrotoxicosis. Burch-Wartofsky score uses clinical criteria.",
      ekg: "Rate and rhythm monitoring — sinus tachycardia most common, AFib in ~10-20%. Propranolol for rate control.",
      bloodculture: "Infection is the most common precipitant of thyroid storm — culture before empiric antibiotics.",
    }
  },

  "alcohol-withdrawal": {
    required: ["cmp","cbc","cthead"],
    recommended: ["bmp","bloodculture"],
    avoid: ["troponin","echo","doppler_le","dexa","lipid","tsh"],
    teaching: {
      cmp: "Magnesium and phosphorus critical — hypomagnesemia lowers seizure threshold. Replace before giving glucose (which drops Mg further).",
      cthead: "CT head in alcohol withdrawal with first seizure, focal neuro findings, or concerning history — subdural hematoma mimics withdrawal.",
      cbc: "Macrocytosis (B12/folate deficiency) and thrombocytopenia (hypersplenism + marrow suppression) — pattern of chronic alcohol use.",
    }
  },

  "acute-aortic-dissection": {
    required: ["ctchest","cbc","bmp","troponin"],
    recommended: ["pt_inr","ekg","cxr"],
    avoid: ["mribrain","us_abdomen","echo","dexa","hba1c","lipid"],
    teaching: {
      ctchest: "CTA chest is the gold standard — confirms dissection type (Stanford A vs B), extent, and complications. DO NOT give tPA before ruling out dissection.",
      troponin: "Negative troponin argues against primary ACS. Dissection involving coronary ostia can cause positive troponin — do not give tPA.",
      cxr: "Widened mediastinum on CXR is 80% sensitive for aortic dissection — must prompt immediate CTA.",
      ekg: "EKG screens for AMI (can coexist with Type A dissection involving RCA ostium).",
    }
  },

  "cellulitis": {
    required: ["cbc","bmp","crp"],
    recommended: ["bloodculture"],
    avoid: ["troponin","echo","dexa","lipid","tsh","ctabdomen"],
    teaching: {
      cbc: "Leukocytosis confirms systemic infection. Mark skin borders with pen to track progression over 24-48h.",
      bloodculture: "Blood cultures in immunocompromised, diabetic with LE cellulitis, or septic presentation — bacteremia in ~2-4% of non-purulent cellulitis.",
      crp: "CRP >50 suggests deeper infection — necrotizing fasciitis must be ruled out by CT if concern exists.",
    }
  },

  "migraine": {
    required: ["cthead","bmp","cbc"],
    recommended: [],
    avoid: ["bloodculture","echo","dexa","lipid","tsh","troponin","bnp"],
    teaching: {
      cthead: "CT head in thunderclap onset, worst headache of life, or first severe headache — rule out SAH before attributing to migraine.",
      cbc: "CBC screens for anemia or infection as headache trigger in atypical presentations.",
    }
  },

  "new-onset-atrial-fibrillation": {
    required: ["ekg","tsh","bmp","cbc","troponin"],
    recommended: ["echo","cxr","ft4"],
    avoid: ["mribrain","dexa","bloodculture","ua","hba1c"],
    teaching: {
      ekg: "12-lead EKG confirms AFib, evaluates rate, and checks for pre-excitation (WPW) — cardioversion in WPW with AFib is dangerous.",
      tsh: "Hyperthyroidism is a common reversible precipitant of new AFib — TSH is mandatory in all new AFib.",
      troponin: "Troponin screens for ACS as AFib precipitant — MI can present as new AFib.",
      echo: "Echo evaluates structural heart disease, LA size, and LAA thrombus — required if cardioversion planned.",
      bmp: "Hypokalemia and hypomagnesemia precipitate AFib and must be repleted before cardioversion.",
    }
  },
};
