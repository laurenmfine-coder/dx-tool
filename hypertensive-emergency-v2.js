// Virtual EMR Case: Hypertensive Emergency with Acute End-Organ Damage
// Variant: hypertensive-emergency-v2 | Acuity: ESI-2
// Phase 1 Cardiology Expansion — ReasonDx Content Expansion Plan
// NOTE: Prior hypertensive-emergency case focuses on headache/neurologic presentation.
// This case focuses on ED assessment of end-organ damage, IV antihypertensive selection,
// and target BP reduction rate — distinct teaching objectives.

window.EMR_DATA = {
  "patient": {
    "name": "Delores Figueroa",
    "dob": "11/03/1959",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2026-72108",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Medicaid",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "Navarro Pharmacy — 8200 W Flagler St, Miami, FL",
    "language": "Spanish (English limited)",
    "race": "Hispanic/Latina (Cuban)",
    "address": "1455 SW 8th St, Miami, FL 33135",
    "phone": "(305) 555-9024",
    "email": "",
    "emergencyContact": {
      "name": "Carlos Figueroa (Son)",
      "phone": "(305) 555-9108"
    }
  },
  "problems": [
    {
      "problem": "Hypertension — poorly controlled",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": "On amlodipine + hydrochlorothiazide; patient reports inconsistent medication use; multiple ED visits for elevated BP (2x in 2024, 1x in 2025); does not follow up regularly with PCP"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2013",
      "status": "Active",
      "notes": "On metformin; last A1c 8.9 (08/2025); dietary non-adherence reported"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 45-55 on recent labs; likely hypertensive nephrosclerosis; not on nephrology follow-up"
    },
    {
      "problem": "Obesity, Class II",
      "icd": "E66.09",
      "onset": "Long-standing",
      "status": "Active",
      "notes": "BMI 38"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "2018",
      "refills": 0,
      "status": "Active — patient reports taking 'sometimes'"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth in the morning",
      "prescriber": "Dr. Whitfield",
      "start": "2018",
      "refills": 0,
      "status": "Active — patient reports taking 'sometimes'"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Whitfield",
      "start": "2014",
      "refills": 1,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "",
      "reaction": "No known drug allergies",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "03/04/2026",
      "time": "11:08",
      "bp": "228/138",
      "hr": 96,
      "rr": 20,
      "temp": "98.4\u00b0F",
      "spo2": "96% on room air",
      "wt": "224 lbs",
      "ht": "5'4\"",
      "bmi": 38.5,
      "setting": "ED Triage"
    },
    {
      "date": "11/10/2025",
      "bp": "196/118",
      "hr": 88,
      "rr": 18,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "221 lbs",
      "ht": "5'4\"",
      "bmi": 37.9,
      "setting": "ED — treated and released for BP 192/116"
    }
  ],
  "notes": [
    {
      "date": "03/04/2026",
      "time": "11:30",
      "type": "Emergency Department Note",
      "author": "Dr. Marcus Webb, MD (Emergency Medicine)",
      "status": "Attending — Signed",
      "content": {
        "cc": "\"Tengo un dolor de cabeza muy fuerte y veo borroso\" (\"I have a very bad headache and my vision is blurry\") — Son interpreting. 66-year-old female, onset approximately 3 hours ago.",
        "hpi": "Delores Figueroa is a 66-year-old Spanish-speaking female with a history of poorly controlled hypertension, T2DM, and CKD stage 3a who presents via EMS with severe headache (8/10, worst in years), blurred vision in both eyes, and nausea without vomiting. Symptoms began approximately 3 hours ago while at home. Son reports she has been non-adherent to her BP medications for approximately 2 weeks after 'running out.' She has no history of prior stroke or TIA. She denies chest pain, shortness of breath, or focal neurologic symptoms. No fever. No recent illness. Prior ED visits for similar BP elevation — last one 4 months ago (BP 196/118), treated with IV labetalol, BP reduced appropriately, discharged. Son is at bedside serving as interpreter.",
        "ros": {
          "constitutional": "No fever, chills. Nausea.",
          "cardiovascular": "No chest pain, no palpitations, no dyspnea.",
          "neurologic": "Severe headache, blurred vision. No focal weakness, no facial droop, no diplopia, no confusion, no loss of consciousness.",
          "ophthalmologic": "Bilateral visual blurring — not unilateral, not amaurosis fugax.",
          "renal": "No gross hematuria. Decreased urine output noted by patient over 2 days.",
          "other": "All other systems reviewed and negative."
        },
        "physicalExam": {
          "general": "Alert, oriented x3 (via interpreter). Distressed from headache. Well-nourished, obese female.",
          "vitals": "BP 228/138 (right arm); 226/136 (left arm) | HR 96 | RR 20 | SpO2 96% RA | Temp 98.4\u00b0F",
          "heent": "Pupils equal and reactive. Fundoscopic exam: bilateral papilledema present; arteriovenous nicking noted; no flame hemorrhages identified on initial exam (ophthalmology consult placed for full exam).",
          "cardiovascular": "Regular rate and rhythm. S4 gallop noted. No murmurs. No JVD.",
          "respiratory": "Clear to auscultation bilaterally. No crackles.",
          "abdomen": "Obese, soft, non-tender. No renal bruits auscultated.",
          "neurologic": "CN II-XII grossly intact. Strength 5/5 in all extremities. No pronator drift. Gait not tested due to patient distress.",
          "extremities": "No edema. Pulses 2+ bilaterally."
        },
        "mdm": "66-year-old female with BP 228/138, severe headache, bilateral visual changes (blurry vision with papilledema on fundoscopy), and known CKD. This presentation is consistent with hypertensive emergency — severely elevated BP with evidence of acute end-organ damage involving the CNS (hypertensive encephalopathy signs, papilledema) and likely kidneys (elevated creatinine and decreased UO). Key distinction from hypertensive urgency: end-organ damage is present here. Management priority: controlled reduction of MAP by no more than 25% in the first hour. Avoid rapid overcorrection (risk of ischemic stroke from loss of cerebral autoregulation). IV nicardipine or labetalol are preferred agents. CT head to rule out hemorrhagic stroke before full BP management. Neurologic exam currently intact — no focal deficits, making ischemic stroke less likely but must be excluded. Ophthalmology and nephrology consults placed.",
        "plan": [
          "Continuous BP monitoring (arterial line if available; repeat cuff Q5 min)",
          "IV access x2, cardiac monitor, pulse oximetry",
          "CT head without contrast — STAT (rule out hemorrhagic stroke, hypertensive encephalopathy changes)",
          "IV nicardipine drip initiated: 5 mg/hr, titrate to achieve MAP reduction of 20-25% over first hour (avoid >25% reduction), then gradual further reduction over next 24-48 hours",
          "Urinalysis with microscopy (hematuria, casts — evaluate renal involvement); spot urine protein:creatinine ratio",
          "Labs: BMP, CBC, urinalysis, troponin, LFTs, urine microscopy",
          "Ophthalmology consult — urgent fundoscopic exam for hemorrhages, exudates, papilledema",
          "Nephrology consult — CKD 3a with likely acute-on-chronic hypertensive nephropathy",
          "Hold oral antihypertensives until BP controlled with IV therapy and further assessment",
          "Spanish interpreter at bedside; educate on medication adherence with son present",
          "Admission to ICU for continuous BP monitoring and titration"
        ]
      }
    }
  ],
  "labs": [
    {
      "date": "03/04/2026",
      "time": "11:40",
      "orderedBy": "Dr. Marcus Webb, MD",
      "panels": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.8", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "20", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "BUN", "value": "42", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.4", "unit": "mg/dL", "range": "0.5-1.1", "flag": "H" },
            { "test": "eGFR", "value": "22", "unit": "mL/min/1.73m\u00b2", "range": ">60 normal", "flag": "L" },
            { "test": "Glucose", "value": "184", "unit": "mg/dL", "range": "70-100", "flag": "H" }
          ]
        },
        {
          "name": "CBC",
          "results": [
            { "test": "WBC", "value": "10.2", "unit": "x10\u00b3/\u00b5L", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "34.2", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "188", "unit": "x10\u00b3/\u00b5L", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "CARDIAC BIOMARKERS",
          "results": [
            { "test": "Troponin I (high-sensitivity)", "value": "0.06", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
            { "test": "BNP", "value": "420", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Protein", "value": "3+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Blood", "value": "2+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "RBC Casts", "value": "Present", "unit": "", "range": "None", "flag": "H" },
            { "test": "WBC", "value": "2-4", "unit": "/hpf", "range": "<5", "flag": "" },
            { "test": "Specific Gravity", "value": "1.018", "unit": "", "range": "1.002-1.030", "flag": "" }
          ]
        },
        {
          "name": "LIVER FUNCTION",
          "results": [
            { "test": "ALT (SGPT)", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "34", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.2-1.2", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/04/2026",
      "study": "CT HEAD WITHOUT CONTRAST — STAT",
      "accession": "IMG-2026-03045",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Webb, MD",
      "readBy": "Dr. Rachel Kim, MD (Neuroradiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "66F, BP 228/138, severe headache, bilateral visual changes. R/O hemorrhagic stroke, hypertensive encephalopathy.",
      "findings": "No intracranial hemorrhage identified. No hyperdense lesion. No midline shift. No herniation.\n\nCortex: Mild hypodensity in bilateral posterior parieto-occipital regions, symmetric. Pattern consistent with posterior reversible encephalopathy syndrome (PRES) in the appropriate clinical context.\n\nVentricles: Normal size and morphology. No hydrocephalus.\n\nBones: No fracture.",
      "impression": "1. No intracranial hemorrhage or acute ischemic stroke.\n2. Bilateral posterior parieto-occipital hypodensity — findings are consistent with PRES (posterior reversible encephalopathy syndrome) in the setting of severe hypertension. MRI with DWI recommended for confirmation and to exclude acute infarct.",
      "dictated": "03/04/2026 12:02",
      "verified": "03/04/2026 12:15"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL2025-201", "mfr": "Sanofi Pasteur" },
    { "vaccine": "Pneumococcal PCV20", "date": "2022", "site": "Left deltoid IM", "lot": "\u2014", "mfr": "Pfizer" },
    { "vaccine": "COVID-19 (2025 updated)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV2025-004", "mfr": "Moderna" }
  ],
  "familyHistory": [
    "Mother: Hypertension, stroke at 72 (deceased 75)",
    "Father: T2DM, deceased at 68",
    "Sister: Hypertension, alive"
  ],
  "socialHistory": [
    ["Occupation", "Retired homemaker"],
    ["Marital", "Widowed; lives with son"],
    ["Tobacco", "Former smoker — quit 2005 (20 pack-year history)"],
    ["Alcohol", "Denies"],
    ["Drugs", "Denies"],
    ["Diet", "High-sodium traditional Cuban diet reported by son"],
    ["Housing", "Lives with son in Miami, FL"],
    ["Advance Directive", "None — son is informal healthcare proxy; formal designation not on file"]
  ],
  "meta": {
    "caseId": "hypertensive-emergency-v2",
    "diagnosis": "Hypertensive Emergency with Multi-Organ Involvement (PRES, Hypertensive Nephropathy, Demand Ischemia)",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular",
    "setting": "ED",
    "teachingPoints": [
      "Hypertensive emergency vs urgency: The distinction is end-organ damage, not the BP number alone. This patient has papilledema, PRES on CT, creatinine 2.4 (above her baseline), elevated troponin, and RBC casts — meeting criteria for hypertensive emergency. Hypertensive urgency is severely elevated BP WITHOUT acute end-organ damage.",
      "End-organ damage assessment checklist: CNS (headache, altered mental status, focal deficits, papilledema, PRES), cardiac (troponin, BNP, ECG changes, aortic dissection), renal (creatinine rise, urinalysis with casts, proteinuria), retinal (hemorrhages, exudates, papilledema), and vascular (aortic dissection consideration).",
      "Target BP reduction: Reduce MAP by no more than 25% in the first hour. Then continue gradual reduction over 24-48 hours. Rapid overcorrection risks watershed ischemia and ischemic stroke in patients whose cerebral autoregulation is shifted to higher pressures.",
      "IV antihypertensive selection: Nicardipine (calcium channel blocker) is widely preferred — predictable, titratable, minimal reflex tachycardia. Labetalol (alpha + beta blocker) is an alternative. Clevidipine is another option. Nitroprusside has cyanide toxicity risk in renal insufficiency — avoid here. Hydralazine is unpredictable and generally not preferred for emergency titration.",
      "PRES (Posterior Reversible Encephalopathy Syndrome): A neurological manifestation of hypertensive emergency. CT shows bilateral posterior white matter changes; MRI with DWI is confirmatory and excludes acute ischemic stroke. PRES is typically reversible with BP control.",
      "Medication non-adherence: A leading cause of hypertensive emergency. Address barriers: language, cost, access, health literacy. Use professional interpreter (not family member alone) for informed consent and education.",
      "References: JNC 8 and AHA/ACC 2017 Hypertension Guidelines; StatPearls — Hypertensive Emergency (NCBI Bookshelf); PRES — Radiology (Hinchey et al., NEJM)"
    ],
    "differentialDiagnosis": [
      { "diagnosis": "Hypertensive emergency with PRES and nephropathy", "probability": "High", "mustNotMiss": false, "notes": "BP 228/138 with papilledema, posterior CT changes, RBC casts, rising creatinine — multi-organ involvement" },
      { "diagnosis": "Hemorrhagic stroke", "probability": "Moderate", "mustNotMiss": true, "notes": "MUST NOT MISS — headache + severe hypertension; CT shows no hemorrhage, but MRI warranted for full exclusion" },
      { "diagnosis": "Acute ischemic stroke", "probability": "Low-Moderate", "mustNotMiss": true, "notes": "MUST NOT MISS — no focal deficits currently; CT not sensitive for early infarct; MRI/DWI will exclude" },
      { "diagnosis": "Aortic dissection", "probability": "Low", "mustNotMiss": true, "notes": "MUST NOT MISS — symmetric bilateral arm BPs (226 vs 228), no chest/back pain, reduces probability but must keep in differential with this BP level" },
      { "diagnosis": "Hypertensive urgency (no end-organ damage)", "probability": "Low", "mustNotMiss": false, "notes": "Excluded by clinical findings — papilledema, rising creatinine, urinary casts, troponin elevation all confirm end-organ damage" }
    ]
  }
};
