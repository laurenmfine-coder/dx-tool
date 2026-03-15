/* emr-data/pyelonephritis-sepsis.js
   Pyelonephritis with Sepsis Criteria — Antibiotic Selection, De-escalation
   Category: infectious | Acuity: ESI-2
   Settings: ED, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Grace Thompson",
      "patientHPI": "I've had burning with urination for three days and yesterday I started getting severe right flank pain and fever and chills. I also feel confused and weak. I have diabetes and I'm worried because this feels much worse than a regular UTI.",
      "dob": "06/22/1955", "age": "70", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-448812", "language": "English", "race": "Black/African American",
      "phone": "(770) 555-8812", "email": "",
      "address": "4421 Ponce De Leon Ave, Decatur, GA 30030",
      "insurance": "Medicare", "pcp": "Dr. Sandra Webb, MD",
      "pharmacy": "Walgreens — Ponce De Leon",
      "emergencyContact": { "name": "Michael Thompson", "phone": "(770) 555-4411", "relationship": "Son" }
    },
    "allergies": [
      { "allergen": "Sulfa", "reaction": "Rash", "severity": "Mild", "type": "Drug" },
      { "allergen": "Penicillin", "reaction": "Rash (reported childhood, no documentation)", "severity": "Unknown", "type": "Drug" }
    ],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Non-contributory"],
    "socialHistory": [
      ["Diabetes", "T2DM x18 years, HbA1c 8.4%, on metformin + insulin"],
      ["Recurrent UTI", "3 UTIs in past 2 years — always E. coli susceptible to ciprofloxacin previously"],
      ["Functional status", "Independent but walks slowly with cane"],
      ["Smoking", "Never"], ["Alcohol", "Rare"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "70F DM2 — 3-day dysuria + right flank pain + fever 39.4°C + altered mental status — qSOFA 2, sepsis criteria — E. coli bacteremia",
        "diagnosis": "Severe Pyelonephritis with Sepsis (Urosepsis) — E. coli — Antibiotic Selection with Allergy History"
      },
      "problems": [
        { "id": "prob-1", "description": "Urosepsis — pyelonephritis meeting sepsis criteria. qSOFA 2: altered mentation + RR ≥22. SIRS criteria met: fever, tachycardia, tachypnea, leukocytosis. Lactate 2.8 (borderline). Blood cultures pending. Start broad-spectrum antibiotics within 1 hour.", "status": "Active", "onset": "Acute", "icd10": "N10" },
        { "id": "prob-2", "description": "Antibiotic selection challenge: Sulfa allergy (TMP-SMX excluded) + Penicillin allergy (vague childhood rash — LOW RISK for cross-reactivity with cephalosporins <2%). In sepsis, treat and reassess. Ceftriaxone appropriate (cephalosporin, not PCN, low cross-reactivity risk in sepsis)", "status": "Active", "onset": "Acute", "icd10": "Z88.0" },
        { "id": "prob-3", "description": "Fluoroquinolone (ciprofloxacin) consideration: E. coli resistance rates ~20-30% in some areas — do NOT use empirically unless susceptibility confirmed. Prior susceptibility does NOT guarantee current susceptibility. Await cultures.", "status": "Active", "onset": "Acute", "icd10": "N10" },
        { "id": "prob-4", "description": "Metformin — HOLD immediately. Sepsis → renal hypoperfusion → AKI risk → lactic acidosis with metformin. Insulin sliding scale instead.", "status": "Active", "onset": "Acute", "icd10": "E11.9" }
      ],
      "medications": [
        { "id": "med-1", "name": "Ceftriaxone", "dose": "2g IV", "route": "IV", "frequency": "Q24H — empiric. Penicillin allergy: low-risk rash — cephalosporin cross-reactivity <2%. In sepsis, benefit outweighs allergy risk. Observe for 30 min after first dose.", "status": "Active — WITHIN 60 MINUTES", "prescriber": "Dr. Attending" },
        { "id": "med-2", "name": "Normal Saline", "dose": "30 mL/kg IV bolus (2L for 70kg)", "route": "IV", "frequency": "Over 3h — Sepsis Bundle within 3h. Reassess fluid responsiveness after.", "status": "Active — Sepsis Bundle", "prescriber": "Dr. Attending" },
        { "id": "med-3", "name": "Metformin", "dose": "500mg", "route": "PO", "frequency": "BID — HOME MED, HOLD NOW. Lactic acidosis risk with sepsis/AKI.", "status": "HOLD", "prescriber": "Dr. Sandra Webb, MD" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "16:00", "bp": "98/62", "hr": "118", "rr": "24", "temp": "39.4°C", "spo2": "96%", "pain": "8/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Urosepsis — pyelonephritis with sepsis criteria — antibiotic selection with penicillin allergy history",
        "hpi": "70F with DM2 presents with 3-day urinary symptoms progressing to right flank pain, rigors, fever 39.4°C, and altered mentation today. BP 98/62, HR 118, RR 24. qSOFA 2 (AMS + RR≥22).\n\nSEPSIS 3 CRITERIA:\n- Suspected infection: YES — pyelonephritis\n- Organ dysfunction (SOFA ≥2): AMS (SOFA +1), SBP <100 (+1-2), creatinine rise pending\n→ SEPSIS: YES\n- Septic shock: MAP <65 despite fluids + lactate >2 — borderline, watching\n\nURINARY SEPSIS BUNDLE (within 1h):\n✓ Blood cultures x2 before antibiotics\n✓ Urine culture before antibiotics\n✓ Lactate measurement\n✓ IV fluid 30 mL/kg for hypotension/lactate ≥4\n✓ Empiric antibiotics WITHIN 1 HOUR\n\nANTIBIOTIC SELECTION WITH ALLERGIES:\nSulfa allergy (documented) → TMP-SMX excluded\nPenicillin allergy (vague childhood rash — LOW RISK):\n- Cross-reactivity cephalosporins/penicillin: <2% with low-risk PCN allergy\n- In SEPSIS: risk of anaphylaxis (low) vs. risk of inadequate treatment (high) → treat\n- Ceftriaxone: good gram-negative coverage, low cross-reactivity\n- Avoid fluoroquinolones empirically (20-30% E. coli resistance, and she's had previous courses)\n- If true anaphylaxis history → aztreonam + metronidazole (no beta-lactam)\n\nFLUOROQUINOLONE NOTE: Even though her prior UTIs responded to ciprofloxacin, resistance develops with repeated exposure. Community E. coli resistance to fluoroquinolones is 20-30% in many US markets — DO NOT use empirically in sepsis.",
        "assessment": "Urosepsis — sepsis criteria met. Ceftriaxone empirically (PCN allergy low-risk). IVF resuscitation. Blood and urine cultures before antibiotics. Admit floor vs ICU based on fluid response.",
        "plan": "Blood cultures x2 NOW. Urine culture NOW. Ceftriaxone 2g IV (observe for allergy x30 min). NS 2L bolus. Lactate. BMP — renal function. Hold metformin. Insulin sliding scale. Urology consult if obstructive pyelonephritis (stone/abscess) — CT abdomen/pelvis if not improving or septic shock. Admit medicine floor. De-escalate to PO when: afebrile x24h, BP normalized, improving, PO tolerating, sensitivities confirmed."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "16:15", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-448812", "collected": "03/15/2026 16:10", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood and Urine",
        "groups": [
          { "name": "CBC AND METABOLIC", "results": [
            { "test": "WBC", "value": "22.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Bands", "value": "14%", "unit": "", "range": "0-6%", "flag": "H" },
            { "test": "Creatinine", "value": "1.6", "unit": "mg/dL", "range": "0.6-1.1 (baseline 0.9)", "flag": "H" },
            { "test": "Lactate", "value": "2.8", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" },
            { "test": "Glucose", "value": "298", "unit": "mg/dL", "range": "70-100", "flag": "H" }
          ]},
          { "name": "URINALYSIS", "results": [
            { "test": "WBCs", "value": ">100/hpf", "unit": "", "range": "<5", "flag": "H" },
            { "test": "WBC casts", "value": "Present — pyelonephritis", "unit": "", "range": "Absent", "flag": "H" },
            { "test": "Bacteria", "value": "Many gram-negative rods", "unit": "", "range": "None", "flag": "H" },
            { "test": "Nitrite", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Leukocyte esterase", "value": "4+", "unit": "", "range": "Negative", "flag": "H" }
          ]},
          { "name": "CULTURES (PENDING)", "results": [
            { "test": "Urine culture", "value": "Pending 24-48h — collected before antibiotics", "unit": "", "range": "No growth", "flag": "" },
            { "test": "Blood culture x2", "value": "Pending 24-48h — collected before antibiotics", "unit": "", "range": "No growth", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "CT Abdomen/Pelvis Without Contrast",
          "date": "03/15/2026", "time": "16:45", "orderedBy": "Dr. Attending",
          "findings": "Right kidney: wedge-shaped hypoenhancement upper pole consistent with pyelonephritis. No abscess. No hydronephrosis. No obstructing stone. Left kidney normal. No free air.",
          "impression": "Right pyelonephritis without abscess or obstruction. No urologic intervention needed.", "critical": false }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 urosepsis — E. coli bacteremia confirmed (ESBL negative) — ceftriaxone appropriate — improving",
        "diagnosis": "Urosepsis — E. coli Bacteremia — Ceftriaxone — Day 2"
      },
      "problems": [
        { "id": "prob-1", "description": "Urosepsis resolving — E. coli bacteremia (blood culture +1/2 bottles). ESBL negative. Susceptible to ceftriaxone, ciprofloxacin, nitrofurantoin, trimethoprim-sulfamethoxazole (TMP-SMX is an option despite sulfa allergy? — No, SMX is a sulfonamide — documented allergy precludes use). Nitrofurantoin: PO option but NOT for pyelonephritis (poor tissue penetration — urine levels only). CIPROFLOXACIN: susceptible — OK for PO step-down.", "status": "Improving", "onset": "Acute", "icd10": "N10" },
        { "id": "prob-2", "description": "PO step-down plan: when afebrile x24h + tolerating PO → ciprofloxacin 500mg BID PO x7 days total (IV + PO combined). Total duration 7-14 days for pyelonephritis/bacteremia.", "status": "Active", "onset": "Acute", "icd10": "N10" }
      ],
      "medications": [
        { "id": "med-1", "name": "Ceftriaxone → Ciprofloxacin", "dose": "2g IV → 500mg PO", "route": "IV → PO transition", "frequency": "De-escalate when tolerating PO and afebrile x24h. Culture confirms ciprofloxacin susceptibility — safe to use despite prior courses.", "status": "Active — transitioning", "prescriber": "Dr. Medicine Attending" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "08:00", "bp": "118/74", "hr": "88", "rr": "18", "temp": "37.4°C", "spo2": "97%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-2", "type": "Medicine Progress Note", "date": "03/16/2026", "provider": "Dr. Medicine Attending",
        "cc": "Day 2 urosepsis — improving, culture-directed de-escalation",
        "hpi": "Excellent improvement. Afebrile since midnight. BP normalized. E. coli in blood culture — ESBL negative, susceptible to ciprofloxacin. Plan: transition to oral ciprofloxacin 500mg BID today when tolerating PO. Total antibiotic course 14 days (bacteremia + pyelonephritis).\n\nDE-ESCALATION PRINCIPLES:\n- Always narrow antibiotic spectrum when culture available\n- IV-to-PO transition: appropriate when afebrile, hemodynamically stable, tolerating PO, no concern for poor GI absorption\n- Duration: 7 days for uncomplicated pyelonephritis; 14 days for bacteremia\n- Nitrofurantoin: NOT for pyelonephritis — only urinary tissue levels, inadequate for systemic/renal parenchymal infection",
        "assessment": "Urosepsis resolving. De-escalate to PO ciprofloxacin. Restart metformin when Cr normalized and PO tolerating.",
        "plan": "Ciprofloxacin 500mg BID PO x12 more days (total 14d). Discharge tomorrow if sustained improvement. Restart metformin when Cr ≤1.0 (baseline 0.9 expected recovery). Blood sugar control — insulin at discharge until Cr normalizes. Urology follow-up: any recurrent pyelonephritis needs imaging for structural abnormality. Antibiogram awareness: resistance developing, track local patterns."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "06:00", "status": "Final", "orderedBy": "Dr. Medicine",
        "accession": "LAB-448813", "collected": "03/16/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "CULTURE RESULTS AND TREND", "results": [
            { "test": "Urine Culture", "value": "E. coli >100,000 CFU/mL. Susceptible: ciprofloxacin, nitrofurantoin, fosfomycin. Resistant: TMP-SMX, ampicillin.", "unit": "", "range": "No growth", "flag": "H" },
            { "test": "Blood Culture", "value": "E. coli 1/2 bottles. Susceptible: ciprofloxacin, ceftriaxone. ESBL: NEGATIVE.", "unit": "", "range": "No growth", "flag": "H" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.6-1.1 — improving", "flag": "" },
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "IDSA-UTI-2022", "title": "IDSA Clinical Practice Guideline for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women", "authors": "Gupta K, Hooton TM, Naber KG, et al.", "journal": "Clinical Infectious Diseases", "year": 2011, "doi": "10.1093/cid/ciq257", "url": "https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/", "openAccess": true, "validates": ["Antibiotic selection for pyelonephritis", "Fluoroquinolone resistance rates", "Duration of therapy", "Nitrofurantoin limitation for pyelonephritis"] },
    { "id": "Surviving-Sepsis-2021", "title": "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021", "authors": "Evans L, Rhodes A, Alhazzani W, et al.", "journal": "Critical Care Medicine", "year": 2021, "doi": "10.1097/CCM.0000000000005337", "url": "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines/Adult-Patients", "openAccess": true, "validates": ["Sepsis 3 criteria", "1-hour bundle", "Fluid resuscitation", "Blood cultures before antibiotics"] }
  ]
};
