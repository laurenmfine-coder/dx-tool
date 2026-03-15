/* emr-data/aki-differential.js
   Acute Kidney Injury — Prerenal vs Intrinsic vs Obstructive
   Category: renal | Acuity: ESI-2
   Settings: ED, Floor, ICU
   Priority 1 gap fill — renal
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Robert Chen",
      "patientHPI": "I've barely urinated in the last two days and my legs are really swollen. I had a bad stomach bug last week — vomiting and diarrhea for four days — and I wasn't able to keep anything down. I feel really weak and my back is aching.",
      "dob": "11/08/1956",
      "age": "69",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-551893",
      "language": "English",
      "race": "Asian",
      "phone": "(415) 555-1893",
      "email": "r.chen@email.com",
      "address": "3312 Geary Blvd, San Francisco, CA 94118",
      "insurance": "Medicare + Supplement",
      "pcp": "Dr. Linda Park, MD",
      "pharmacy": "Rite Aid — Geary Blvd",
      "emergencyContact": {
        "name": "Jenny Chen",
        "phone": "(415) 555-4421",
        "relationship": "Daughter"
      }
    },
    "allergies": [
      { "allergen": "Penicillin", "reaction": "Hives", "severity": "Moderate", "type": "Drug" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }
    ],
    "familyHistory": [
      "Father: Type 2 Diabetes, CKD",
      "Mother: Hypertension"
    ],
    "socialHistory": [
      ["Living", "Lives with daughter — otherwise independent"],
      ["Alcohol", "Rare"],
      ["Smoking", "Never"],
      ["NSAIDs", "Takes ibuprofen 600mg TID for chronic knee pain — took throughout gastroenteritis illness"],
      ["Baseline Cr", "Creatinine 0.9 mg/dL documented 6 months ago"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "69M with DM2/HTN, oliguria x2 days after severe gastroenteritis, Cr 4.2 (baseline 0.9), K+ 5.9, bilateral leg edema",
        "diagnosis": "Acute Kidney Injury — Mixed Etiology (Prerenal + NSAID-induced Intrinsic)"
      },
      "problems": [
        { "id": "prob-1", "description": "AKI — Cr 4.2 (baseline 0.9), rise of 3.3 mg/dL. Mixed etiology: prerenal (volume depletion from gastroenteritis) + intrinsic (NSAID-induced during dehydration)", "status": "Active", "onset": "Acute", "icd10": "N17.9" },
        { "id": "prob-2", "description": "Hyperkalemia — K+ 5.9 mEq/L — EKG changes (peaked T waves)", "status": "Active", "onset": "Acute", "icd10": "E87.5" },
        { "id": "prob-3", "description": "Oliguria — urine output <0.5 mL/kg/hr x2 days", "status": "Active", "onset": "Acute", "icd10": "R34" },
        { "id": "prob-4", "description": "Volume depletion — gastroenteritis x4 days, poor oral intake", "status": "Active", "onset": "Acute", "icd10": "E86.0" },
        { "id": "prob-5", "description": "NSAID nephrotoxicity — ibuprofen 600mg TID during volume depletion (reduces PGE2-mediated afferent arteriolar dilation)", "status": "Active", "onset": "Acute", "icd10": "N14.1" },
        { "id": "prob-6", "description": "Type 2 Diabetes — HbA1c unknown, on metformin (HOLD — contraindicated in AKI)", "status": "Chronic", "onset": "Chronic", "icd10": "E11.9" },
        { "id": "prob-7", "description": "Hypertension — on lisinopril (HOLD — reduces GFR in volume depleted AKI)", "status": "Chronic", "onset": "Chronic", "icd10": "I10" }
      ],
      "medications": [
        { "id": "med-1", "name": "Lisinopril", "dose": "10mg", "route": "PO", "frequency": "Daily", "status": "HOLD — reduces GFR in AKI", "prescriber": "Dr. Linda Park, MD" },
        { "id": "med-2", "name": "Metformin", "dose": "1000mg", "route": "PO", "frequency": "BID", "status": "HOLD — lactic acidosis risk in AKI", "prescriber": "Dr. Linda Park, MD" },
        { "id": "med-3", "name": "Ibuprofen", "dose": "600mg", "route": "PO", "frequency": "TID PRN", "status": "STOP — nephrotoxic, causative agent", "prescriber": "Self-prescribed OTC" },
        { "id": "med-4", "name": "Amlodipine", "dose": "5mg", "route": "PO", "frequency": "Daily", "status": "Active — continue (not nephrotoxic)", "prescriber": "Dr. Linda Park, MD" }
      ],
      "vitals": [
        { "date": "03/15/2026", "time": "11:30", "bp": "158/94", "hr": "102", "rr": "18", "temp": "37.0°C", "spo2": "97%", "pain": "3/10" }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "AKI with hyperkalemia — oliguria x2 days after gastroenteritis, NSAID use during illness",
          "hpi": "69-year-old male with Type 2 Diabetes and hypertension presents with 2-day history of oliguria and bilateral lower extremity edema following a 4-day bout of severe gastroenteritis (vomiting and diarrhea). He continued taking ibuprofen 600mg TID throughout his illness for chronic knee pain and was unable to keep fluids down. Baseline creatinine was 0.9 mg/dL six months ago. Today's creatinine is 4.2 mg/dL.\n\nAKI STAGING (KDIGO):\n- Stage 3: Creatinine ≥3× baseline (4.2 vs 0.9 = 4.7×) OR Cr ≥4.0 mg/dL\n- Oliguria: <0.5 mL/kg/hr for >12h\n\nETIOLOGY FRAMEWORK:\nPrerenal: ✓ Profound volume depletion from GI losses; ✓ Elevated BUN:Cr ratio 28:1 (>20:1 suggests prerenal)\nIntrinsic (NSAID): ✓ NSAIDs reduce prostaglandin-mediated afferent arteriolar dilation → reduced GFR → particularly harmful in volume-depleted state; UA shows tubular casts\nObstructive: Less likely — no symptoms of obstruction, but bladder US needed to exclude\nIntrinsic (diabetic nephropathy): Possible baseline CKD — will clarify with nephrology",
          "assessment": "AKI Stage 3 — mixed prerenal and NSAID-induced intrinsic AKI. Hyperkalemia with EKG changes requires urgent treatment. Admit to nephrology service. Hold nephrotoxins. Aggressive IV fluid resuscitation. Foley catheter to monitor UO and exclude post-renal obstruction. EKG monitoring. Nephrology consult — may need dialysis if not improving or K+ continues to rise.",
          "plan": "URGENT: Calcium gluconate 1g IV for hyperkalemia with EKG changes (membrane stabilization). Sodium bicarbonate 50mEq IV (shift K+ intracellularly). Insulin 10U + D50 (shift K+ intracellularly). Kayexalate 30g PO or Patiromer if PO tolerating (eliminate K+). Stop ibuprofen and all NSAIDs permanently. Hold lisinopril, metformin. IV fluid resuscitation — NS 500mL bolus then reassess (cautious given Stage 3 AKI). Foley catheter — strict I&Os. Nephrology consult. Renal ultrasound to exclude obstruction. Repeat BMP in 4 hours."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "11:45",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-551893",
          "collected": "03/15/2026 11:40",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL",
              "results": [
                { "test": "Sodium", "value": "134", "unit": "mEq/L", "range": "136-145", "flag": "L" },
                { "test": "Potassium", "value": "5.9", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
                { "test": "Bicarbonate", "value": "16", "unit": "mEq/L", "range": "22-29", "flag": "L" },
                { "test": "BUN", "value": "118", "unit": "mg/dL", "range": "7-20", "flag": "H" },
                { "test": "Creatinine", "value": "4.2", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
                { "test": "eGFR", "value": "12", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
                { "test": "Glucose", "value": "182", "unit": "mg/dL", "range": "70-100", "flag": "H" },
                { "test": "BUN:Creatinine Ratio", "value": "28:1", "unit": "", "range": "10-20:1", "flag": "H" }
              ]
            },
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                { "test": "WBC", "value": "11.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
                { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
                { "test": "Platelets", "value": "178", "unit": "x10³/µL", "range": "150-400", "flag": "" }
              ]
            },
            {
              "name": "URINALYSIS WITH MICROSCOPY",
              "results": [
                { "test": "Specific Gravity", "value": "1.028", "unit": "", "range": "1.005-1.030", "flag": "" },
                { "test": "Protein", "value": "2+", "unit": "", "range": "Negative", "flag": "H" },
                { "test": "Blood", "value": "Trace", "unit": "", "range": "Negative", "flag": "H" },
                { "test": "Granular casts (muddy brown)", "value": "3-5/hpf", "unit": "per high-power field", "range": "None", "flag": "H" },
                { "test": "Renal tubular epithelial cells", "value": "Present", "unit": "", "range": "Absent", "flag": "H" },
                { "test": "Urine Na", "value": "48", "unit": "mEq/L", "range": "<20 prerenal; >40 intrinsic", "flag": "H" },
                { "test": "FENa", "value": "2.8%", "unit": "", "range": "<1% prerenal; >2% intrinsic", "flag": "H" }
              ]
            },
            {
              "name": "ADDITIONAL RENAL STUDIES",
              "results": [
                { "test": "Phosphorus", "value": "6.8", "unit": "mg/dL", "range": "2.5-4.5", "flag": "H" },
                { "test": "Uric Acid", "value": "9.2", "unit": "mg/dL", "range": "3.5-7.2", "flag": "H" },
                { "test": "HbA1c", "value": "8.1", "unit": "%", "range": "<5.7", "flag": "H" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "Renal Ultrasound",
          "date": "03/15/2026",
          "time": "13:00",
          "orderedBy": "Dr. Attending",
          "findings": "Right kidney 11.2 cm, left kidney 10.8 cm — normal size bilaterally. No hydronephrosis. No stones. No masses. Bladder adequately emptied after Foley placement — 450 mL drained (consistent with oliguria, not obstruction). Normal cortical echogenicity bilaterally — no cortical thinning to suggest chronic disease.",
          "impression": "No obstructive etiology. Normal kidney size argues against chronic kidney disease as primary etiology. AKI most consistent with prerenal/intrinsic causes.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 AKI — hyperkalemia treated, Cr 3.6 (trending down), urine output improving with IVF",
        "diagnosis": "AKI Stage 3 — resolving — Mixed Prerenal/NSAID-Induced"
      },
      "problems": [
        { "id": "prob-1", "description": "AKI — improving, Cr 3.6 from peak 4.2. Urine output 30-40 mL/hr with IVF. Polyuric recovery phase expected.", "status": "Improving", "onset": "Acute", "icd10": "N17.9" },
        { "id": "prob-2", "description": "Hyperkalemia — resolved with treatment, K+ now 4.8 mEq/L", "status": "Resolved", "onset": "Acute", "icd10": "E87.5" },
        { "id": "prob-3", "description": "Metabolic acidosis — bicarbonate improving, now 19 mEq/L", "status": "Improving", "onset": "Acute", "icd10": "E87.2" },
        { "id": "prob-4", "description": "NSAID-induced nephropathy — all NSAIDs discontinued, patient counseled: never ibuprofen/naproxen/ketorolac again", "status": "Active", "onset": "Acute", "icd10": "N14.1" },
        { "id": "prob-5", "description": "Metformin held — restart when Cr <1.5 and eGFR >45", "status": "Active", "onset": "Chronic", "icd10": "E11.9" }
      ],
      "medications": [
        { "id": "med-1", "name": "Normal Saline", "dose": "125 mL/hr", "route": "IV", "frequency": "Continuous — titrate to UO 0.5 mL/kg/hr", "status": "Active", "prescriber": "Dr. Nephrology Attending" },
        { "id": "med-2", "name": "Sodium Polystyrene (Kayexalate)", "dose": "30g", "route": "PO", "frequency": "Daily PRN K+ >5.5", "status": "Active — monitoring K+", "prescriber": "Dr. Nephrology Attending" },
        { "id": "med-3", "name": "Amlodipine", "dose": "5mg", "route": "PO", "frequency": "Daily", "status": "Active — continuing for BP control", "prescriber": "Dr. Nephrology Attending" }
      ],
      "vitals": [
        { "date": "03/16/2026", "time": "06:00", "bp": "144/88", "hr": "88", "rr": "16", "temp": "37.0°C", "spo2": "98%", "pain": "1/10" }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Nephrology Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Nephrology Attending",
          "cc": "Day 2 AKI — trending toward recovery",
          "hpi": "Good overnight progress. Creatinine trending down: 4.2 → 3.6. Urine output improving: now 35-40 mL/hr (goal ≥0.5 mL/kg/hr = ~35 mL/hr for 70kg patient). Hyperkalemia treated — K+ now 4.8. Bicarbonate improving — 16 → 19. Patient able to tolerate PO fluids. No pulmonary edema on exam — able to continue IV hydration.\n\nETIOLOGY CONFIRMED: Mixed prerenal + NSAID-induced ATN. FENa 2.8% confirms intrinsic AKI (not purely prerenal). Muddy brown granular casts = ATN. Urine Na >40 = tubular dysfunction. No obstruction (US negative, Foley drained 450mL, now producing urine).\n\nKEY TEACHING MOMENTS:\n1. NSAID nephrotoxicity mechanism: PGs (PGE2) maintain afferent arteriolar dilation → NSAIDs block → vasoconstriction → ischemic ATN. Especially dangerous when volume depleted or in CKD/DM/elderly.\n2. BUN:Cr ratio: >20:1 suggests prerenal, but in this case mixed etiology — the ATN component has the FENa >2% despite elevated BUN:Cr from concurrent volume depletion\n3. Medications to hold in AKI: ACE-I/ARB, NSAIDs, metformin, aminoglycosides, contrast dye, direct renal toxins\n4. Monitoring recovery: look for polyuric phase — UO may spike to >200 mL/hr as tubules recover; must not let patient become hypernatremic",
          "assessment": "AKI Stage 3, recovering. Expected full renal recovery if creatinine returns to baseline — may take 2-4 weeks. No dialysis needed currently (K+ controlled, not anuric, no severe acidosis). Follow closely as outpatient — nephrology in 2 weeks with repeat BMP.",
          "plan": "Continue gentle IV hydration — match urine output + insensible losses. Hold ACE-I lisinopril — restart when Cr <1.5 (may need dose adjustment). Hold metformin — restart when eGFR >45. NEVER restart NSAIDs — document allergy/adverse reaction. Acetaminophen for pain (safe in AKI with caution). Nephrology outpatient in 2 weeks. PCP in 1 week with repeat BMP. Renal diet education — low potassium, low phosphorus until recovered."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Nephrology Attending",
          "accession": "LAB-551894",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL — TREND",
              "results": [
                { "test": "Potassium", "value": "4.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
                { "test": "Bicarbonate", "value": "19", "unit": "mEq/L", "range": "22-29", "flag": "L" },
                { "test": "BUN", "value": "102", "unit": "mg/dL", "range": "7-20", "flag": "H" },
                { "test": "Creatinine", "value": "3.6", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
                { "test": "eGFR", "value": "16", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" }
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
      "id": "KDIGO-AKI-2012",
      "title": "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      "authors": "Kidney Disease: Improving Global Outcomes (KDIGO) AKI Work Group",
      "journal": "Kidney International Supplements",
      "year": 2012,
      "doi": "10.1038/kisup.2011.34",
      "url": "https://kdigo.org/guidelines/acute-kidney-injury/",
      "openAccess": true,
      "validates": ["AKI staging (KDIGO criteria)", "Definition of AKI", "Management principles"]
    },
    {
      "id": "StatPearls-AKI",
      "title": "Acute Kidney Injury",
      "authors": "Goyal A, Daneshpajouhnejad P, Hashmi MF, Bashir K",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK441896/",
      "openAccess": true,
      "validates": ["AKI differential diagnosis", "FENa interpretation", "NSAID nephrotoxicity mechanism", "Management of hyperkalemia in AKI"]
    },
    {
      "id": "StatPearls-Hyperkalemia",
      "title": "Hyperkalemia",
      "authors": "Simon LV, Hashmi MF, Farrell MW",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK470284/",
      "openAccess": true,
      "validates": ["EKG changes in hyperkalemia", "Calcium gluconate indications", "Potassium-lowering treatments", "Dialysis threshold"]
    }
  ]
};
