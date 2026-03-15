/* emr-data/guillain-barre.js
   Guillain-Barré Syndrome — Progressive Ascending Weakness
   Category: neurology | Acuity: ESI-2
   Settings: ED, Floor, ICU
   Priority 1 gap fill — neurology
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Fatima Al-Hassan",
      "patientHPI": "My legs have been getting weaker over the past week and a half. It started with my feet feeling tingly and now I can barely walk. The weakness is moving up — today my hands feel weak too. Three weeks ago I had a bad stomach flu.",
      "dob": "07/19/1988",
      "age": "37",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-664218",
      "language": "English",
      "race": "Middle Eastern",
      "phone": "(713) 555-8218",
      "email": "f.alhassan@email.com",
      "address": "7845 Westheimer Rd, Houston, TX 77063",
      "insurance": "Blue Cross Blue Shield",
      "pcp": "Dr. Amir Siddiqui, MD",
      "pharmacy": "HEB Pharmacy — Westheimer",
      "emergencyContact": {
        "name": "Yusuf Al-Hassan",
        "phone": "(713) 555-3344",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      ["Living", "Lives with spouse and 2 children — was fully functional until 10 days ago"],
      ["Work", "Registered nurse — on leave since weakness began"],
      ["Recent illness", "Campylobacter gastroenteritis 3 weeks ago — confirmed stool culture, self-limited"],
      ["Smoking", "Never"],
      ["Alcohol", "Rare"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "37F, progressive ascending weakness x10 days, now bilateral leg and hand weakness, areflexia, preceded by Campylobacter gastroenteritis 3 weeks ago — ? GBS",
        "diagnosis": "Guillain-Barré Syndrome (GBS) — Acute Inflammatory Demyelinating Polyneuropathy (AIDP)"
      },
      "problems": [
        { "id": "prob-1", "description": "Guillain-Barré Syndrome (AIDP subtype) — ascending weakness, areflexia, albuminocytologic dissociation on LP, preceded by Campylobacter infection", "status": "Active", "onset": "Subacute", "icd10": "G61.0" },
        { "id": "prob-2", "description": "Progressive motor weakness — bilateral lower > upper extremities, ascending pattern", "status": "Active", "onset": "Subacute", "icd10": "G83.9" },
        { "id": "prob-3", "description": "Autonomic instability risk — GBS can cause blood pressure lability, bradycardia — continuous cardiac monitoring required", "status": "At Risk", "onset": "Subacute", "icd10": "G90.3" },
        { "id": "prob-4", "description": "Respiratory compromise risk — serial FVC monitoring required — intubation threshold FVC <20 mL/kg OR <15 mL/kg in context of rapid decline", "status": "At Risk", "onset": "Subacute", "icd10": "J96.09" },
        { "id": "prob-5", "description": "Recent Campylobacter jejuni gastroenteritis — most common identifiable trigger of GBS (C. jejuni lipooligosaccharide mimics ganglioside epitopes → molecular mimicry)", "status": "Resolved", "onset": "Recent", "icd10": "A04.5" }
      ],
      "medications": [
        { "id": "med-1", "name": "No chronic medications", "dose": "", "route": "", "frequency": "", "status": "Active", "prescriber": "" }
      ],
      "vitals": [
        { "date": "03/15/2026", "time": "16:00", "bp": "138/84", "hr": "94", "rr": "18", "temp": "37.0°C", "spo2": "99%", "pain": "2/10" }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Progressive ascending weakness x10 days — ? GBS",
          "hpi": "37-year-old female nurse with progressive ascending weakness beginning 10 days ago with bilateral foot tingling, now involving bilateral legs (unable to ambulate without assistance) and bilateral hand weakness. She had documented Campylobacter jejuni gastroenteritis 3 weeks ago, confirmed by stool culture, treated supportively. She reports no fever, no back pain, no bladder or bowel incontinence, no facial weakness, no swallowing difficulty, no shortness of breath at rest — but notes mild dyspnea when lying flat.\n\nNEUROLOGIC EXAM:\n- Strength: Lower extremities 2/5 bilaterally (MRC scale). Upper extremities 4/5 bilaterally.\n- Reflexes: Areflexia throughout — absent patellar, Achilles, and biceps reflexes bilaterally\n- Sensation: Decreased light touch bilateral feet/lower legs; proprioception impaired bilateral toes\n- Cranial nerves: Intact bilaterally. No facial droop. Swallowing intact.\n- Gait: Cannot walk independently\n\nBRIGHTON CRITERIA for GBS:\n✓ Bilateral flaccid limb weakness\n✓ Decreased or absent deep tendon reflexes in weak limbs\n✓ Monophasic course, interval between onset and nadir 12h-28d\n✓ CSF protein elevated with WBC <50 (albuminocytologic dissociation) — pending LP",
          "assessment": "GBS strongly suspected — Brighton criteria met. Admit to neurology floor with ICU-level monitoring. LP for albuminocytologic dissociation. Serial FVC every 4 hours (respiratory monitoring). Continuous cardiac monitoring for autonomic instability. Start IVIg (2g/kg over 2-5 days) once diagnosis confirmed — equally effective as PLEX. Neurology consult. DVT prophylaxis (high VTE risk in paralyzed patient).",
          "plan": "LP for CSF analysis (protein, cells, opening pressure). MRI spine to exclude compressive myelopathy (must rule out before LP if concern for cord compression). Serial FVC q4h — intubate if FVC <15-20 mL/kg or NIF worse than -20-25 cmH2O. Continuous telemetry — autonomic instability (BP swings, bradycardia) can be fatal. IVIg 0.4g/kg/day x5 days OR 1g/kg/day x2 days — ORDER ONCE DIAGNOSIS CONFIRMED. DVT prophylaxis — Lovenox (paralyzed = highest VTE risk). Foley if bladder dysfunction. Neurology. PT/OT early."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "16:30",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-664218",
          "collected": "03/15/2026 16:25",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and CSF",
          "groups": [
            {
              "name": "CBC AND METABOLIC",
              "results": [
                { "test": "WBC", "value": "8.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
                { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
                { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.5-1.1", "flag": "" },
                { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" }
              ]
            },
            {
              "name": "CSF ANALYSIS (LUMBAR PUNCTURE)",
              "results": [
                { "test": "Opening Pressure", "value": "14", "unit": "cm H2O", "range": "7-18", "flag": "" },
                { "test": "CSF Protein", "value": "182", "unit": "mg/dL", "range": "15-45", "flag": "H" },
                { "test": "CSF WBC", "value": "3", "unit": "cells/µL", "range": "0-5", "flag": "" },
                { "test": "CSF Glucose", "value": "62", "unit": "mg/dL", "range": "45-80", "flag": "" },
                { "test": "CSF Appearance", "value": "Clear, colorless", "unit": "", "range": "Clear", "flag": "" },
                { "test": "Albuminocytologic Dissociation", "value": "YES — high protein, normal cells", "unit": "", "range": "Absent", "flag": "H" }
              ]
            },
            {
              "name": "ANTI-GANGLIOSIDE ANTIBODIES",
              "results": [
                { "test": "Anti-GM1 IgG", "value": "POSITIVE (high titer)", "unit": "", "range": "Negative", "flag": "H" },
                { "test": "Anti-GQ1b IgG", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
              ]
            },
            {
              "name": "PULMONARY FUNCTION — BEDSIDE",
              "results": [
                { "test": "FVC (Forced Vital Capacity)", "value": "2.1", "unit": "L (predicted 3.8L = 55%)", "range": ">70% predicted", "flag": "L" },
                { "test": "NIF (Neg Inspiratory Force)", "value": "-28", "unit": "cmH2O", "range": "worse than -25 = concern", "flag": "L" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "MRI Spine — Cervical and Thoracic Without Contrast",
          "date": "03/15/2026",
          "time": "17:30",
          "orderedBy": "Dr. Attending",
          "findings": "No evidence of cord compression, epidural hematoma, or abscess. Normal cord signal throughout. No disc herniation causing cord compromise. No enhancing lesion. Nerve roots appear slightly thickened in the cauda equina (lumbar) region — consistent with GBS.",
          "impression": "No compressive myelopathy. Subtle cauda equina nerve root thickening consistent with GBS. MRI spine excludes structural/surgical emergency.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 GBS — IVIg day 2 of 5 — FVC trending down, ICU transfer for respiratory monitoring",
        "diagnosis": "GBS — AIDP — Respiratory monitoring, IVIg therapy"
      },
      "problems": [
        { "id": "prob-1", "description": "GBS AIDP — IVIg therapy day 2 of 5. Weakness at nadir or still progressing — monitoring FVC closely", "status": "Active", "onset": "Subacute", "icd10": "G61.0" },
        { "id": "prob-2", "description": "FVC declining — 2.1L → 1.7L — approaching intubation threshold (1.2L = 20 mL/kg for 60kg patient). Transfer to ICU.", "status": "Worsening", "onset": "Subacute", "icd10": "J96.09" },
        { "id": "prob-3", "description": "Autonomic instability — BP lability: spikes to 170/100, then drops to 90/60. Heart rate variability.", "status": "Active", "onset": "Acute", "icd10": "G90.3" },
        { "id": "prob-4", "description": "DVT prophylaxis — Lovenox 40mg SQ daily (highest risk — paralyzed patient)", "status": "Active", "onset": "Acute", "icd10": "Z79.01" },
        { "id": "prob-5", "description": "Pain — neuropathic pain (burning, allodynia) in lower extremities — gabapentin started", "status": "Active", "onset": "Subacute", "icd10": "G62.9" }
      ],
      "medications": [
        { "id": "med-1", "name": "IVIg (Gamunex)", "dose": "0.4g/kg (24g) IV", "route": "IV", "frequency": "Daily x5 days (day 2 of 5)", "status": "Active", "prescriber": "Dr. Neurology Attending" },
        { "id": "med-2", "name": "Enoxaparin (Lovenox)", "dose": "40mg SQ", "route": "SQ", "frequency": "Daily", "status": "Active", "prescriber": "Dr. Neurology Attending" },
        { "id": "med-3", "name": "Gabapentin", "dose": "300mg", "route": "PO", "frequency": "TID", "status": "Active — neuropathic pain", "prescriber": "Dr. Neurology Attending" },
        { "id": "med-4", "name": "Acetaminophen", "dose": "1000mg", "route": "PO/IV", "frequency": "Q6H PRN pain", "status": "Active", "prescriber": "Dr. Neurology Attending" }
      ],
      "vitals": [
        { "date": "03/17/2026", "time": "06:00", "bp": "148/92", "hr": "88", "rr": "20", "temp": "37.2°C", "spo2": "97%", "pain": "4/10" },
        { "date": "03/17/2026", "time": "10:00", "bp": "92/58", "hr": "72", "rr": "22", "temp": "37.2°C", "spo2": "96%", "pain": "4/10" }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Neurology ICU Note",
          "date": "03/17/2026",
          "provider": "Dr. Neurology Attending",
          "cc": "GBS day 3 — FVC declining, autonomic instability, ICU monitoring",
          "hpi": "Patient transferred to ICU for respiratory monitoring. FVC trending: 2.1 → 1.9 → 1.7L (now 28% predicted). NIF -22 cmH2O. Approaching intubation thresholds (Rule of 20s: FVC <20 mL/kg, NIF worse than -20 cmH2O, MIP worse than -30 cmH2O — any 2 of 3 → intubate).\n\nROULE OF 20-30s for intubation in GBS:\n- FVC <20 mL/kg → at 60kg: threshold = 1.2L (currently 1.7L — approaching)\n- NIF worse than -20 cmH2O (currently -22 — AT threshold)\n- MIP worse than -30 cmH2O\n\nAUTONOMIC INSTABILITY: BP swings 90/58 → 170/100 over hours. Avoid antihypertensives (BP drop can be precipitous). Avoid vasovagal triggers. Avoid succinylcholine (K+ release can cause fatal hyperkalemia in denervated muscle). Use ROCURONIUM if intubation needed.\n\nIVIG: Day 2 of 5. No steroids — RCTs show steroids do NOT help GBS and may worsen outcomes.",
          "assessment": "GBS at respiratory nadir — pre-emptive intubation planning. If FVC drops below 1.2L or patient develops dyspnea at rest, intubate early (easier when awake and cooperative than when in distress). IVIg continuing. Pain management. PT/OT deferred until respiratory stable.",
          "plan": "Serial FVC q2h — intubate if FVC <1.2L, NIF worse than -25, or O2 requirement. If intubating: use ROCURONIUM (not succinylcholine — risk of fatal hyperkalemia from K+ release in denervated muscle). Continue IVIg. DVT prophylaxis. Continuous telemetry. Treat autonomic instability conservatively — short-acting agents only (esmolol for HTN, phenylephrine for hypotension). Nutritional support — NG tube if unable to swallow. Neurology reassess daily. Supportive care — expect plateau then gradual recovery over weeks to months."
        }
      ],
      "labs": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Neurology Attending",
          "accession": "LAB-664219",
          "collected": "03/17/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "BEDSIDE PULMONARY FUNCTION",
              "results": [
                { "test": "FVC", "value": "1.7", "unit": "L (28% predicted)", "range": ">70% predicted", "flag": "L" },
                { "test": "NIF", "value": "-22", "unit": "cmH2O", "range": "better than -25 = safe", "flag": "L" },
                { "test": "Trend", "value": "DECLINING — was 2.1L on admission", "unit": "", "range": "", "flag": "H" }
              ]
            },
            {
              "name": "CBC AND METABOLIC",
              "results": [
                { "test": "Sodium", "value": "137", "unit": "mEq/L", "range": "136-145", "flag": "" },
                { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
                { "test": "WBC", "value": "9.1", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" }
              ]
            }
          ]
        }
      ],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "StatPearls-GBS",
      "title": "Guillain-Barré Syndrome",
      "authors": "Bukhman A, de Freitas Lacerda PR",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK532254/",
      "openAccess": true,
      "validates": ["Diagnostic criteria", "Brighton criteria", "IVIg vs PLEX", "Respiratory monitoring (Rule of 20s)", "Autonomic instability management"]
    },
    {
      "id": "StatPearls-GBS-Treatment",
      "title": "Guillain-Barré Syndrome Treatment",
      "authors": "Nguyen TP, Taylor RS",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK532254/",
      "openAccess": true,
      "validates": ["IVIg dosing", "No role for steroids", "Succinylcholine contraindication", "Rocuronium for intubation"]
    },
    {
      "id": "Brighton-GBS-2011",
      "title": "Brighton Collaboration Case Definition and Guidelines for Collection, Analysis, and Presentation of Immunization Safety Data: Guillain-Barré Syndrome",
      "authors": "Sejvar JJ, Kohl KS, Gidudu J, et al.",
      "journal": "Vaccine",
      "year": 2011,
      "doi": "10.1016/j.vaccine.2010.06.003",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3056023/",
      "openAccess": true,
      "validates": ["Brighton diagnostic criteria for GBS", "Diagnostic certainty levels"]
    }
  ]
};
