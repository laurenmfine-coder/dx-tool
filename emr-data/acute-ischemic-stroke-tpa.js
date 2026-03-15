/* emr-data/acute-ischemic-stroke-tpa.js
   Acute Ischemic Stroke — tPA Window & LVO Decision
   Category: neurology | Acuity: ESI-1
   Settings: ED, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Eleanor Hutchins",
      "patientHPI": "My husband says I suddenly couldn't speak and my face drooped and my right arm went weak. He called 911 immediately. This started about 40 minutes ago.",
      "dob": "08/14/1950", "age": "75", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-229145", "language": "English", "race": "White",
      "phone": "(617) 555-9145", "email": "e.hutchins@email.com",
      "address": "84 Commonwealth Ave, Boston, MA 02116",
      "insurance": "Medicare", "pcp": "Dr. Thomas Walsh, MD",
      "pharmacy": "CVS — Boylston St",
      "emergencyContact": { "name": "George Hutchins", "phone": "(617) 555-7722", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Father: stroke at 78", "Mother: hypertension, coronary artery disease"],
    "socialHistory": [
      ["Anticoagulation", "On apixaban for chronic atrial fibrillation — LAST DOSE yesterday morning"],
      ["Last known well", "40 minutes ago — husband witnessed sudden onset"],
      ["HTN", "Poorly controlled — SBP often >160 per records"],
      ["Smoking", "Never"], ["Alcohol", "Rare"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "75F on apixaban for AF — sudden onset aphasia + right hemiplegia, LKW 40min ago, NIHSS 18 — STROKE ALERT",
        "diagnosis": "Acute Left MCA Ischemic Stroke — LVO — tPA + Thrombectomy"
      },
      "problems": [
        { "id": "prob-1", "description": "Acute ischemic stroke — left MCA territory. NIHSS 18. LVO on CTA (left M1 occlusion). Within tPA window. Thrombectomy candidate.", "status": "Active", "onset": "Acute", "icd10": "I63.512" },
        { "id": "prob-2", "description": "Aphasia — global (expressive + receptive) — left hemisphere dominant", "status": "Active", "onset": "Acute", "icd10": "R47.01" },
        { "id": "prob-3", "description": "Right hemiplegia — face, arm, leg", "status": "Active", "onset": "Acute", "icd10": "G81.90" },
        { "id": "prob-4", "description": "Atrial fibrillation — on apixaban (last dose yesterday morning). Cardioembolic stroke mechanism most likely.", "status": "Chronic", "onset": "Chronic", "icd10": "I48.91" },
        { "id": "prob-5", "description": "tPA eligibility — within 4.5h window. Last dose apixaban >12h ago — check anti-Xa level. No hemorrhage on CT.", "status": "Active", "onset": "Acute", "icd10": "Z79.01" }
      ],
      "medications": [
        { "id": "med-1", "name": "Apixaban", "dose": "5mg", "route": "PO", "frequency": "BID", "status": "HOLD — last dose yesterday AM (>12h ago)", "prescriber": "Dr. Thomas Walsh, MD" },
        { "id": "med-2", "name": "Lisinopril", "dose": "20mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Thomas Walsh, MD" },
        { "id": "med-3", "name": "Metoprolol succinate", "dose": "50mg", "route": "PO", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Thomas Walsh, MD" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "09:42", "bp": "188/104", "hr": "88", "rr": "16", "temp": "36.8°C", "spo2": "97%", "pain": "0/10" }],
      "visits": [{
        "id": "visit-1", "type": "Stroke Alert — Emergency Visit",
        "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Stroke alert — NIHSS 18, LKW 40min, within tPA and thrombectomy window",
        "hpi": "75F with AF on apixaban brought by EMS after husband witnessed sudden onset global aphasia and right hemiplegia at 09:02. Door-to-CT: 18 minutes. NIHSS 18 (6 language + 4 motor arm + 4 motor leg + 2 gaze + 2 facial). Non-contrast CT head: no hemorrhage, no established large territory infarction (ASPECTS 9/10). CTA head/neck: left M1 occlusion. Time to tPA decision: 28 min from door.\n\ntPA ELIGIBILITY CHECKLIST:\n✓ Ischemic stroke diagnosis\n✓ LKW <4.5 hours (40 min)\n✓ No hemorrhage on CT\n✓ NIHSS ≥4 (NIHSS 18)\n✓ BP <185/110 after treatment (labetalol given — BP now 178/98)\n✗ Anticoagulation: apixaban — LAST DOSE >12H AGO — check anti-Xa. If anti-Xa level <0.5 IU/mL, tPA permissible per AHA/ASA 2023 guidelines\n✓ No recent surgery, trauma, GI bleed\n✓ Age ≥18 (75yo)\n\nLVO THROMBECTOMY: Left M1 LVO + NIHSS 18 + ASPECTS 9 = STRONG CANDIDATE for mechanical thrombectomy up to 24h from LKW if penumbra present on perfusion imaging.",
        "assessment": "Give tPA alteplase 0.9mg/kg (max 90mg) IV while activating neurointerventional radiology for thrombectomy. Both treatments are additive — do not delay tPA waiting for thrombectomy, do not delay thrombectomy because tPA was given. BP target <185/110 before tPA, <180/105 during infusion.",
        "plan": "Labetalol 10mg IV for BP (target <185/110 pre-tPA). Anti-Xa level STAT. If anti-Xa <0.5 → give tPA. Alteplase 0.9mg/kg IV (7.5mg bolus then 67.5mg over 60min for 75kg). Activate IR for thrombectomy (LKWT <24h, NIHSS 18, ASPECTS 9, perfusion mismatch). Neurology/stroke attending at bedside. ICU post-procedure. Aspirin held x24h post-tPA. Continuous BP, neuro monitoring."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "09:50",
        "status": "Final", "orderedBy": "Dr. Attending", "accession": "LAB-229145",
        "collected": "03/15/2026 09:48", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "STROKE LABS — STAT", "results": [
            { "test": "Glucose", "value": "112", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "INR/PT", "value": "1.1", "unit": "", "range": "<1.7 for tPA", "flag": "" },
            { "test": "aPTT", "value": "28", "unit": "sec", "range": "25-35", "flag": "" },
            { "test": "Anti-Xa (apixaban)", "value": "0.18", "unit": "IU/mL", "range": "<0.5 = tPA permissible", "flag": "" },
            { "test": "Platelets", "value": "218", "unit": "x10³/µL", "range": ">100k for tPA", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "12-16", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "CT Head Without Contrast — STAT",
          "date": "03/15/2026", "time": "09:52", "orderedBy": "Dr. Attending",
          "findings": "No hemorrhage. No established large territory infarction. Subtle loss of gray-white differentiation left MCA territory (early ischemic change). ASPECTS 9/10. No midline shift.",
          "impression": "No hemorrhage. Early left MCA ischemia. tPA eligible. ASPECTS 9.", "critical": true },
        { "id": "img-2", "type": "CTA Head and Neck",
          "date": "03/15/2026", "time": "09:55", "orderedBy": "Dr. Attending",
          "findings": "Left M1 segment occlusion — abrupt cutoff with no distal flow. Proximal MCA territory at risk. Moderate collateral filling. Carotid arteries patent bilaterally. No proximal dissection.",
          "impression": "Left M1 LVO. Thrombectomy candidate. Activate neurointerventional radiology.", "critical": true }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Post-thrombectomy day 1 — TICI 2b reperfusion. NIHSS improved from 18 to 8.",
        "diagnosis": "Acute Left MCA Ischemic Stroke — Post-tPA + Thrombectomy (TICI 2b)"
      },
      "problems": [
        { "id": "prob-1", "description": "Post-thrombectomy day 1. TICI 2b reperfusion (>50% territory). NIHSS improved 18→8. Aphasia partially improved — expressive > receptive.", "status": "Improving", "onset": "Acute", "icd10": "I63.512" },
        { "id": "prob-2", "description": "Hemorrhagic transformation risk — 24h post-tPA CT mandatory before restarting anticoagulation", "status": "At Risk", "onset": "Acute", "icd10": "I61.9" },
        { "id": "prob-3", "description": "Atrial fibrillation — restart apixaban at 48-72h post-stroke IF no hemorrhagic transformation AND stroke not large territory (risk of hemorrhagic conversion)", "status": "Active", "onset": "Chronic", "icd10": "I48.91" },
        { "id": "prob-4", "description": "Dysphagia screen — failed bedside swallow. NPO. Speech/Language Pathology consult. Aspiration risk.", "status": "Active", "onset": "Acute", "icd10": "R13.10" }
      ],
      "medications": [
        { "id": "med-1", "name": "Aspirin", "dose": "81mg", "route": "PO", "frequency": "Daily — started 24h post-tPA", "status": "Active", "prescriber": "Dr. Neurology" },
        { "id": "med-2", "name": "Atorvastatin", "dose": "80mg", "route": "PO", "frequency": "Nightly — high-intensity statin for all ischemic stroke", "status": "Active", "prescriber": "Dr. Neurology" },
        { "id": "med-3", "name": "Apixaban", "dose": "5mg", "route": "PO", "frequency": "BID — HOLD x72h, restart after hemorrhagic transformation excluded on MRI", "status": "HOLD", "prescriber": "Dr. Neurology" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "06:00", "bp": "158/88", "hr": "82", "rr": "14", "temp": "37.1°C", "spo2": "97%", "pain": "1/10" }],
      "visits": [{
        "id": "visit-2", "type": "Neurology Stroke Unit Note",
        "date": "03/16/2026", "provider": "Dr. Neurology Attending",
        "cc": "Post-thrombectomy day 1 — NIHSS 8, monitoring for hemorrhagic transformation",
        "hpi": "Patient had successful thrombectomy with TICI 2b reperfusion (>50% territory reperfused). 24h post-tPA non-contrast CT shows petechial hemorrhagic transformation (HI-1) — expected, not symptomatic, does NOT preclude anticoagulation restart.\n\nKEY STROKE SECONDARY PREVENTION DECISIONS:\n1. Anticoagulation (AF): Restart apixaban at 72h given HI-1 (petechial only, not parenchymal hematoma). For large infarcts or PH2, delay 2-4 weeks.\n2. BP: Target <140/90 after 24h (permissive hypertension in first 24h to preserve penumbra — then normalize).\n3. Statin: High-intensity (atorvastatin 80mg) for all ischemic stroke regardless of LDL.\n4. Cardiac monitoring: 30-day cardiac event monitor to detect paroxysmal AF if mechanism unclear.\n5. Swallow: Failed screen — NPO, NG tube, SLP formal evaluation.",
        "assessment": "Good early neurologic recovery. Restart anticoagulation at 72h. PT/OT/SLP rehabilitation. Stroke secondary prevention bundle.",
        "plan": "Restart apixaban at 72h. Aspirin bridge until then. High-intensity statin. SLP swallow eval. PT/OT daily. 24h BP target <140/90. Cardiac telemetry x72h then 30-day cardiac monitor (Zio patch). Echocardiogram. LDL fasting. Carotid imaging (already done — carotids patent). Discharge to inpatient rehab. Outpatient neurology in 4 weeks."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "06:00",
        "status": "Final", "orderedBy": "Dr. Neurology", "accession": "LAB-229146",
        "collected": "03/16/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "LIPIDS AND METABOLIC", "results": [
            { "test": "LDL", "value": "128", "unit": "mg/dL", "range": "<70 post-stroke", "flag": "H" },
            { "test": "Total Cholesterol", "value": "198", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "HDL", "value": "42", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "HbA1c", "value": "5.9", "unit": "%", "range": "<5.7", "flag": "H" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-3", "type": "CT Head Without Contrast — 24h Post-tPA",
          "date": "03/16/2026", "time": "09:30", "orderedBy": "Dr. Neurology",
          "findings": "Petechial hemorrhagic transformation (HI-1) within left MCA territory — small punctate hyperdensities without mass effect. No parenchymal hematoma (PH1 or PH2). No new hemorrhage outside infarct territory. Evolving left MCA infarction — now well-defined.",
          "impression": "HI-1 hemorrhagic transformation — expected post-tPA/thrombectomy, not symptomatic. Can restart anticoagulation at 72h. Left MCA infarction established.", "critical": false }
      ]
    }
  },
  "references": [
    { "id": "AHA-Stroke-2023", "title": "2023 AHA/ASA Guideline for the Early Management of Patients with Acute Ischemic Stroke", "authors": "Kleindorfer DO, Towfighi A, Chaturvedi S, et al.", "journal": "Stroke", "year": 2023, "doi": "10.1161/STR.0000000000000436", "url": "https://www.ahajournals.org/doi/10.1161/STR.0000000000000436", "openAccess": true, "validates": ["tPA eligibility criteria", "Anti-Xa threshold for tPA on DOACs", "BP management", "LVO thrombectomy criteria"] },
    { "id": "StatPearls-Stroke", "title": "Acute Ischemic Stroke", "authors": "Tadi P, Lui F", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK535369/", "openAccess": true, "validates": ["NIHSS scoring", "tPA protocol", "Secondary prevention bundle"] }
  ]
};
