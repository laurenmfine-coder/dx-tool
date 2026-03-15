/* emr-data/new-onset-atrial-fibrillation.js
   New-Onset Atrial Fibrillation — Rate vs Rhythm, CHA2DS2-VASc, Cardioversion
   Category: cardiology | Acuity: ESI-2
   Settings: ED, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "James Callahan",
      "patientHPI": "My heart has been pounding and racing all morning. It came on suddenly about four hours ago while I was drinking my coffee. I feel lightheaded and a little short of breath. I've never had anything like this before.",
      "dob": "10/22/1960", "age": "65", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-228561", "language": "English", "race": "White",
      "phone": "(617) 555-8561", "email": "j.callahan@email.com",
      "address": "14 Beacon St, Boston, MA 02108",
      "insurance": "Blue Cross Blue Shield", "pcp": "Dr. Michael Sullivan, MD",
      "pharmacy": "CVS — Beacon St",
      "emergencyContact": { "name": "Katherine Callahan", "phone": "(617) 555-4433", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Father: coronary artery disease, MI at 58", "Mother: atrial fibrillation, stroke at 70"],
    "socialHistory": [
      ["Caffeine", "4-5 cups of coffee daily — caffeine trigger for AF"],
      ["Alcohol", "2-3 drinks nightly — alcohol is a common AF trigger ('Holiday Heart')"],
      ["Smoking", "Former — quit 10 years ago, 20 pack-years"],
      ["Exercise", "Moderately active — plays golf 2x/week"],
      ["Hypertension", "Diagnosed 3 years ago — on lisinopril 10mg daily"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "65M — sudden onset palpitations + mild dyspnea x4h — HR 142 irregular — EKG confirms AF with RVR — onset within 12h — cardioversion candidate",
        "diagnosis": "New-Onset Atrial Fibrillation with Rapid Ventricular Response (RVR) — Hemodynamically Stable"
      },
      "problems": [
        { "id": "prob-1", "description": "New-onset AF with RVR — HR 142, irregular. Onset <12h (4h by history). Hemodynamically stable (BP 136/84). Cardioversion candidate (onset <12h = low thromboembolic risk for immediate cardioversion without anticoagulation bridge per guidelines).", "status": "Active", "onset": "Acute", "icd10": "I48.0" },
        { "id": "prob-2", "description": "CHA2DS2-VASc score = 2 (age ≥65 = 1pt, HTN = 1pt). Score ≥2 in males = anticoagulation indicated. Will need long-term anticoagulation even if cardioversion successful.", "status": "Active", "onset": "Acute", "icd10": "I48.0" },
        { "id": "prob-3", "description": "CHADS2-VASc calculation: C=0, H=1(HTN), A2=0, D=0, S2=0, V=0, A=1(age 65), Sc=0 → TOTAL 2", "status": "Active", "onset": "Acute", "icd10": "I48.0" },
        { "id": "prob-4", "description": "Thyroid function — TSH needed to exclude hyperthyroidism as trigger (new AF workup)", "status": "Active", "onset": "Acute", "icd10": "E05.90" },
        { "id": "prob-5", "description": "Triggers: caffeine (4-5 cups/day), alcohol (2-3 drinks nightly — Holiday Heart phenomenon). Lifestyle counseling essential.", "status": "Active", "onset": "Chronic", "icd10": "F10.10" }
      ],
      "medications": [
        { "id": "med-1", "name": "Lisinopril", "dose": "10mg", "route": "PO", "frequency": "Daily", "status": "Active — continue", "prescriber": "Dr. Michael Sullivan, MD" },
        { "id": "med-2", "name": "Metoprolol tartrate", "dose": "5mg IV", "route": "IV", "frequency": "Q5 min x3 doses PRN for rate control (target HR <100)", "status": "Active — for rate control", "prescriber": "Dr. Attending" },
        { "id": "med-3", "name": "Heparin", "dose": "Bolus per weight-based protocol", "route": "IV", "frequency": "Continuous infusion — before cardioversion if onset unclear or >12h", "status": "HOLD — onset <12h, cardioversion planned", "prescriber": "Dr. Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "11:00", "bp": "136/84", "hr": "142", "rr": "20", "temp": "37.0°C", "spo2": "96%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "New-onset AF with RVR — rate vs rhythm decision",
        "hpi": "65M with HTN presents with 4-hour history of sudden-onset palpitations and mild dyspnea. HR 142, irregularly irregular. EKG confirms AF with RVR — no flutter, no WPW (no delta waves). No chest pain. BP 136/84 — hemodynamically STABLE.\n\nAF MANAGEMENT FRAMEWORK:\n1. HEMODYNAMICALLY UNSTABLE? (hypotension, chest pain, pulmonary edema, altered mental status)\n   → Immediate ELECTRICAL cardioversion (synchronized DC cardioversion)\n   → This patient: STABLE — medical management first\n\n2. ONSET <48h? (ideally <12h)\n   → Cardioversion WITHOUT anticoagulation bridge if onset documented <12h\n   → MUST anticoagulate AFTER cardioversion regardless (prevents post-cardioversion thrombus from 'atrial stunning')\n   → This patient: onset 4h — cardioversion appropriate\n\n3. ONSET >48h OR UNKNOWN?\n   → 3 weeks anticoagulation before cardioversion OR TEE to exclude LAA thrombus\n   → 4 weeks anticoagulation after cardioversion regardless\n\n4. RATE vs RHYTHM CONTROL?\n   → Both acceptable for most patients (AFFIRM trial)\n   → Rhythm control may be preferred: first episode, young patient, symptomatic, heart failure\n   → This patient: first episode + symptomatic → attempt rhythm control\n\nCHA2DS2-VASc = 2 → long-term anticoagulation REQUIRED (DOAC preferred over warfarin)\n\nTHYROID: TSH mandatory in new-onset AF — hyperthyroid can cause persistent AF refractory to cardioversion.",
        "assessment": "Hemodynamically stable new-onset AF, onset <12h. Attempt pharmacologic cardioversion (amiodarone or flecainide — depends on structural heart disease). If fails, synchronized electrical cardioversion. Start DOAC regardless of cardioversion outcome (CHA2DS2-VASc 2). Rate control in interim with metoprolol.",
        "plan": "Metoprolol 5mg IV for rate control while preparing for cardioversion (goal HR <110 for stable AF). ECHO to assess LV function (needed before flecainide — avoid if structural heart disease). If EF normal: flecainide 200mg PO (pill-in-pocket) or IV amiodarone 150mg over 10 min. Electrical cardioversion if pharmacologic fails. Start apixaban (CHA2DS2-VASc 2) IMMEDIATELY post-cardioversion. TSH, echo, Holter monitor outpatient. AF clinic referral. Lifestyle: reduce alcohol and caffeine. Cardiology follow-up in 2 weeks."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "11:20", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-228561", "collected": "03/15/2026 11:15", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "AF WORKUP", "results": [
            { "test": "TSH", "value": "1.8", "unit": "mIU/L", "range": "0.4-4.0 (hyperthyroid excluded)", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Magnesium", "value": "1.9", "unit": "mg/dL", "range": "1.7-2.2", "flag": "" },
            { "test": "TSH", "value": "1.8", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" },
            { "test": "BNP", "value": "142", "unit": "pg/mL", "range": "<100 (mildly elevated — tachycardia effect)", "flag": "H" },
            { "test": "Troponin I", "value": "0.01", "unit": "ng/mL", "range": "<0.04", "flag": "" },
            { "test": "CBC", "value": "WBC 8.2, Hgb 14.8, Plt 222 — normal", "unit": "", "range": "Normal", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "EKG 12-Lead",
          "date": "03/15/2026", "time": "11:05", "orderedBy": "Dr. Attending",
          "findings": "Irregularly irregular rhythm, no distinct P waves, fibrillatory baseline, ventricular rate 142 bpm. QRS narrow (85ms). No delta waves. No ST changes. No LVH. QTc 420ms.",
          "impression": "Atrial fibrillation with rapid ventricular response. No evidence of WPW or pre-excitation. QTc normal — safe for antiarrhythmic therapy.", "critical": false },
        { "id": "img-2", "type": "Transthoracic Echocardiogram (urgent)",
          "date": "03/15/2026", "time": "12:00", "orderedBy": "Dr. Attending",
          "findings": "Left ventricular ejection fraction 60% — PRESERVED. No wall motion abnormalities. No significant valvular disease. Left atrium mildly enlarged (4.2cm). No pericardial effusion.",
          "impression": "Preserved EF. No structural heart disease. EF normal — flecainide safe to use for cardioversion.", "critical": false }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Successfully cardioverted to sinus rhythm with IV amiodarone — HR 72 NSR — apixaban started",
        "diagnosis": "Atrial Fibrillation — Successfully Cardioverted — Sinus Rhythm — Apixaban Initiated"
      },
      "problems": [
        { "id": "prob-1", "description": "AF — cardioverted to NSR with IV amiodarone 150mg. Currently in sinus rhythm HR 72. Apixaban 5mg BID started immediately post-cardioversion (atrial stunning risk x4 weeks).", "status": "Resolved (in sinus)", "onset": "Acute", "icd10": "I48.0" },
        { "id": "prob-2", "description": "Long-term anticoagulation — apixaban 5mg BID indefinitely (CHA2DS2-VASc 2). Even if AF does not recur, risk of recurrence in first year is ~50%.", "status": "Active", "onset": "Acute", "icd10": "I48.0" }
      ],
      "medications": [
        { "id": "med-1", "name": "Apixaban (Eliquis)", "dose": "5mg", "route": "PO", "frequency": "BID — LONG TERM. CHA2DS2-VASc 2.", "status": "Active — started post-cardioversion", "prescriber": "Dr. Attending" },
        { "id": "med-2", "name": "Metoprolol succinate", "dose": "25mg", "route": "PO", "frequency": "Daily — rate control for any AF recurrence + ventricular rate protection", "status": "NEW — starting at discharge", "prescriber": "Dr. Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "15:00", "bp": "128/78", "hr": "72", "rr": "16", "temp": "37.0°C", "spo2": "98%", "pain": "0/10" }],
      "visits": [{
        "id": "visit-2", "type": "Observation Note — Post Cardioversion", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Successfully cardioverted — discharge planning",
        "hpi": "IV amiodarone 150mg over 10 min → cardioverted to sinus rhythm within 45 minutes. Currently HR 72, NSR confirmed on telemetry x3h. Asymptomatic. Apixaban 5mg given first dose. Starting metoprolol at discharge for rate protection if AF recurs.\n\nDISCHARGE TEACHING:\n- Apixaban: take with food, DO NOT skip doses, no NSAIDs (bleeding risk)\n- If palpitations recur → go to ED\n- Alcohol: MUST reduce (major modifiable AF trigger)\n- Caffeine: moderate (4-5 cups → 1-2 cups)\n- Follow-up: cardiology 2 weeks, Holter monitor to document AF burden",
        "assessment": "Successful cardioversion. Discharge on apixaban + metoprolol. Cardiology follow-up.",
        "plan": "Discharge home. Apixaban 5mg BID indefinitely. Metoprolol succinate 25mg daily. Lifestyle: alcohol reduction, caffeine reduction. Cardiology in 2 weeks. Holter monitor (outpatient). Echo outpatient (if not done adequately today). Return to ED if palpitations/syncope/dyspnea recur."
      }],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    { "id": "AHA-AF-2023", "title": "2023 ACC/AHA/ACCP/HRS Guideline for Diagnosis and Management of Atrial Fibrillation", "authors": "Joglar JA, Chung MK, Armbruster AL, et al.", "journal": "Circulation", "year": 2024, "doi": "10.1161/CIR.0000000000001193", "url": "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193", "openAccess": true, "validates": ["CHA2DS2-VASc scoring", "Cardioversion timing (<12h, <48h)", "Rate vs rhythm control", "DOAC selection", "Anticoagulation post-cardioversion"] }
  ]
};
