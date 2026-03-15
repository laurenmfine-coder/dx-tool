/* emr-data/rheumatoid-arthritis-new.js
   Rheumatoid Arthritis — New Diagnosis, DMARD Initiation
   Category: musculoskeletal | Acuity: ESI-3
   Settings: Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Yuki Nakamura",
      "patientHPI": "My hands and wrists have been stiff and painful every morning for the past three months. The stiffness lasts for more than an hour before it gets better. Both hands are swollen. My doctor sent me to see you because my rheumatoid factor was positive.",
      "dob": "05/18/1978", "age": "47", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-331847", "language": "English/Japanese", "race": "Asian",
      "phone": "(503) 555-1847", "email": "y.nakamura@email.com",
      "address": "4412 NE Glisan St, Portland, OR 97213",
      "insurance": "Regence Blue Shield", "pcp": "Dr. Sarah Chen, MD",
      "pharmacy": "Fred Meyer — Glisan St",
      "emergencyContact": { "name": "Kenji Nakamura", "phone": "(503) 555-6622", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "Sulfa drugs", "reaction": "Rash", "severity": "Mild", "type": "Drug" }],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" },
      { "name": "COVID-19 — up to date", "date": "2024", "lot": "", "site": "" }
    ],
    "familyHistory": ["Mother: rheumatoid arthritis", "Maternal aunt: systemic lupus erythematosus"],
    "socialHistory": [
      ["Work", "Software engineer — prolonged keyboard use, noting increasing difficulty with fine motor tasks"],
      ["Smoking", "Never — important: smoking is a major RA risk factor and worsens disease"],
      ["Alcohol", "Rare"],
      ["Pregnancy", "No current plans for pregnancy — important for methotrexate counseling"]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "47F — new diagnosis RA — bilateral symmetric polyarthritis MCPs/wrists, morning stiffness >1h, RF positive, anti-CCP 182 — 2010 ACR/EULAR criteria met — starting methotrexate",
        "diagnosis": "Rheumatoid Arthritis — New Diagnosis — DMARD Initiation (Methotrexate)"
      },
      "problems": [
        { "id": "prob-1", "description": "Rheumatoid arthritis — 2010 ACR/EULAR criteria: ≥10 points needed. Score 9/10: ≥6 small joints involved (5pts) + anti-CCP >100 (3pts) + morning stiffness >60 min (1pt) + symptom duration >6 weeks (1pt) = meets criteria.", "status": "Active", "onset": "Subacute", "icd10": "M05.9" },
        { "id": "prob-2", "description": "Disease activity — DAS28 score 4.8 (moderate-high activity). Early initiation of csDMARD (methotrexate) is standard of care — treat-to-target strategy.", "status": "Active", "onset": "Subacute", "icd10": "M05.9" },
        { "id": "prob-3", "description": "Erosive disease risk — anti-CCP positive (high titer 182 U/mL) + RF positive = high risk for erosive/destructive disease. Early aggressive treatment critical to prevent joint damage.", "status": "Active", "onset": "Subacute", "icd10": "M05.9" },
        { "id": "prob-4", "description": "Cardiovascular risk — RA is an independent CV risk factor (inflammation accelerates atherosclerosis). Baseline lipid panel, BP control, smoking cessation essential.", "status": "Active", "onset": "Chronic", "icd10": "Z87.891" }
      ],
      "medications": [
        { "id": "med-1", "name": "Methotrexate (MTX)", "dose": "15mg", "route": "PO", "frequency": "WEEKLY (not daily — weekly dosing. Fatal errors have occurred with daily dosing.)", "status": "NEW — starting today", "prescriber": "Dr. Rheumatologist" },
        { "id": "med-2", "name": "Folic Acid", "dose": "1mg", "route": "PO", "frequency": "Daily (6 days/week — omit MTX day OR daily) — reduces MTX toxicity (mucositis, hepatotoxicity, cytopenias) WITHOUT reducing efficacy", "status": "NEW — start with MTX", "prescriber": "Dr. Rheumatologist" },
        { "id": "med-3", "name": "Prednisone", "dose": "10mg", "route": "PO", "frequency": "Daily — bridging therapy while waiting for MTX to take effect (4-8 weeks). Taper over 3 months.", "status": "NEW — short-term bridge", "prescriber": "Dr. Rheumatologist" },
        { "id": "med-4", "name": "Naproxen", "dose": "500mg", "route": "PO", "frequency": "BID PRN flares — with omeprazole (GI protection)", "status": "NEW — PRN only", "prescriber": "Dr. Rheumatologist" },
        { "id": "med-5", "name": "Omeprazole", "dose": "20mg", "route": "PO", "frequency": "Daily — GI protection with NSAID use", "status": "NEW", "prescriber": "Dr. Rheumatologist" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "14:00", "bp": "122/78", "hr": "72", "rr": "16", "temp": "36.9°C", "spo2": "99%", "pain": "5/10" }],
      "visits": [{
        "id": "visit-1", "type": "Rheumatology New Patient Visit", "date": "03/15/2026", "provider": "Dr. Rheumatologist",
        "cc": "New RA diagnosis — DMARD initiation, treat-to-target",
        "hpi": "47F referred for bilateral symmetric polyarthritis x3 months. Morning stiffness >1h. Bilateral MCP 2-5, PIP 2-4, wrists affected bilaterally. Ankles mildly involved. No rash, no serositis, no sicca symptoms, no photosensitivity (lupus excluded clinically). RF 142 IU/mL (positive), anti-CCP 182 U/mL (strongly positive — high specificity for RA, predicts erosive disease). X-rays bilateral hands/wrists: periarticular osteopenia, no erosions yet (early disease).\n\n2010 ACR/EULAR CLASSIFICATION CRITERIA:\n- Joint involvement: 6+ small joints = 5 points\n- Serology: anti-CCP >3x ULN = 3 points\n- Symptom duration: >6 weeks = 1 point\n- Acute phase reactants: elevated CRP = 1 point\nTOTAL: 10/10 = DEFINITE RA\n\nMETHOTREXATE COUNSELING:\n- WEEKLY dosing — critical safety point: daily MTX causes fatal bone marrow suppression\n- Take on the SAME DAY each week\n- Folic acid daily reduces toxicity\n- Avoid alcohol (hepatotoxicity)\n- Use contraception — teratogenic (Category X). If patient desires pregnancy: stop MTX 3 months before conception\n- Labs Q4-8 weeks: CBC, CMP (hepatotoxicity monitoring)\n- HOLD if: infection, surgery, renal failure\n\nTREAT-TO-TARGET: Reassess DAS28 in 3 months. If not at low disease activity → step up (add hydroxychloroquine, sulfasalazine, or biologic — TNF inhibitor).",
        "assessment": "New RA — high-risk (anti-CCP positive, moderate-high disease activity). Starting MTX + folic acid + short prednisone bridge. Treat-to-target approach. Baseline labs today.",
        "plan": "Methotrexate 15mg PO weekly (day of week: Mondays). Folic acid 1mg daily. Prednisone 10mg daily x4 weeks → 7.5mg x4 weeks → 5mg x4 weeks → stop. Naproxen 500mg BID PRN + omeprazole. Baseline labs today. Labs Q4 weeks for 3 months, then Q8 weeks. STOP alcohol while on MTX. Contraception counseling (MTX teratogenic — stop 3 months before attempting pregnancy). Return in 6 weeks — DAS28 reassessment. Hand therapy referral. Smoking cessation if relevant. Vaccines: pneumococcal, zoster (live vaccine BEFORE MTX — cannot give live vaccines on MTX)."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "13:30", "status": "Final", "orderedBy": "Dr. Rheumatologist",
        "accession": "LAB-331847", "collected": "03/15/2026 13:25", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "RA SEROLOGIES", "results": [
            { "test": "Rheumatoid Factor (RF)", "value": "142", "unit": "IU/mL", "range": "<14 negative", "flag": "H" },
            { "test": "Anti-CCP (anti-cyclic citrullinated peptide)", "value": "182", "unit": "U/mL", "range": "<20 negative; >100 = high specificity for RA", "flag": "H" },
            { "test": "ANA", "value": "Negative", "unit": "", "range": "Negative (excludes lupus overlap)", "flag": "" },
            { "test": "Anti-dsDNA", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]},
          { "name": "INFLAMMATORY MARKERS", "results": [
            { "test": "CRP", "value": "28", "unit": "mg/L", "range": "<10", "flag": "H" },
            { "test": "ESR", "value": "58", "unit": "mm/hr", "range": "<20", "flag": "H" },
            { "test": "Uric Acid", "value": "4.2", "unit": "mg/dL", "range": "2.4-6.0 (gout excluded)", "flag": "" }
          ]},
          { "name": "METHOTREXATE BASELINE", "results": [
            { "test": "CBC", "value": "WBC 7.8, Hgb 12.4, Plt 312 — normal", "unit": "", "range": "Normal", "flag": "" },
            { "test": "AST", "value": "22", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALT", "value": "18", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.5-1.1", "flag": "" },
            { "test": "Hepatitis B surface antigen", "value": "Negative (required before MTX)", "unit": "", "range": "Negative", "flag": "" }
          ]},
          { "name": "CARDIOVASCULAR RISK", "results": [
            { "test": "LDL", "value": "118", "unit": "mg/dL", "range": "<100 ideal (RA = CV risk)", "flag": "H" },
            { "test": "Total Cholesterol", "value": "188", "unit": "mg/dL", "range": "<200", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "X-Ray — Bilateral Hands and Wrists",
          "date": "03/15/2026", "time": "13:00", "orderedBy": "Dr. Rheumatologist",
          "findings": "Bilateral periarticular osteopenia at MCPs and PIPs. Mild soft tissue swelling. No erosions identified. No joint space narrowing. No subluxation.",
          "impression": "Early RA changes — no erosions yet. Early treatment critical to prevent progression to erosive disease.", "critical": false }
      ]
    },
    "ed": {
      "patient": { "chiefComplaint": "Not applicable — clinic visit only", "diagnosis": "Clinic" },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "ACR-RA-2021", "title": "2021 American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis", "authors": "Fraenkel L, Bathon JM, England BR, et al.", "journal": "Arthritis & Rheumatology", "year": 2021, "doi": "10.1002/art.41752", "url": "https://www.rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines/Rheumatoid-Arthritis", "openAccess": true, "validates": ["MTX as first-line csDMARD", "Treat-to-target", "Folic acid supplementation", "Biologic escalation criteria"] },
    { "id": "StatPearls-RA", "title": "Rheumatoid Arthritis", "authors": "Dunn JP", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK441999/", "openAccess": true, "validates": ["2010 ACR/EULAR criteria", "Anti-CCP significance", "MTX dosing (weekly)", "Monitoring parameters"] }
  ]
};
