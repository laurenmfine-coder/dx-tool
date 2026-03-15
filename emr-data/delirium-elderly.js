/* emr-data/delirium-elderly.js
   Delirium in the Elderly — Identification, Workup, Non-Pharm Management
   Category: psychiatric/geriatric | Acuity: ESI-2
   Settings: Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Helen Kowalski",
      "patientHPI": "Patient unable to give coherent history — she is confused and pulling at her IV. Her daughter reports: 'She was completely fine at home yesterday. She came in for a hip replacement and now she doesn't know where she is. She keeps asking for her dead husband. This is not my mother.'",
      "dob": "03/08/1940", "age": "85", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-551024", "language": "English/Polish", "race": "White",
      "phone": "(773) 555-1024", "email": "",
      "address": "5512 N. Milwaukee Ave, Chicago, IL 60630",
      "insurance": "Medicare", "pcp": "Dr. Stanislaw Ptak, MD",
      "pharmacy": "Walgreens — Milwaukee Ave",
      "emergencyContact": { "name": "Barbara Kowalski-Jones", "phone": "(773) 555-8844", "relationship": "Daughter (HCP)" }
    },
    "allergies": [{ "allergen": "Penicillin", "reaction": "Rash (reported, no documentation)", "severity": "Unknown", "type": "Drug" }],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" },
      { "name": "Pneumovax 23", "date": "2020", "lot": "", "site": "" },
      { "name": "Shingrix dose 2", "date": "2022", "lot": "", "site": "" }
    ],
    "familyHistory": ["Daughter reports no family history of dementia or psychiatric illness"],
    "socialHistory": [
      ["Baseline", "COMPLETELY INDEPENDENT at baseline — daughter confirms: 'She drives herself to bingo, lives alone, manages her own finances, cooks every day.' Critical: baseline assessment is key in delirium."],
      ["Living", "Lives alone — independent. Daughter lives nearby and sees her daily."],
      ["Smoking", "Never"], ["Alcohol", "Rare"],
      ["Admission", "Admitted yesterday for elective right total hip arthroplasty — uncomplicated surgery. Became acutely confused 18h post-op."]
    ]
  },
  "encounters": {
    "inpatient": {
      "patient": {
        "chiefComplaint": "85F post-op day 1 total hip arthroplasty — acute onset confusion, agitation, pulling at IV — daughter states 'this is not my mother' — DELIRIUM workup",
        "diagnosis": "Post-Operative Delirium — Hyperactive Subtype — Multiple Precipitating Factors"
      },
      "problems": [
        { "id": "prob-1", "description": "Post-operative delirium — acute onset, fluctuating, inattention. CAM positive. Multiple precipitants: pain, opioids, sleep deprivation, urinary retention, unfamiliar environment, Foley catheter, sensory impairment (glasses removed, hearing aids out).", "status": "Active", "onset": "Acute", "icd10": "F05" },
        { "id": "prob-2", "description": "Pain — inadequately controlled post-op → paradoxical agitation from undertreated pain OR opioid excess. Must distinguish.", "status": "Active", "onset": "Acute", "icd10": "M25.511" },
        { "id": "prob-3", "description": "Urinary retention — Foley in situ but was clamped for trial void — bladder scan 480mL. Painful distension contributing to delirium.", "status": "Active", "onset": "Acute", "icd10": "R33.9" },
        { "id": "prob-4", "description": "Sleep deprivation — vitals Q2H overnight, lights on, multiple interventions — disrupted circadian rhythm", "status": "Active", "onset": "Acute", "icd10": "G47.00" },
        { "id": "prob-5", "description": "Sensory impairment unaddressed — glasses and hearing aids removed on admission. Patient cannot see or hear properly.", "status": "Active", "onset": "Acute", "icd10": "H91.90" }
      ],
      "medications": [
        { "id": "med-1", "name": "Oxycodone", "dose": "10mg", "route": "PO", "frequency": "Q4H PRN pain (ordered Q4H — may be too frequent for 85yo)", "status": "REVIEW — dose and frequency for elderly", "prescriber": "Dr. Orthopedics" },
        { "id": "med-2", "name": "Diphenhydramine (Benadryl)", "dose": "50mg", "route": "PO", "frequency": "PRN sleep — ordered by night nurse", "status": "STOP — Beers Criteria, anticholinergic delirium precipitant", "prescriber": "Night Resident" },
        { "id": "med-3", "name": "Metoprolol succinate", "dose": "50mg", "route": "PO", "frequency": "Daily — home medication", "status": "Active", "prescriber": "Dr. Stanislaw Ptak, MD" },
        { "id": "med-4", "name": "Lisinopril", "dose": "10mg", "route": "PO", "frequency": "Daily — home medication", "status": "Active", "prescriber": "Dr. Stanislaw Ptak, MD" },
        { "id": "med-5", "name": "Atorvastatin", "dose": "40mg", "route": "PO", "frequency": "Nightly — home medication", "status": "Active", "prescriber": "Dr. Stanislaw Ptak, MD" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "06:00", "bp": "148/88", "hr": "96", "rr": "18", "temp": "37.6°C", "spo2": "94%", "pain": "Unable to assess verbally — grimacing" }],
      "visits": [{
        "id": "visit-1", "type": "Medicine Consult — Delirium Evaluation", "date": "03/16/2026", "provider": "Dr. Medicine/Geriatrics",
        "cc": "Post-op delirium — acute onset confusion in previously independent 85F — CAM positive",
        "hpi": "85F, fully independent at baseline, presents with acute onset confusion 18h post right total hip arthroplasty. Daughter at bedside reports complete behavioral change from baseline. CAM (Confusion Assessment Method) assessment: POSITIVE (acute onset + fluctuating course + inattention + disorganized thinking).\n\nDELIRIUM FRAMEWORK — PREDISPOSING + PRECIPITATING:\nPREDISPOSING (patient risk factors for delirium):\n- Age >65 (85yo)\n- Cognitive reserve (even without dementia, aging brain is vulnerable)\n- Sensory impairment (glasses out, hearing aids out)\n- Female sex\n- Surgical/anesthesia exposure\n\nPRECIPITATING FACTORS (FIND ME mnemonic):\nF — Fecal impaction: check\nI — Infection: UA, CXR (surgical wound check)\nN — Nutrition/fluid: NPO before surgery, poor intake post-op\nD — Drugs: OPIOIDS (oxycodone Q4H), DIPHENHYDRAMINE (Beers — STOP immediately)\nM — Metabolic: electrolytes, glucose, thyroid\nE — Environment: sleep deprivation, Foley, restraints\n\nKEY TEACHING: Delirium is NOT 'expected' or 'normal' post-op in the elderly. It is a MEDICAL EMERGENCY with 30-40% mortality and long-term cognitive consequences. Always identify and treat all precipitants. Physical restraints WORSEN delirium.",
        "assessment": "Post-op hyperactive delirium — multiple modifiable precipitants. Non-pharmacological management first. Stop anticholinergic drugs (diphenhydramine). Treat pain adequately (paradoxically, undertreated pain is a major delirium precipitant — use scheduled low-dose acetaminophen + judicious opioid). Relieve urinary retention. Restore sensory input. Sleep protocol.",
        "plan": "STOP diphenhydramine immediately (Beers Criteria — anticholinergic). Review all medications for anticholinergic burden. RESTORE GLASSES and HEARING AIDS now. Relieve urinary retention (unclamped Foley — 480mL drained). Scheduled acetaminophen 1000mg Q8H (reduces opioid requirement). REDUCE opioid (oxycodone 5mg Q6H PRN — half dose, less frequent). Reorientation q1h — clocks, windows, family presence. No physical restraints (worsens delirium). NO Haldol unless patient is danger to self (mild preferred over typical antipsychotics). Sleep protocol: lights off 10pm, cluster care, NO vitals Q2H unless clinical change. Early PT — mobilize tomorrow morning. Geriatrics consult. Consider delirium order set. UA, CXR, BMP, CBC to exclude infectious/metabolic precipitant."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "06:30", "status": "Final", "orderedBy": "Dr. Medicine",
        "accession": "LAB-551024", "collected": "03/16/2026 06:25", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood and Urine",
        "groups": [
          { "name": "DELIRIUM WORKUP", "results": [
            { "test": "Sodium", "value": "132", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Glucose", "value": "148", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.6-1.1", "flag": "H" },
            { "test": "Hemoglobin", "value": "9.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "TSH", "value": "2.4", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" },
            { "test": "WBC", "value": "12.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" }
          ]},
          { "name": "URINALYSIS", "results": [
            { "test": "UA WBCs", "value": "8-10/hpf", "unit": "", "range": "<5", "flag": "H" },
            { "test": "UA Bacteria", "value": "Moderate", "unit": "", "range": "None", "flag": "H" },
            { "test": "UA Nitrite", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Urine Culture", "value": "Pending 24-48h", "unit": "", "range": "No growth", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "Chest X-Ray Portable AP",
          "date": "03/16/2026", "time": "07:00", "orderedBy": "Dr. Medicine",
          "findings": "No acute cardiopulmonary process. Mild atelectasis bilateral bases. No pneumonia. No pneumothorax. Mild cardiomegaly consistent with prior imaging.",
          "impression": "No pneumonia. Basilar atelectasis — encourage incentive spirometry.", "critical": false }
      ]
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable — patient admitted directly from OR recovery",
        "diagnosis": "Admitted post-operatively"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-Delirium", "title": "Delirium", "authors": "Fong TG, Tulebaev SR, Inouye SK", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK470530/", "openAccess": true, "validates": ["CAM diagnostic criteria", "Predisposing vs precipitating factors", "Non-pharmacologic management", "Beers Criteria medications to avoid", "Anticholinergic drugs and delirium"] },
    { "id": "AGS-Beers-2023", "title": "American Geriatrics Society 2023 Beers Criteria for Potentially Inappropriate Medication Use in Older Adults", "authors": "American Geriatrics Society Beers Criteria Update Expert Panel", "journal": "Journal of the American Geriatrics Society", "year": 2023, "doi": "10.1111/jgs.18372", "url": "https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/jgs.18372", "openAccess": true, "validates": ["Diphenhydramine in elderly", "Anticholinergic burden", "Inappropriate medications post-op"] }
  ]
};
