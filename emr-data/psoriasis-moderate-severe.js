/* emr-data/psoriasis-moderate-severe.js
   Psoriasis — Moderate-Severe, Biologic Initiation
   Category: dermatology | Acuity: ESI-3
   Settings: Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ivan Petrov",
      "patientHPI": "I've had psoriasis for 15 years but the last two years it's gotten much worse. My whole torso is covered in thick red scaly patches. I also have joint pain in my fingers and knees. I've tried a lot of creams but nothing works well enough.",
      "dob": "11/04/1971", "age": "54", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-338841", "language": "English/Russian", "race": "White",
      "phone": "(718) 555-8841", "email": "i.petrov@email.com",
      "address": "8821 Brighton Beach Ave, Brooklyn, NY 11235",
      "insurance": "Empire Blue Cross", "pcp": "Dr. Nadia Volkov, MD",
      "pharmacy": "CVS — Brighton Beach",
      "emergencyContact": { "name": "Olga Petrov", "phone": "(718) 555-4422", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" },
      { "name": "Hepatitis B — incomplete series", "date": "2021", "lot": "", "site": "" }
    ],
    "familyHistory": ["Father: psoriasis", "Sister: psoriatic arthritis"],
    "socialHistory": [
      ["Psoriasis history", "Plaque psoriasis x15 years. BSA affected: ~35% (trunk, bilateral arms, scalp). PASI score 18.6 (moderate-severe). DLQI 16 (severe impact on quality of life)."],
      ["Joint symptoms", "Bilateral finger DIP joint swelling and morning stiffness x2 years — psoriatic arthritis. Rheumatology referral placed."],
      ["Prior therapies", "Topical steroids (Class I-II) — partial response. Topical calcipotriene — partial. Methotrexate 15mg/week x18 months — inadequate response. Narrowband UVB x24 sessions — partial, could not maintain."],
      ["Comorbidities", "Hypertension, metabolic syndrome, BMI 32. Psoriasis independent CV risk factor."],
      ["Smoking", "Former — quit 8 years ago"],
      ["Alcohol", "4-6 drinks/week"]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "54M moderate-severe plaque psoriasis PASI 18.6, BSA 35%, failed methotrexate, possible psoriatic arthritis — biologic initiation (ixekizumab IL-17A inhibitor)",
        "diagnosis": "Moderate-Severe Plaque Psoriasis + Psoriatic Arthritis — Initiating IL-17A Inhibitor (Ixekizumab)"
      },
      "problems": [
        { "id": "prob-1", "description": "Moderate-severe plaque psoriasis — PASI 18.6, BSA 35%, DLQI 16. Failed: topical steroids, calcipotriene, methotrexate, NBUVB. Biologic therapy indicated.", "status": "Active", "onset": "Chronic", "icd10": "L40.0" },
        { "id": "prob-2", "description": "Psoriatic arthritis — DIP joint involvement, morning stiffness, family history. XR bilateral hands: periarticular erosions DIP joints bilaterally, 'pencil-in-cup' early changes right index DIP. Rheumatology co-management needed. IL-17A inhibitors treat BOTH skin AND joints.", "status": "Active", "onset": "Chronic", "icd10": "L40.50" },
        { "id": "prob-3", "description": "Cardiovascular risk — psoriasis = independent CV risk factor. Chronic inflammation drives atherosclerosis. BP control, lipid management, metabolic syndrome management essential.", "status": "Active", "onset": "Chronic", "icd10": "Z87.891" },
        { "id": "prob-4", "description": "Pre-biologic workup required: TB (QuantiFERON-TB Gold), hepatitis B (HBsAg, HBsAb, HBcAb), HIV, CBC, CMP. Completed today.", "status": "Active", "onset": "Acute", "icd10": "Z01.89" }
      ],
      "medications": [
        { "id": "med-1", "name": "Ixekizumab (Taltz)", "dose": "160mg SQ loading, then 80mg Q2W x12 weeks, then 80mg monthly", "route": "SQ", "frequency": "Auto-injector pen — self-injection training today", "status": "NEW — starting after pre-biologic workup cleared", "prescriber": "Dr. Dermatology" },
        { "id": "med-2", "name": "Clobetasol propionate 0.05% ointment", "dose": "Thin layer", "route": "Topical", "frequency": "BID to plaques x2 weeks then taper — bridge while biologic takes effect (6-12 weeks for full response)", "status": "Active — bridge therapy", "prescriber": "Dr. Dermatology" },
        { "id": "med-3", "name": "Calcipotriene/betamethasone dipropionate foam (Enstilar)", "dose": "Apply to scalp", "route": "Topical", "frequency": "Daily — for scalp psoriasis", "status": "Active", "prescriber": "Dr. Dermatology" },
        { "id": "med-4", "name": "Amlodipine", "dose": "10mg", "route": "PO", "frequency": "Daily — hypertension", "status": "Active", "prescriber": "Dr. Nadia Volkov, MD" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "14:00", "bp": "142/88", "hr": "76", "rr": "16", "temp": "37.1°C", "spo2": "99%", "pain": "4/10" }],
      "visits": [{
        "id": "visit-1", "type": "Dermatology New Patient — Biologic Initiation", "date": "03/15/2026", "provider": "Dr. Dermatology",
        "cc": "Moderate-severe psoriasis + psoriatic arthritis — biologic initiation",
        "hpi": "54M with 15-year plaque psoriasis, now moderate-severe (PASI 18.6, BSA 35%, DLQI 16). Failed multiple conventional therapies. Also developing psoriatic arthritis — DIP joint erosions on XR.\n\nBIOLOGIC SELECTION RATIONALE:\nFor combined psoriasis + psoriatic arthritis, IL-17A inhibitors (ixekizumab, secukinumab) or IL-23 inhibitors (risankizumab, guselkumab) or TNF inhibitors are options. IL-17A chosen because:\n- Excellent skin clearance (PASI 90 in ~60% of patients)\n- Good joint efficacy for PsA (enthesitis, dactylitis, DIP involvement)\n- Monthly dosing after induction — good adherence\n- Favorable safety profile vs TNF inhibitors in patient with metabolic syndrome\n\nCONTRAINDICATIONS/PRECAUTIONS for IL-17A inhibitors:\n- Active inflammatory bowel disease (Crohn's) — IL-17 inhibition can worsen IBD\n- Active TB — screen before starting (done — QuantiFERON negative)\n- Active serious infection — hold if infection occurs\n- Candida infections more common (mechanism: IL-17 defends against candida)\n\nPRE-BIOLOGIC SCREENING:\n✓ QuantiFERON-TB Gold: NEGATIVE\n✓ HBsAg: Negative (not infected)\n✓ HBcAb: Negative (no prior exposure)\n✓ HBsAb: Negative (not immune — vaccinate before starting biologic)\n✓ HIV: Negative\n✓ CBC, CMP: Normal\n→ Hepatitis B vaccination required before starting (complete series)",
        "assessment": "Biologic therapy indicated and cleared. Starting ixekizumab. Complete hepatitis B series first — vaccination today, series complete in 6 months. Rheumatology co-management for PsA.",
        "plan": "Hepatitis B vaccine dose 1 today (complete series at 1 and 6 months before full biologic benefit). Start ixekizumab after dose 1 HBV vaccine. Self-injection training. Skin monitoring Q12-16 weeks (PASI/BSA). Rheumatology referral for PsA management. BP optimization. Fasting lipids. Alcohol reduction counseling (worsens psoriasis). Avoid live vaccines on biologic. Return 12 weeks — PASI response assessment."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "13:30", "status": "Final", "orderedBy": "Dr. Dermatology",
        "accession": "LAB-338841", "collected": "03/15/2026 13:25", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "PRE-BIOLOGIC SCREENING", "results": [
            { "test": "QuantiFERON-TB Gold", "value": "NEGATIVE — cleared for biologic", "unit": "", "range": "Negative", "flag": "" },
            { "test": "HBsAg", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "HBsAb (anti-HBs)", "value": "Negative — NOT IMMUNE. Vaccinate before biologic.", "unit": "", "range": "Positive if immune", "flag": "L" },
            { "test": "HBcAb (anti-HBc)", "value": "Negative — no prior HBV exposure", "unit": "", "range": "Negative", "flag": "" },
            { "test": "HIV-1/2 Ag/Ab", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "CBC", "value": "WBC 7.8, Hgb 14.2, Plt 288 — normal", "unit": "", "range": "Normal", "flag": "" },
            { "test": "CMP", "value": "Creatinine 1.0, ALT 28, AST 22 — normal", "unit": "", "range": "Normal", "flag": "" }
          ]},
          { "name": "CARDIOVASCULAR RISK", "results": [
            { "test": "LDL", "value": "138", "unit": "mg/dL", "range": "<100 ideal", "flag": "H" },
            { "test": "CRP (high-sensitivity)", "value": "8.4", "unit": "mg/L", "range": "<3 low risk", "flag": "H" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "X-Ray Bilateral Hands",
          "date": "03/10/2026", "time": "", "orderedBy": "Dr. Nadia Volkov",
          "findings": "Periarticular erosions at bilateral DIP joints — most pronounced right index and middle fingers. Early 'pencil-in-cup' deformity right index DIP. No ankylosis. Soft tissue swelling bilateral ring fingers (dactylitis).",
          "impression": "Psoriatic arthritis — DIP joint erosions and early pencil-in-cup changes. Dactylitis bilateral ring fingers.", "critical": false }
      ]
    },
    "ed": {
      "patient": { "chiefComplaint": "Not applicable", "diagnosis": "Clinic only" },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "AAD-Psoriasis-2020", "title": "AAD-NPF Guidelines of Care for the Management and Treatment of Psoriasis with Biologics", "authors": "Menter A, Strober BE, Kaplan DH, et al.", "journal": "Journal of the American Academy of Dermatology", "year": 2019, "doi": "10.1016/j.jaad.2018.11.057", "url": "https://www.jaad.org/article/S0190-9622(18)33002-0/fulltext", "openAccess": false, "validates": ["Biologic selection criteria", "Pre-biologic TB and hepatitis B screening", "IL-17A inhibitor mechanism and safety", "IBD contraindication"] },
    { "id": "StatPearls-Psoriasis", "title": "Psoriasis", "authors": "Rendon A, Schäkel K", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK448194/", "openAccess": true, "validates": ["PASI scoring", "Treatment ladder", "Psoriatic arthritis overlap", "CV risk in psoriasis"] }
  ]
};
