/* emr-data/alcohol-withdrawal.js
   Alcohol Withdrawal — CIWA Protocol and Delirium Tremens Prevention
   Category: psychiatric | Acuity: ESI-2
   Settings: ED, Floor, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patrick Sullivan",
      "patientHPI": "I've been drinking a fifth of whiskey every day for the past 6 years and I haven't had a drink in 18 hours. My hands won't stop shaking and I'm sweating through my clothes. I feel like bugs are crawling on my skin.",
      "dob": "04/22/1971", "age": "54", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-882341", "language": "English", "race": "White",
      "phone": "(312) 555-2341", "email": "p.sullivan@email.com",
      "address": "2244 N. Clark St, Chicago, IL 60614",
      "insurance": "Medicaid", "pcp": "None — no PCP",
      "pharmacy": "Walgreens — Clark St",
      "emergencyContact": { "name": "Mary Sullivan", "phone": "(312) 555-8877", "relationship": "Sister" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Unknown — no records available", "date": "", "lot": "", "site": "" }],
    "familyHistory": ["Father: alcohol use disorder, died of liver failure", "Brother: alcohol use disorder"],
    "socialHistory": [
      ["Alcohol", "Daily fifth (750mL) of whiskey x6 years — drinks from morning to prevent withdrawal"],
      ["Housing", "Marginally housed — stays with sister intermittently"],
      ["Smoking", "1 PPD x30 years"],
      ["Other substances", "Denies illicit drugs"],
      ["Prior withdrawal", "2 prior hospitalizations for alcohol withdrawal — one with seizure 2 years ago"],
      ["Work", "Unemployed — disability"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "54M, daily fifth x6yr, LDA 18h — tremor, diaphoresis, formication, CIWA-Ar 22 — high risk for DTs given prior withdrawal seizure",
        "diagnosis": "Severe Alcohol Withdrawal — CIWA-Ar 22 — High Risk for Delirium Tremens"
      },
      "problems": [
        { "id": "prob-1", "description": "Severe alcohol withdrawal — CIWA-Ar 22. High risk for DTs: prior withdrawal seizure, daily heavy use, 18h since last drink. Admit for benzodiazepine taper.", "status": "Active", "onset": "Acute", "icd10": "F10.230" },
        { "id": "prob-2", "description": "Prior alcohol withdrawal seizure — significantly increases risk for current seizure and DTs", "status": "Active", "onset": "History", "icd10": "F10.231" },
        { "id": "prob-3", "description": "Wernicke encephalopathy prevention — thiamine 500mg IV x3 days BEFORE any glucose administration (high-dose thiamine prevents Wernicke in at-risk patients)", "status": "At Risk", "onset": "Acute", "icd10": "E51.2" },
        { "id": "prob-4", "description": "Hypomagnesemia — common in alcohol use disorder, lowers seizure threshold, must be repleted", "status": "Active", "onset": "Acute", "icd10": "E83.42" },
        { "id": "prob-5", "description": "Alcohol use disorder — severe. Counsel on MAT (naltrexone, acamprosate, disulfiram) at discharge.", "status": "Chronic", "onset": "Chronic", "icd10": "F10.20" }
      ],
      "medications": [
        { "id": "med-1", "name": "Thiamine", "dose": "500mg IV", "route": "IV", "frequency": "Q8H x3 days — BEFORE GLUCOSE. Prevents Wernicke.", "status": "Start NOW", "prescriber": "Dr. Attending" },
        { "id": "med-2", "name": "Diazepam", "dose": "10-20mg PO/IV", "route": "PO/IV", "frequency": "PRN CIWA-Ar ≥8 — symptom-triggered protocol", "status": "Active", "prescriber": "Dr. Attending" },
        { "id": "med-3", "name": "Folic Acid", "dose": "1mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Attending" },
        { "id": "med-4", "name": "Magnesium Sulfate", "dose": "2g IV", "route": "IV", "frequency": "Over 2h — repletes Mg2+, raises seizure threshold", "status": "Active", "prescriber": "Dr. Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "14:00", "bp": "168/102", "hr": "118", "rr": "20", "temp": "38.1°C", "spo2": "97%", "pain": "4/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit",
        "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Severe alcohol withdrawal CIWA-Ar 22 — formication, tremor, tachycardia, prior withdrawal seizure",
        "hpi": "54M with severe alcohol use disorder (daily fifth x6 years) presents 18 hours after last drink with tremor, diaphoresis, anxiety, nausea, and formication (tactile hallucinations — feels like insects crawling on skin). He has a prior history of alcohol withdrawal seizure 2 years ago requiring hospitalization. His sister brought him in when she found him shaking violently.\n\nCIWA-Ar ASSESSMENT (scored 22 — severe):\n- Nausea/vomiting: 4\n- Tremor: 4\n- Paroxysmal sweats: 3\n- Anxiety: 3\n- Agitation: 2\n- Tactile disturbances (formication): 3\n- Visual disturbances: 1\n- Auditory disturbances: 1\n- Headache: 1\n- Orientation: 0\nTOTAL: 22 — SEVERE (>20 = high risk for DTs)\n\nTIMELINE OF ALCOHOL WITHDRAWAL:\n- 6-24h: Minor withdrawal (tremor, anxiety, nausea, diaphoresis) — now\n- 24-48h: Alcohol withdrawal seizures (tonic-clonic) — PREVENT with benzos\n- 48-96h: Delirium Tremens (DTs) — confusion, hallucinations, autonomic instability — 5-15% mortality if untreated\n\nWERNICKE RISK: Thiamine BEFORE glucose. Even one glucose bolus in thiamine-deficient alcoholic can precipitate Wernicke encephalopathy → Korsakoff syndrome.",
        "assessment": "Severe alcohol withdrawal, CIWA 22, prior seizure — admit to floor or step-down. Symptom-triggered benzodiazepine protocol (superior to fixed schedule — less benzo, shorter stay, same seizure prevention). Thiamine IV immediately. Mg repletion. Nutritional support.",
        "plan": "Thiamine 500mg IV NOW and Q8H x3 days (before any glucose). Diazepam 10mg PO Q1H PRN CIWA ≥8 (symptom-triggered protocol). If CIWA >20 or unable to swallow — IV diazepam. Monitor CIWA Q1H. If DTs develop (confusion + autonomic storm): ICU, IV lorazepam, intubation threshold low. Mg2+ repletion. Folate. Nutritional consult. CAGE/AUDIT-C assessment. Addiction medicine consult for MAT planning."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "14:20",
        "status": "Final", "orderedBy": "Dr. Attending", "accession": "LAB-882341",
        "collected": "03/15/2026 14:15", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "COMPREHENSIVE METABOLIC PANEL", "results": [
            { "test": "Sodium", "value": "132", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "3.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "L" },
            { "test": "Magnesium", "value": "1.2", "unit": "mg/dL", "range": "1.7-2.2", "flag": "L" },
            { "test": "Phosphorus", "value": "2.0", "unit": "mg/dL", "range": "2.5-4.5", "flag": "L" },
            { "test": "Glucose", "value": "62", "unit": "mg/dL", "range": "70-100", "flag": "L" },
            { "test": "AST", "value": "188", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT", "value": "82", "unit": "U/L", "range": "7-56", "flag": "H" },
            { "test": "AST:ALT Ratio", "value": "2.3:1", "unit": "", "range": "<2:1", "flag": "H" },
            { "test": "GGT", "value": "412", "unit": "U/L", "range": "9-48", "flag": "H" },
            { "test": "Total Bilirubin", "value": "1.8", "unit": "mg/dL", "range": "0.2-1.2", "flag": "H" }
          ]},
          { "name": "BLOOD ALCOHOL AND TOXICOLOGY", "results": [
            { "test": "Blood Alcohol Level (BAL)", "value": "0.04", "unit": "g/dL", "range": "0 (legal limit 0.08)", "flag": "" },
            { "test": "Urine Drug Screen", "value": "Negative (opiates, cocaine, benzos, THC)", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Acetaminophen Level", "value": "Undetectable", "unit": "", "range": "Undetectable", "flag": "" }
          ]},
          { "name": "CBC", "results": [
            { "test": "WBC", "value": "11.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "MCV", "value": "104", "unit": "fL", "range": "80-100", "flag": "H" },
            { "test": "Platelets", "value": "88", "unit": "x10³/µL", "range": "150-400", "flag": "L" }
          ]}
        ]
      }],
      "imaging": []
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 alcohol withdrawal — CIWA trending down on diazepam PRN, no seizure, no DTs",
        "diagnosis": "Alcohol Withdrawal — Responding to CIWA Protocol"
      },
      "problems": [
        { "id": "prob-1", "description": "Alcohol withdrawal — CIWA now 10 (down from 22). No seizure. No DTs. Diazepam PRN working well.", "status": "Improving", "onset": "Acute", "icd10": "F10.230" },
        { "id": "prob-2", "description": "Alcoholic liver disease — AST:ALT ratio 2.3:1 (classic pattern), thrombocytopenia (splenic sequestration). GI/Hepatology f/u needed.", "status": "Active", "onset": "Chronic", "icd10": "K70.9" },
        { "id": "prob-3", "description": "Malnutrition — low Mg, K, phosphorus, hypoglycemia. Repleting electrolytes. Nutritional support.", "status": "Active", "onset": "Chronic", "icd10": "E46" },
        { "id": "prob-4", "description": "Medications for alcohol use disorder — counseled on naltrexone (prevents relapse). Addiction medicine consulted.", "status": "Active", "onset": "Chronic", "icd10": "F10.20" }
      ],
      "medications": [
        { "id": "med-1", "name": "Diazepam", "dose": "5-10mg PO", "route": "PO", "frequency": "PRN CIWA ≥8 — frequency decreasing as withdrawal resolves", "status": "Active — tapering", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-2", "name": "Thiamine", "dose": "500mg IV", "route": "IV", "frequency": "Q8H — day 2 of 3", "status": "Active", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-3", "name": "Naltrexone", "dose": "50mg", "route": "PO", "frequency": "Daily — starting at discharge for relapse prevention", "status": "Planned for discharge", "prescriber": "Dr. Addiction Medicine" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "08:00", "bp": "148/88", "hr": "94", "rr": "16", "temp": "37.2°C", "spo2": "98%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-2", "type": "Medicine Progress Note",
        "date": "03/16/2026", "provider": "Dr. Medicine Attending",
        "cc": "Day 2 alcohol withdrawal — improving",
        "hpi": "CIWA trending down: 22 → 14 → 10. Received 4 doses of diazepam 10mg PRN overnight (40mg total — appropriate for CIWA-triggered protocol). No seizure. No visual/auditory hallucinations. Tremor improving. Eating soft diet. Thiamine day 2. Electrolytes repleted. Addiction medicine saw patient — recommended naltrexone at discharge plus outpatient SUD treatment program.\n\nDTs WINDOW: 48-96h post last drink. Patient is now at highest risk window (Day 2). Continue close monitoring. Discharge criteria: CIWA <8 x12h, tolerating PO, no autonomic instability.",
        "assessment": "Alcohol withdrawal resolving. Peak DTs risk 48-96h — continue monitoring. Discharge tomorrow if maintains CIWA <8.",
        "plan": "Continue CIWA q2h monitoring. PRN diazepam for CIWA ≥8. Complete thiamine x1 more day then switch to oral. Nutritional consult. Naltrexone counseling — start at discharge (ensure no current opioid use). Referral to outpatient SUD treatment (AA, IOP, MAT clinic). Follow-up hepatology for alcoholic liver disease. Abstinence counseling — no safe level of alcohol for this patient."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "06:00",
        "status": "Final", "orderedBy": "Dr. Medicine Attending", "accession": "LAB-882342",
        "collected": "03/16/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "ELECTROLYTES — TREND", "results": [
            { "test": "Potassium", "value": "3.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Magnesium", "value": "1.8", "unit": "mg/dL", "range": "1.7-2.2", "flag": "" },
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-AlcoholWithdrawal", "title": "Alcohol Withdrawal", "authors": "Newman RK, Stobart Gallagher MA, Gomez AE", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK441882/", "openAccess": true, "validates": ["CIWA-Ar scoring", "Symptom-triggered vs fixed protocol", "DTs definition and timeline", "Benzodiazepine selection", "Wernicke prevention"] },
    { "id": "StatPearls-Wernicke", "title": "Wernicke Encephalopathy", "authors": "Sechi G, Serra A", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK538505/", "openAccess": true, "validates": ["Thiamine before glucose", "High-dose IV thiamine (500mg)", "Korsakoff prevention"] }
  ]
};
