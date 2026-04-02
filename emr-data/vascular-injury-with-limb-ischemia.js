// Virtual EMR Case: Vascular Injury with Limb Ischemia
// Variant: vascular-injury-with-limb-ischemia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Andre Jackson",
  "patientHPI": "I'm here for my yearly checkup and feeling great overall. I stay active playing basketball with friends and my asthma is well controlled - I barely need my inhaler anymore. Work's been going really well too since I got promoted to project manager last month.",
    "dob": "12/03/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-63417",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Karen Mitchell, MD",
    "pharmacy": "Walgreens — 1200 W Sunrise Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2417 Jasmine Way, Albuquerque, NM 87103",
    "phone": "(954) 555-5183",
    "email": "a.jackson88@email.com",
    "emergencyContact": {
      "name": "Tanya Jackson (Wife)",
      "phone": "(954) 555-5200"
    }
  },
  "problems": [
    {
      "problem": "Left Supracondylar Femur Fracture — Acute, Post-MVC",
      "icd": "S72.402A",
      "onset": "01/2025",
      "status": "Active",
      "notes": "Sustained in high-speed MVC 01/25/2025; comminuted distal femur fracture with posterior displacement and concern for popliteal artery injury; ED evaluation in progress"
    },
    {
      "problem": "Asthma — Mild Intermittent",
      "icd": "J45.20",
      "onset": "2006",
      "status": "Active",
      "notes": "Albuterol PRN; no controller; no hospitalizations"
    }
  ],
  "medications": [
    {
      "name": "Albuterol HFA 90mcg PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath or wheezing",
      "prescriber": "Dr. Mitchell",
      "start": "06/2010",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "07/18/2024",
      "bp": "124/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "210 lbs",
      "ht": "6'2\"",
      "bmi": 27.0,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "120/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "208 lbs",
      "ht": "6'2\"",
      "bmi": 26.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Karen Mitchell, MD",
      "cc": "Annual wellness exam",
      "hpi": "36-year-old healthy male for annual wellness exam. No complaints. Asthma well-controlled — uses albuterol ~1x/month. Active — plays basketball recreationally. No chronic conditions. No medications other than PRN albuterol. Recently promoted at work (construction project manager). Wears seatbelt consistently.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. MSK: Full ROM all joints. Neuro: A&O x3, intact. Skin: No lesions.",
      "assessment": "1. Annual wellness — healthy\n2. Asthma — mild intermittent, well-controlled",
      "plan": "1. Continue albuterol PRN\n2. Routine labs: CBC, CMP, lipid panel\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "07/18/2024",
      "time": "09:30",
      "orderedBy": "Dr. Karen Mitchell, MD",
      "collected": "07/18/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-071815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.0", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "260", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "188", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "108", "unit": "mg/dL", "range": "<100 optimal", "flag": "H" },
            { "test": "HDL Cholesterol", "value": "52", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "140", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-272",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-698",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "2006",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 62",
    "Father: CAD (stent at 58), HTN, alive at 65",
    "Brother: Healthy, age 33",
    "Sister: Sickle cell trait, alive at 30",
    "No family history of bleeding disorders or clotting disorders"
  ],
  "socialHistory": [
    ["Occupation", "Construction project manager"],
    ["Marital", "Married, 2 children (ages 5, 3)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Basketball 2x/week; gym 3x/week"],
    ["Housing", "Single-family home with wife and children"],
    ["Safety", "Seatbelt always; hard hat at work; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "vascular-injury-with-limb-ischemia",
    "diagnosis": "Popliteal Artery Injury with Acute Limb Ischemia — Left Leg (Post-Supracondylar Femur Fracture, High-Speed MVC)",
    "acuity": 1,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  }
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['vascular-injury-with-limb-ischemia'] = {
  id: 'vascular-injury-with-limb-ischemia', name: 'Andre Jackson',
  chiefComplaint: 'Acute Limb Ischemia — Six Ps and Heparin',
  diagnosis: 'Acute Limb Ischemia — Six Ps and Heparin',
  orders: {
    correct: [{ id: 'heparin-ali', name: 'IV unfractionated heparin — immediately on clinical diagnosis', rationale: 'Start heparin (70-80 u/kg bolus → 15 u/kg/hr infusion) immediately when acute limb ischemia is recognized — before imaging, before OR. Heparin prevents propagation of clot, reduces risk of venous thrombosis, and preserves collateral perfusion. Do not delay for confirmatory imaging in viable limb.' },{ id: 'ct-angiography-ali', name: 'CTA of affected extremity — confirms diagnosis and identifies level', rationale: 'CTA identifies embolic vs thrombotic cause, level of occlusion, and collateral circulation. Embolic: sharp cut-off, no collaterals, other vessel disease absent. Thrombotic: irregular margins, collaterals present, diffuse atherosclerosis. CT guides intervention (embolectomy vs bypass vs thrombolysis).' }],
    incorrect: [{ id: 'fasciotomy-immediate', name: 'Fasciotomy immediately — compartment syndrome from ischemia', rationale: 'Fasciotomy is performed AFTER revascularization, not before. Ischemia-reperfusion injury after revascularization causes compartment syndrome — prophylactic 4-compartment fasciotomy of the lower leg is performed at the time of revascularization if ischemia time >4-6h. Fasciotomy before revascularization does not restore flow.' },{ id: 'warfarin-ali', name: 'Start warfarin — long-term anticoagulation for limb ischemia', rationale: 'Warfarin (or DOAC) is used for SECONDARY PREVENTION after revascularization — not for acute treatment. Acute limb ischemia is treated with IV heparin + emergent revascularization (embolectomy, surgical bypass, or catheter-directed thrombolysis). Chronic anticoagulation is started after the acute event is addressed.' }]
  },
  teachingPoints: {
    keyLearning: ['Six Ps of acute limb ischemia: Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia. Paresthesias and paralysis indicate irreversible ischemia developing — emergency revascularization.','Viable vs non-viable limb: viable = pain, pallor, pulselessness only (no sensory/motor loss) → revascularization possible. Non-viable = paralysis + paresthesias + muscle rigor + marble skin → primary amputation. Rutherford classification guides management.','Embolism vs thrombosis: embolism (sudden, no prior claudication, atrial fibrillation, sharp cut-off on CTA) = embolectomy (Fogarty catheter). Thrombosis (gradual onset, claudication history, atherosclerosis, collaterals) = catheter-directed thrombolysis or bypass graft.'],
    boardPearls: ['Reperfusion injury: restored blood flow to ischemic muscle → calcium influx, free radicals, inflammatory mediators → myonecrosis → rhabdomyolysis → hyperkalemia → compartment syndrome. Treat with IV fluids, alkalinize urine, monitor K+ and Cr.','Fasciotomy for compartment syndrome: 4-compartment lower leg (anterior, lateral, posterior superficial, posterior deep). If any compartment pressure >30 mmHg or within 30 mmHg of diastolic BP = fasciotomy. Leave fasciotomy wounds open, close/skin graft at 48-72h.','Embolectomy technique: Fogarty balloon catheter → passed distal to clot → balloon inflated → withdrawn, pulling clot with it. Success depends on time from onset and clot age. Thrombosed popliteal aneurysm: common source of distal emboli — check popliteal artery for aneurysm.']
  }
};
