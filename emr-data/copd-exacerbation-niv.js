/* emr-data/copd-exacerbation-niv.js
   COPD Exacerbation — NIV, Oxygen Targets, Discharge Criteria
   Category: pulmonary | Acuity: ESI-2
   Settings: ED, Floor, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Earl Hutchinson",
      "patientHPI": "I've had my COPD for 20 years. For the past three days my breathing has gotten much worse and my sputum has turned yellow-green. My inhalers aren't helping at all. My wife says I'm breathing too fast.",
      "dob": "02/14/1948", "age": "77", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-448821", "language": "English", "race": "White",
      "phone": "(502) 555-8821", "email": "",
      "address": "3312 Dixie Hwy, Louisville, KY 40216",
      "insurance": "Medicare", "pcp": "Dr. Charles Morgan, MD",
      "pharmacy": "Walgreens — Dixie Hwy",
      "emergencyContact": { "name": "Lucille Hutchinson", "phone": "(502) 555-4411", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" },
      { "name": "Pneumovax 23", "date": "2021", "lot": "", "site": "" }
    ],
    "familyHistory": ["Non-contributory"],
    "socialHistory": [
      ["Smoking", "60 pack-year history — quit 5 years ago"],
      ["COPD severity", "GOLD Stage IV (Very Severe) — FEV1 28% predicted. On home oxygen 2L NC continuously."],
      ["Home O2", "Home oxygen — 2L NC — required at rest and with activity"],
      ["Prior intubation", "Intubated x2 in past 5 years — discussed with wife that he does NOT want to be intubated again — HCP is wife Lucille"],
      ["Advance directive", "POLST: DNI (do not intubate) — trial of NIV acceptable — DNR if NIV fails"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "77M, GOLD IV COPD, DNI — 3-day purulent sputum + worsening dyspnea — pH 7.29, pCO2 72, SpO2 84% on home 2L — BiPAP initiated",
        "diagnosis": "Severe COPD Exacerbation with Acute Hypercapnic Respiratory Failure — BiPAP Initiated"
      },
      "problems": [
        { "id": "prob-1", "description": "Severe COPD exacerbation — purulent sputum (infectious trigger most likely), worsening airflow obstruction. ABG: pH 7.29, pCO2 72, pO2 52 on 2L — acute-on-chronic hypercapnic respiratory failure.", "status": "Active", "onset": "Acute", "icd10": "J44.1" },
        { "id": "prob-2", "description": "Acute hypercapnic respiratory failure — pH 7.29 (acidosis), pCO2 72 (CO2 retention). BiPAP indication: pH <7.35, pCO2 >45. DNI status — BiPAP is the ceiling of care.", "status": "Active", "onset": "Acute", "icd10": "J96.01" },
        { "id": "prob-3", "description": "DNI/DNR per POLST — trial of NIV (BiPAP) acceptable. If BiPAP fails and patient declines, comfort-focused care. Palliative care consult.", "status": "Active", "onset": "Chronic", "icd10": "Z66" },
        { "id": "prob-4", "description": "Oxygen target: 88-92% SpO2. NEVER give high-flow O2 to COPD hypercapnic patient — eliminates hypoxic drive, worsens CO2 retention (Haldane effect).", "status": "Active", "onset": "Acute", "icd10": "J44.1" }
      ],
      "medications": [
        { "id": "med-1", "name": "BiPAP", "dose": "IPAP 14 / EPAP 6 cmH2O", "route": "Non-invasive ventilation", "frequency": "Continuous — titrate to RR <25, pH >7.35", "status": "Active — initiated", "prescriber": "Dr. Attending" },
        { "id": "med-2", "name": "Albuterol + Ipratropium (Duoneb)", "dose": "3mg/0.5mg", "route": "Nebulized", "frequency": "Q20 min x3, then Q1-2H", "status": "Active", "prescriber": "Dr. Attending" },
        { "id": "med-3", "name": "Methylprednisolone", "dose": "125mg IV", "route": "IV", "frequency": "Q6H x24h, then oral prednisone 40mg daily x5 days", "status": "Active — systemic steroids shorten exacerbation", "prescriber": "Dr. Attending" },
        { "id": "med-4", "name": "Azithromycin", "dose": "500mg IV", "route": "IV", "frequency": "Daily — antibiotic for infectious exacerbation (purulent sputum)", "status": "Active", "prescriber": "Dr. Attending" },
        { "id": "med-5", "name": "Supplemental O2", "dose": "Titrate to SpO2 88-92%", "route": "Via BiPAP", "frequency": "Continuous — TARGET 88-92%, NOT >95%", "status": "Active — critical to target", "prescriber": "Dr. Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "21:00", "bp": "148/92", "hr": "108", "rr": "32", "temp": "37.8°C", "spo2": "84%", "pain": "3/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit — COPD Exacerbation", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Severe COPD exacerbation — acute-on-chronic hypercapnic respiratory failure — DNI — BiPAP ceiling",
        "hpi": "77M with GOLD IV COPD (FEV1 28%) presents with 3-day worsening dyspnea, productive purulent (yellow-green) sputum, and increased inhaler use without benefit. On home O2 2L NC at baseline. SpO2 84% on 2L on arrival. RR 32. Using accessory muscles. Speaking in 2-3 word phrases.\n\nGOLD CRITERIA FOR HOSPITALIZATION:\n✓ Severe dyspnea disproportionate to baseline\n✓ SpO2 <90% (or significant fall from baseline)\n✓ Altered mental status (later)\n✓ Inadequate response to initial bronchodilators\n\nBiPAP INDICATIONS IN COPD:\n✓ pH <7.35 (7.29)\n✓ pCO2 >45 (72 — acute-on-chronic)\n✓ RR >25 (32)\n→ Start BiPAP NOW — reduces need for intubation by 50%, reduces mortality\n\nOXYGEN TARGET — CRITICAL:\n- Target SpO2 88-92% in hypercapnic COPD\n- High-flow O2 → eliminates hypoxic drive + Haldane effect (O2 displaces CO2 from hemoglobin) → worsens CO2 retention → CO2 narcosis → apnea\n- NEVER target 95-100% in hypercapnic COPD\n\nDNI STATUS: Discussed with wife (HCP/POLST). Trial of BiPAP — if pH not improving in 1-2 hours → goals-of-care discussion. Palliative care team involved.",
        "assessment": "AECOPD — severe, hypercapnic respiratory failure — BiPAP started (ceiling of care per POLST). Antibiotics (purulent sputum), steroids. O2 88-92% target. ICU bed if BiPAP successful — monitor closely.",
        "plan": "BiPAP — assess response in 1-2h (pH, RR, work of breathing). If improving → continue BiPAP, admit ICU step-down. If not improving within 2h → goals-of-care conversation (comfort-focused care, palliative sedation if needed). O2 target 88-92% — strict. Duonebs Q1-2H. Methylprednisolone IV. Azithromycin IV. Sputum culture. Blood cultures (febrile). DVT prophylaxis. Palliative care consult. Respiratory therapy."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "21:15", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-448821", "collected": "03/15/2026 21:10", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "ARTERIAL BLOOD GAS — ON 2L NC", "results": [
            { "test": "pH", "value": "7.29", "unit": "", "range": "7.35-7.45", "flag": "L" },
            { "test": "pCO2", "value": "72", "unit": "mmHg", "range": "35-45 (chronic baseline ~55)", "flag": "H" },
            { "test": "pO2", "value": "52", "unit": "mmHg", "range": ">60", "flag": "L" },
            { "test": "HCO3 (bicarbonate)", "value": "34", "unit": "mEq/L", "range": "22-26 (elevated — chronic compensation)", "flag": "H" },
            { "test": "SpO2 (ABG)", "value": "84%", "unit": "", "range": "88-92% target in COPD", "flag": "L" }
          ]},
          { "name": "CBC AND METABOLIC", "results": [
            { "test": "WBC", "value": "14.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "16.8", "unit": "g/dL", "range": "13.5-17.5 (polycythemia — chronic hypoxia)", "flag": "" },
            { "test": "Theophylline level", "value": "Not prescribed", "unit": "", "range": "N/A", "flag": "" },
            { "test": "BNP", "value": "480", "unit": "pg/mL", "range": "<100 (elevated — cor pulmonale)", "flag": "H" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "Chest X-Ray Portable AP",
          "date": "03/15/2026", "time": "21:20", "orderedBy": "Dr. Attending",
          "findings": "Severe bilateral hyperinflation. Flattened diaphragms. Increased AP diameter. Increased bronchovascular markings bilateral lower lobes — possible early infiltrate vs. mucus plugging. No pneumothorax. Mild cardiomegaly. No effusion.",
          "impression": "GOLD IV COPD — severe hyperinflation. Possible right lower lobe opacity — cannot fully exclude pneumonia, though AECOPD without consolidation is more typical.", "critical": false }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 AECOPD — pH improving on BiPAP (7.29 → 7.36). Transferring to floor on high-flow BiPAP protocol.",
        "diagnosis": "AECOPD — Responding to BiPAP — Transitioning Floor"
      },
      "problems": [
        { "id": "prob-1", "description": "AECOPD — responding. pH 7.29 → 7.36 on BiPAP x12h. RR down from 32 to 22. Tolerating 2-4h BiPAP breaks on Venturi mask 28% (SpO2 90%).", "status": "Improving", "onset": "Acute", "icd10": "J44.1" },
        { "id": "prob-2", "description": "Goals of care — patient now alert enough to participate in discussion. Confirmed DNI. Comfortable with BiPAP as bridge. Understands prognosis: GOLD IV, each exacerbation associated with increased mortality.", "status": "Active", "onset": "Chronic", "icd10": "Z66" }
      ],
      "medications": [
        { "id": "med-1", "name": "BiPAP", "dose": "IPAP 14 / EPAP 6", "route": "NIV", "frequency": "Nocturnal + during waking rest periods. Off for meals, conversation, ADLs.", "status": "Tapering use", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-2", "name": "Prednisone", "dose": "40mg", "route": "PO", "frequency": "Daily x5 days (transitioned from IV)", "status": "Active — day 2", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-3", "name": "Azithromycin", "dose": "500mg", "route": "PO", "frequency": "Daily x5 days total", "status": "Active", "prescriber": "Dr. Medicine Attending" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "08:00", "bp": "138/84", "hr": "92", "rr": "22", "temp": "37.4°C", "spo2": "91%", "pain": "1/10" }],
      "visits": [{
        "id": "visit-2", "type": "Medicine Progress Note", "date": "03/16/2026", "provider": "Dr. Medicine Attending",
        "cc": "Day 2 AECOPD — good BiPAP response — goals of care reviewed",
        "hdi": "pH improving: 7.29 → 7.34 → 7.36. Tolerating BiPAP breaks. SpO2 90-92% on Venturi 28% during breaks — within target. Wife present and engaged. Patient alert today — able to confirm goals of care (DNI, trial NIV acceptable — what we did was appropriate).\n\nDISCHARGE PLANNING: GOLD IV COPD — each hospitalization associated with 25% 1-year mortality. Palliative care engaged. Pulmonary rehab referral. Advance care planning documentation updated.",
        "assessment": "AECOPD — good early response to BiPAP. Steroid course continuing. Plan to discharge when: SpO2 ≥88% on home O2, tolerating oral medications, dyspnea at or near baseline, RR <25 at rest.",
        "plan": "Continue BiPAP nocturnal. Wean oral steroids per schedule. Complete azithromycin. Pulmonary follow-up. Update advance directive — ensure POLST in EMR and sent home with patient. Palliative care follow-up after discharge. Home health — respiratory therapist for BiPAP optimization. Influenza + pneumococcal vaccines current. COPD action plan (written) given to patient + wife."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "06:00", "status": "Final", "orderedBy": "Dr. Medicine Attending",
        "accession": "LAB-448822", "collected": "03/16/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "ABG — DAY 2 ON BIPAP", "results": [
            { "test": "pH", "value": "7.36", "unit": "", "range": "7.35-7.45", "flag": "" },
            { "test": "pCO2", "value": "61", "unit": "mmHg", "range": "Chronic baseline ~55 — improving", "flag": "H" },
            { "test": "pO2", "value": "68", "unit": "mmHg", "range": "55-80 target in COPD", "flag": "" },
            { "test": "SpO2", "value": "91%", "unit": "", "range": "88-92% target — APPROPRIATE", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "GOLD-2024", "title": "Global Strategy for Prevention, Diagnosis and Management of COPD — 2024 Report", "authors": "Global Initiative for Chronic Obstructive Lung Disease", "journal": "GOLD Guidelines", "year": 2024, "doi": "", "url": "https://goldcopd.org/2024-gold-report/", "openAccess": true, "validates": ["BiPAP indications (pH <7.35, pCO2 >45)", "O2 target 88-92%", "Antibiotic and steroid use in exacerbations", "Discharge criteria"] },
    { "id": "StatPearls-COPD", "title": "Chronic Obstructive Pulmonary Disease (COPD)", "authors": "Mirza S, Clay RD, Koslow MA, Scanlon PD", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK559281/", "openAccess": true, "validates": ["Haldane effect", "Hypoxic drive in COPD", "NIV vs intubation outcomes"] }
  ]
};
