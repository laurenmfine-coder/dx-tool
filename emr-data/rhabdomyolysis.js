/* emr-data/rhabdomyolysis.js
   Rhabdomyolysis — Statin-Induced + Exertional
   Category: renal | Acuity: ESI-2
   Settings: ED, Floor, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jerome Williams",
      "patientHPI": "My muscles have been killing me for three days — my thighs and calves feel like they're on fire. I started a new boot camp exercise program last week. My urine is dark brown, almost like cola. I've also been on a new cholesterol medicine for about six weeks.",
      "dob": "06/03/1978", "age": "47", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-774421", "language": "English", "race": "Black/African American",
      "phone": "(404) 555-4421", "email": "j.williams@email.com",
      "address": "3312 Peachtree Rd NE, Atlanta, GA 30326",
      "insurance": "United Healthcare", "pcp": "Dr. Angela Reed, MD",
      "pharmacy": "Walgreens — Peachtree Rd",
      "emergencyContact": { "name": "Keisha Williams", "phone": "(404) 555-8833", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Father: hyperlipidemia, MI at 55", "Mother: Type 2 Diabetes"],
    "socialHistory": [
      ["Exercise", "Started high-intensity boot camp 10 days ago — 2hr sessions daily, no prior conditioning"],
      ["New medication", "Rosuvastatin 40mg — started 6 weeks ago for hyperlipidemia. Pharmacist did NOT counsel on myopathy risk."],
      ["Alcohol", "Social — 2-3 drinks/week"],
      ["Smoking", "Never"],
      ["Hydration", "Admits to poor fluid intake during workouts in summer heat"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "47M on rosuvastatin, 10 days of boot camp — severe myalgia, cola-colored urine, CK 48,000, Cr 2.1",
        "diagnosis": "Rhabdomyolysis — Mixed Etiology (Exertional + Statin-Induced)"
      },
      "problems": [
        { "id": "prob-1", "description": "Rhabdomyolysis — CK 48,000 (>5x ULN = diagnostic). Cola-colored urine (myoglobinuria). AKI Cr 2.1 from estimated baseline 0.9. Mixed etiology: exertional (boot camp) + statin-induced.", "status": "Active", "onset": "Acute", "icd10": "M62.82" },
        { "id": "prob-2", "description": "AKI — myoglobin-induced tubular toxicity. Risk of progression to dialysis-requiring AKI without aggressive IVF.", "status": "Active", "onset": "Acute", "icd10": "N17.9" },
        { "id": "prob-3", "description": "Statin-induced myopathy — rosuvastatin 40mg. STOP statin. Once recovered, restart lower dose or switch to pravastatin (least myotoxic) with CK monitoring.", "status": "Active", "onset": "Subacute", "icd10": "G72.0" },
        { "id": "prob-4", "description": "Hyperkalemia risk — muscle cell lysis releases intracellular K+. Monitor closely.", "status": "At Risk", "onset": "Acute", "icd10": "E87.5" },
        { "id": "prob-5", "description": "Compartment syndrome — excluded clinically (no tense compartments, no pain with passive stretch)", "status": "Excluded", "onset": "Acute", "icd10": "M79.A19" }
      ],
      "medications": [
        { "id": "med-1", "name": "Rosuvastatin", "dose": "40mg", "route": "PO", "frequency": "Daily", "status": "STOP — causative agent", "prescriber": "Dr. Angela Reed, MD" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "10:30", "bp": "142/88", "hr": "104", "rr": "18", "temp": "37.3°C", "spo2": "99%", "pain": "7/10" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Visit", "date": "03/15/2026", "provider": "Dr. Attending",
        "cc": "Rhabdomyolysis — severe myalgia + cola urine + CK 48k + AKI",
        "hpi": "47M with new statin (rosuvastatin 40mg x6 weeks) presents with 3-day progressive severe myalgia and cola-colored urine after starting an intensive boot camp exercise program 10 days ago. He was not counseled about myopathy risk when starting the statin. CK 48,000 on arrival (normal <200 = 240x upper limit). Creatinine 2.1 (estimated baseline 0.9 — Stage 2 AKI).\n\nRHABDO SEVERITY MARKERS:\n- CK >5,000: myoglobinuria risk → renal failure\n- CK >15,000-20,000: high risk for AKI\n- CK 48,000: severe — aggressive IVF mandatory\n\nTREATMENT TARGET:\n- Urine output ≥200-300 mL/hr (2-3 mL/kg/hr) to flush myoglobin\n- Urine clear (not dark) = adequate clearance\n- Normal saline — avoid LR (potassium content when hyperkalemia possible)\n- Target urine pH >6.5 (sodium bicarb may help alkalize urine to prevent myoglobin cast formation — controversial but used in severe cases)\n\nSTATIN NOTE: Statin-induced myopathy risk is DOSE-DEPENDENT. High-dose rosuvastatin (40mg) has higher risk than lower doses. Risk amplified by: vigorous exercise, CYP3A4 inhibitors, renal/hepatic impairment.",
        "assessment": "Rhabdomyolysis with AKI — admit, aggressive IV hydration, strict I&Os, Foley catheter. Stop rosuvastatin. Serial CK trending. Nephrology consult if Cr worsening.",
        "plan": "NS IVF 1-1.5 L/hr initially → titrate to UO ≥200-300 mL/hr. Foley catheter — monitor urine color and output hourly. Serial CK Q6-8h until trending down. BMP Q4-6h — watch K+, Cr. Stop rosuvastatin permanently (document as adverse drug reaction). Morphine/ketorolac PRN pain (AVOID NSAIDs if AKI). Nephrology if Cr continues rising or oliguric. Compartment syndrome check Q4h. Discharge when CK trending down x2 readings AND Cr improving AND urine clear."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "10:45", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-774421", "collected": "03/15/2026 10:40", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood and Urine",
        "groups": [
          { "name": "MUSCLE ENZYMES", "results": [
            { "test": "CK (Creatine Kinase)", "value": "48,200", "unit": "U/L", "range": "30-200", "flag": "H" },
            { "test": "CK-MM fraction", "value": "99%", "unit": "", "range": "94-100% of total CK", "flag": "" },
            { "test": "LDH", "value": "1,840", "unit": "U/L", "range": "140-280", "flag": "H" },
            { "test": "Aldolase", "value": "42", "unit": "U/L", "range": "1.0-7.5", "flag": "H" },
            { "test": "Myoglobin (serum)", "value": "8,200", "unit": "ng/mL", "range": "<90", "flag": "H" }
          ]},
          { "name": "RENAL FUNCTION", "results": [
            { "test": "Creatinine", "value": "2.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "eGFR", "value": "34", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Potassium", "value": "5.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Phosphorus", "value": "5.8", "unit": "mg/dL", "range": "2.5-4.5", "flag": "H" },
            { "test": "Calcium", "value": "7.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "L" },
            { "test": "Uric Acid", "value": "9.1", "unit": "mg/dL", "range": "3.5-7.2", "flag": "H" }
          ]},
          { "name": "URINALYSIS", "results": [
            { "test": "Color", "value": "Dark brown (cola-colored)", "unit": "", "range": "Yellow", "flag": "H" },
            { "test": "Blood", "value": "4+ (dipstick)", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "RBCs on microscopy", "value": "0-2/hpf", "unit": "", "range": "0-2", "flag": "" },
            { "test": "Myoglobinuria", "value": "POSITIVE — dipstick positive for blood but very few RBCs = myoglobin", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Urine pH", "value": "5.5", "unit": "", "range": "Target >6.5 for rhabdo", "flag": "L" }
          ]}
        ]
      }],
      "imaging": []
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 rhabdo — CK trending down 48k→28k→18k. Urine clearing. AKI improving Cr 1.6.",
        "diagnosis": "Rhabdomyolysis — Resolving — CK Trending Down"
      },
      "problems": [
        { "id": "prob-1", "description": "Rhabdomyolysis — CK trending down with aggressive IVF. Urine clearing from dark brown to amber. AKI improving.", "status": "Improving", "onset": "Acute", "icd10": "M62.82" },
        { "id": "prob-2", "description": "AKI — improving, Cr 2.1 → 1.8 → 1.6. Urine output 280 mL/hr on NS at 1L/hr.", "status": "Improving", "onset": "Acute", "icd10": "N17.9" },
        { "id": "prob-3", "description": "Statin permanently discontinued. Future statin counseling: pravastatin (lowest myotoxicity) at low dose when patient recovered, with baseline CK check.", "status": "Active", "onset": "Acute", "icd10": "G72.0" }
      ],
      "medications": [
        { "id": "med-1", "name": "Normal Saline", "dose": "1 L/hr", "route": "IV", "frequency": "Continuous — titrating to UO 200-300 mL/hr", "status": "Active", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-2", "name": "Acetaminophen", "dose": "1000mg", "route": "PO", "frequency": "Q6H PRN pain", "status": "Active", "prescriber": "Dr. Medicine Attending" }
      ],
      "vitals": [{ "date": "03/16/2026", "time": "08:00", "bp": "128/82", "hr": "88", "rr": "16", "temp": "37.0°C", "spo2": "99%", "pain": "3/10" }],
      "visits": [{
        "id": "visit-2", "type": "Medicine Progress Note", "date": "03/16/2026", "provider": "Dr. Medicine Attending",
        "cc": "Rhabdomyolysis day 2 — CK trending down, AKI improving",
        "hpi": "Excellent response to aggressive IVF. CK: 48,200 → 28,400 → 18,100 (trending down — need to see 50% decline per day). Urine transitioning from dark brown to amber to light yellow. Urine output 280 mL/hr on 1L/hr NS. Creatinine improving 2.1→1.6. Potassium normalized 5.2→4.6. Pain improving significantly.\n\nKEY: A rising CK on day 2 despite IVF would suggest ongoing muscle injury — check for compartment syndrome or additional unrecognized cause.\n\nDISCHARGE CRITERIA: CK <5000 AND declining, Cr at or near baseline, urine clear, tolerating PO, pain controlled.",
        "assessment": "Resolving rhabdomyolysis. Expect CK to normalize over 5-7 days. Can start weaning IVF rate tomorrow if CK continues declining and Cr improving.",
        "plan": "Continue IVF until CK <5000 and urine clear. Wean IVF when urine output maintained on reduced rate. Serial CK Q8h. Discharge planning: 2-week follow-up with PCP for repeat CK and Cr. Statin discussion — pravastatin 20mg if needed (lower myotoxicity), with baseline CK. Exercise counseling — gradual conditioning (no high-intensity exercise until CK normal x2 weeks). Hydration education for future workouts."
      }],
      "labs": [{
        "date": "03/16/2026", "time": "08:00", "status": "Final", "orderedBy": "Dr. Medicine Attending",
        "accession": "LAB-774422", "collected": "03/16/2026 07:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "MUSCLE ENZYMES — TREND", "results": [
            { "test": "CK", "value": "18,100", "unit": "U/L", "range": "30-200", "flag": "H" },
            { "test": "CK Trend", "value": "48,200 → 28,400 → 18,100 — DECLINING ✓", "unit": "", "range": "Declining = responding", "flag": "" }
          ]},
          { "name": "RENAL — TREND", "results": [
            { "test": "Creatinine", "value": "1.6", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Potassium", "value": "4.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-Rhabdo", "title": "Rhabdomyolysis", "authors": "Torres PA, Helmstetter JA, Kaye AM, Kaye AD", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK448168/", "openAccess": true, "validates": ["CK diagnostic threshold", "IVF targets (UO 200-300 mL/hr)", "AKI prevention", "Statin myopathy", "Compartment syndrome monitoring"] }
  ]
};
